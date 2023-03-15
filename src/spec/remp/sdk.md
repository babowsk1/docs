---
sidebar_position: 2
---

# Data structures & REMP-SDK interop

|          Status          |                                                                   Meaning                                                                   |              Who discovers             |                  Flow                  |
|:------------------------:|:-------------------------------------------------------------------------------------------------------------------------------------------:|:--------------------------------------:|:--------------------------------------:|
| New                      | This status is posted after the message was put into RMQ                                                                                    | Each node                              | Put into RMQ, sent to fullnode         |
| AddedToBlock             | This status appears when message was included into one of the block candidates. Each node may have different block candidate for a message. | Node that added the message.           | Sent to fullnode.                      |
| AddedToShardchain        | This status appears, when collated block containing the message is approved by validators and included into shardchain.                     | Each node                              | Sent to fullnode (everybody sends it?) |
| AddedToMasterchain       | The message finally accepted by the blockchain                                                                                              | Each node                              | Sent to fullnode (everybody sends it?) |
| RejectedByCollator       | The message rejected by collator. If 5 of 7 validators reject the message, then the message is ignored                                      | Node that tried to collate the message | Put into RMQ, sent to fullnode.        |
| SkippedAsDuplicate       | The message collated into some other block by other node                                                                                    | Each node                              | sent to fullnode                       |
| BlockIgnoredByShardchain | The block candidate with the message was not rejected, but was not included into block.                                                     |                                        |                                        |

**REMP message flow**

REMP external messages have absolutely the same structure as regular external messages. They send requests using existing kafka topics. 

**REMP message statuses**

While a REMP message is processed, it passes through multiple phases. That is, REMP messages have different statuses. The messages can be in some statuses multiple times. 

All possible statuses:
- **SentToValidators** - the message was read by kafka and successfully sent to validators
- **RejectedByNode** - the message was rejected by the full node before being sent to validators. It’s a final decision. The message will not be re-sent again.
- **PutIntoQueue** - the message was received by the validator and included in a special REMP catchain session - waiting for collation.
- **RejectedByCollator** - the message was rejected by the collator. It will not be tried again by this particular validator. All validators must reject the message before it is finally rejected. A message, rejected by one node, may be successfully included into a block by another node later. The reasons being are: bugs in software or changes in the state. For instance, money suddenly arrives in the account. 
- **IncludedIntoBlock** - the message was successfully included into a block candidate.
- **IncludedIntoAcceptedBlock** - the block candidate was accepted by shard's validators.
- **Finalized** -  the hash of the block candidate or its descendant was committed into the masterchain.

Each stage includes:
- **message_id** - the root hash of the message boc
- **timestamp** - unix time in milliseconds
- **source id** - the entity that generated the information about the stage. For example, it is the full node for SentToValidators stage and collator for RejectedByCollator stage.
- **signature** - the record about the stage is signed by the source. 
- **special fields** - (see below)

All possible REMP massage stages with all data fields:

