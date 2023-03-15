---
sidebar_position: 3
---

# Data structures and messages 

1. RMQ (Reliable Message Queue) — Catchain-based protocol, described separately
2. All REMP incoming messages from other nodes include the following info:
    1. Message body (```ton-block::Message```) - contains account's address
    2. Message Id - message's hash
    3. Source key (to know which node originated the message)
    4. timestamp
    5. signature(timestamp + source key + message id)
3. After processing, REMP asynchronously responds with processing receipts, containing the following info:
    1. Message Id
    2. Processing status
    3.  and timestamp
    4. signature(timestamp + message id + status)
    
    The message may receive several receipts after it was send (each collator may send its own receipt, also several different responses may follow for the same message).

### Message statuses

Here is the list of message statuses. Some of the statuses are for internal processing in REMP engine only, some others are sent to fullnode and written into RMQ.

Some of the statuses are technically equivalent (e.g. New and IgnoredAfterVoting) — however, their difference may be important for the user and they are important for debugging purposes.

Some of the statuses are final (their names are given in **bold**)

|          Status          |                                                                   Meaning                                                                   |              Who discovers             |                  Flow                  |
|:------------------------:|:-------------------------------------------------------------------------------------------------------------------------------------------:|:--------------------------------------:|:--------------------------------------:|
| New                      | This status is posted after the message was put into RMQ                                                                                    | Each node                              | Put into RMQ, sent to fullnode         |
| AddedToBlock             | This status appears when message was included into one of the block candidates. Each node may have different block candidate for a message. | Node that added the message.           | Sent to fullnode.                      |
| AddedToShardchain        | This status appears, when collated block containing the message is approved by validators and included into shardchain.                     | Each node                              | Sent to fullnode (everybody sends it?) |
| AddedToMasterchain       | The message finally accepted by the blockchain                                                                                              | Each node                              | Sent to fullnode (everybody sends it?) |
| RejectedByCollator       | The message rejected by collator. If 5 of 7 validators reject the message, then the message is ignored                                      | Node that tried to collate the message | Put into RMQ, sent to fullnode.        |
| SkippedAsDuplicate       | The message collated into some other block by other node                                                                                    | Each node                              | sent to fullnode                       |
| BlockIgnoredByShardchain | The block candidate with the message was not rejected, but was not included into block.                                                     |                                        |                                        |

Statuses flow:

New → AddedToBlock/RejectedAsDuplicate/**RejectedByCollator**/**RejectedAfterTimeout**

AddedToBlock → AddedToShardchain/BlockIgnoredByShardchain/BlockRejectedByValidator

SkippedAsDuplicate → BlockRejectedByValidator/BlockRejectedByMasterchain/BlockIgnoredByShardchain/BlockIgnoredByMasterchain

AddedToShardchain → **AddedToMasterchain**/BlockIgnoredByMasterchain/BlockRejectedByMasterchain

Equivalent to New:

These statuses mean that the message returned back into its initial "New" state and a new collation attempt should be handled:

BlockIgnoredByShardchain, BlockRejectedByValidator, BlockIgnoredByMasterchain, BlockRejectedByMasterchain

These statuses are assigned to messages in all non-final statuses.

### An alternative view of the statuses:

Levels: 0 (Queue), 1 (Collator), 2 (Shardchain), 3 (Masterchain)

|           Status           | Level |  Outcome |
|:--------------------------:|:-----:|:--------:|
| New                        | 1     | Waiting  |
| AddedIntoBlock             | 1     | Accepted |
| RejectedByCollator         | 1     | Rejected |
| RejectedAfterTimeout       | 1     | Rejected |
| SkippedAsDuplicate         | 1     | Waiting  |
| BlockIgnoredByShardchain   | 2     | Rejected |
| AddedIntoShardchain        | 2     | Accepted |
| BlockRejectedByShardchain  | 2     | Rejected |
| BlockIgnoredByMasterchain  | 3     | Rejected |
| BlockAcceptedByMasterchain | 3     | Accepted |
| BlockRejectedByMasterchain | 3     | Rejected |

Rejected at level 1 — final reject; Accepted at level 3 — final accept; Rejected at intermediate level — return to level 1 and waiting for next collation.