```json
{
    {
        "kind": "SentToValidators",
				"message_id": "16923245c4bd57762330e454926a81dcb45626b433121c51804075b3cc26984e", // 32 bytes hex
        "timestamp": 1632750383000, // 64 bits, unix time in milliseconds
        "source_id": "1692345dc4bd57762330e454926a81dcb45626b433121c51804075b3cc26984e", // 32 bytes hex
        "signature": "1692345dc4bd57762330e454926a81dcb45626b433121c51804075b3cc26984e", // 32 bytes hex,
        
        "sent_to": 4, // number of validators message was successfully sent to
        "total_validators": 5
    },
    {
        "kind": "RejectedByFullnode",
				"message_id": "16923245c4bd57762330e454926a81dcb45626b433121c51804075b3cc26984e",
        "timestamp": 1632750383000,
        "source_id": "1692345dc4bd57762330e454926a81dcb45626b433121c51804075b3cc26984e", 
        "signature": "1692345dc4bd57762330e454926a81dcb45626b433121c51804075b3cc26984e",
        
        "error": "Can't deserialize message"

    },
    {
        "kind": "PutIntoQueue",
				"message_id": "16923245c4bd57762330e454926a81dcb45626b433121c51804075b3cc26984e",
        "timestamp": 1632750383000,
        "source_id": "1692345dc4bd57762330e454926a81dcb45626b433121c51804075b3cc26984e",
        "signature": "1692345dc4bd57762330e454926a81dcb45626b433121c51804075b3cc26984e",
    },
    {
        "kind": "RejectedByCollator",
				"message_id": "16923245c4bd57762330e454926a81dcb45626b433121c51804075b3cc26984e",
        "timestamp": 1632750383000,
        "source_id": "1692345dc4bd57762330e454926a81dcb45626b433121c51804075b3cc26984e",
        "signature": "1692345dc4bd57762330e454926a81dcb45626b433121c51804075b3cc26984e",
        
        "error": "Contract rejected message with error code 52"
    },
    {
        "kind": "IncludedIntoBlock",
				"message_id": "16923245c4bd57762330e454926a81dcb45626b433121c51804075b3cc26984e",
        "timestamp": 1632750383000,
        "source_id": "1692345dc4bd57762330e454926a81dcb45626b433121c51804075b3cc26984e",
        "signature": "1692345dc4bd57762330e454926a81dcb45626b433121c51804075b3cc26984e",

				// shard block the message was included to
        "block_id": "1692345dc4bd57762330e454926a81dcb45626b433121c51804075b3cc26984e",
				"block_file_hash": "00a2345dc4bd57762330e454926a81dcb45626b433121c51804075b3cc26984e",
        "block_seqno": 123,
        "shard": "3800000000000000",
        "wc": 0,
    },
    {
        "kind": "IncludedIntoAcceptedBlock",
				"message_id": "16923245c4bd57762330e454926a81dcb45626b433121c51804075b3cc26984e",
        "timestamp": 1632750383000,
        "source_id": "1692345dc4bd57762330e454926a81dcb45626b433121c51804075b3cc26984e",
        "signature": "1692345dc4bd57762330e454926a81dcb45626b433121c51804075b3cc26984e",
        
				// shard block the message was included to
        "block_id": "1692345dc4bd57762330e454926a81dcb45626b433121c51804075b3cc26984e",
				"block_file_hash": "00a2345dc4bd57762330e454926a81dcb45626b433121c51804075b3cc26984e",
        "block_seqno": 123,
        "shard": "3800000000000000",
        "wc": 0,
    },
    {
        "kind": "Finalized",
				"message_id": "16923245c4bd57762330e454926a81dcb45626b433121c51804075b3cc26984e",
        "timestamp": 1632750383000, // 64 bits
        "source_id": "1692345dc4bd57762330e454926a81dcb45626b433121c51804075b3cc26984e",
        "signature": "1692345dc4bd57762330e454926a81dcb45626b433121c51804075b3cc26984e",
        
        // master block where shard block with the message is commited to
        "mc_block_id": "1692345dc4bd57762330e454926a81dcb45626b433121c51804075b3cc26984e",
        "block_file_hash": "33b2345dc4bd57762330e454926a81dcb45626b433121c51804075b3cc269800",
        "mc_block_seqno": 234,
        
				// shard block the message was included to
        "block_id": "1692345dc4bd57762330e454926a81dcb45626b433121c51804075b3cc26984e",
				"block_file_hash": "00a2345dc4bd57762330e454926a81dcb45626b433121c51804075b3cc26984e",
        "block_seqno": 123,
        "shard": "3800000000000000",
        "wc": 0,
    }
}
```

**Other statuses**

The statuses listed above are the most common. However, in REMP, core statuses are pairs of two parameters: ”**level**” - the node component that processed the message and “**status**” - the outcome of the message processing. There are also some out-of-the-order statuses. In JSON, both level and status are combined into a “**kind**” field. The table below shows how each level and status mixes are called in JSON. The main statuses listed above are marked <font color="green">green</font>, while the statuses you can get in special situations are marked <font color="orange">orange</font>. The **empty cell** means you will never get such a mix of parameters. 

| ↓ status \| level → | Full node              | Quenue          | Collator                               | Shard chain               | Master chain         |
|:-------------------:|------------------------|-----------------|----------------------------------------|---------------------------|----------------------|
| Accepted            |                        |                 | <font color="green">IncludedIntoBlock(optimistic finality)</font>. | <font color="green">IncludedIntoAcceptedBlock</font> | <font color="blue">Finalized +5-25s</font> |
| Ignored             |                        | <font color="orange">IgnoredByQueue</font>  | <font color="orange">IgnoredByCollator</font>                      | <font color="orange">IgnoredByShardchain</font>       | <font color="orange">IgnoredByMasterchain</font> |
| Rejected            | <font color="red">RejectedByFullnode +0s</font> |                 | <font color="orange">RejectedByCollator</font>                     | <font color="red">RejectedbyShardchain</font>      |                      |
| SentToValidators    | <font color="green">SentToValidators</font>       |                 |                                        |                           |                      |
| New                 |                        | <font color="green">PutIntoQueue</font>    |                                        |                           |                      |
| Duplicate           |                        | <font color="orange">Duplicate</font>       |                                        |                           |                      |
| Timeout             |                        | <font color="red">Timeout + 4 min</font> |                                        |                           |                      |
|                     |                        |                 |                                        |                           |                      |

- <font color="green">green</font> status means right sequence of events
- <font color="orange">orange</font> status means non critical errors or warnings
- <font color="red">red</font> status means critical error - the message will never be included into blockchain
- <font color="blue">blue</font> status means successful - the message was included into blockchain
- Optimistic finality is <font color="green">IncludedIntoBlock</font>.

When a message is sent via REMP, it passes through several software components, performing on different computers. Each component has a level of message processing and each level has a number assigned to it.

1. **Full node - level 0** - messages are accepted by the full node and checked there.
2. **Queue - level 1** - messages are sent to validator nodes. Seven or more validator nodes per thread, depending on the blockchain config. Accepted by the Queue.
3. **Collator - level 2** - messages are added to block candidates - collated. Each validator node has its own collator component. Accepted by the collator.
4. **Shardchain - level 3** - block candidates are validated. A node collated a block candidate and reports about its success. A successfully validated candidate becomes a shardblock.
5. **Masterchain - level 4** - the shard blocks are added to the masterchain. 

Due to the byzantine nature of the blockchain algorithms, Queue, Collator and Shardchain stages are executed in parallel on each validator node separately. Each validator node reports about its message copy success on its own. That is, some statuses, from full node and masterchain levels are returned once. All other statuses from Queue, Collator and Shardchain levels are returned many times. Seven or more, depending on the blockchain config copies. Unless a message is failed in all its parallel ways, one cannot consider that the message is failed.

**Statuses - general picture**

Almost all statuses may be separated into three categories: Accepted, Rejected and Ignored.
Each “**Accepted**” means that the message is processed and transferred to the next component. It adds 1 to the level.      
Each “**Ignored**” means that the message was lost (didn’t fit into the block, etc), so it returns the message to the Queue level.      
Each ”**Rejected**” means that the message will not be processed further by the particular node.

Also, there are some additional statuses not fitting into the general scheme:

**“Duplicate”** returns/keeps the message at the Queue level.          
**“New”** (”PutIntoQueue”) is sent when the message first enters the Queue level. “SentToValidators” may be thought of as Accepted for level 0.

Full node level and Finalized status originated from Full node (one instance). All other statuses are multithread. One thread per thread validator, usually seven instances. Each “New” status will be followed by a series of other statuses, with **“Reject”/”Timeout”** at the end in case of failure.

**The main sequence - the message is sent and accepted**

The message is accepted at all levels: Full node, Queue, Collator, Shardchain, and Masterchain.

**“SentToValidators”** (Accepted by the Full node) → “PutIntoQueue” (New) → (Accepted by the Queue — internal status, not sent from the full nodes ) → **“IncludedIntoBlock”** (Accepted by a Collator) → **“IncudedIntoAcceptedBlock”** (Accepted by Shardchain) → **“Finalized”** (Accepted by the Masterchain).

**Rejection sequences**

1. A message may be rejected by the full node before processing. For instance, when it’s incompatible with its current state.       
**“RejectedByFullnode”**        
No more messages from that full node will follow. It’s a final state.
2. A message may be rejected by a collator. For instance, in case the message becomes incompatible with the new state.      
**“RejectedByCollator”**        
It’s a final state for each validator from the validator set. However, other validators may validate the message. One should wait for 2/3 rejects for a highly probable reject and for all rejects for a guaranteed reject. After that, nobody will try to collate the message.
3. Messages may be repeatedly ignored until a timeout happens (after 4 mins)        
**“Timeout”**       
It’s a final state for each validator from the validator set. However, other validators may manage to successfully include the message in the block. One should wait for all timeouts. All validators must reply with timeout.

In 2 and 3 cases **(rejects/timeouts)**, one should consider that all **“New”** messages must be answered with a corresponding **“Reject”** or **“Timeout”**. Unless you have a pair for each “New”message, you cannot be sure that the message is finally declined.

**Possible flow variations**

A message may be ignored by a Collator, Shardchain or Masterchain. This means that the message didn’t fit into the block, the block didn’t fit into the masterchain, etc. The message will then return to the collator queue and will be included into the next available block candidate.

A message may be switched between Collator and Queue levels several times: SentToValidators, New, PutIntoQueue, IncludedIntoBlock, PutIntoQueue, IncludedIntoBlock, IncudedIntoAcceptedBlock, Finalized. It also may be switched in more elaborate ways, returning to Queue level several times — and finally either

Finalizing or falling into Timeout/Reject.

**Message statuses in kafka**

Each status is produced into a kafka topic. The **key** is a message ID while **value** is a json with one status.

**Checking the signature of the status**

To check a signature status, you need to convert it into binary format and then check your signature using a key you can get from the validator set. The full node’s key will go another way **(it will be described later).**

```rust
// parse json
let json: serde_json::Value = serde_json::from_slice(receipt)?;

// convert json -> binary struct
let (receipt, signature) = ton_block_json::parse_remp_status(
    json.as_object().ok_or_else(|| error!("Can't parse remp status json as a map"))?
)?;

// serialize binary struct
let receipt_bytes = adnl::common::serialize(&receipt)?;

// find pub key in validator set
// validator_set: ton_block::ValidatorSet
let mut pub_key = None;
for v in validator_set.list() {
    let k = adnl::common::KeyOption::from_type_and_public_key(
        KeyOption::KEY_ED25519, v.public_key.key_bytes());
    if k.id().data() == receipt.source_id().as_slice() {
        pub_key = Some(k);
        break;
    }
}

// check signature
if let Some(pub_key) = pub_key {
    pub_key.verify(&receipt_bytes, &signature)?;
}
```
