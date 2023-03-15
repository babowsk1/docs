---
sidebar_position: 4
---

# RMQ implementation details 

**Reliable Message Queue Implementation Details**

At the core of the Reliable Message Queue is the Catchain protocol. It is responsible for storing the queue and distributing its data between participating nodes.

**Reliable Message Queue Initialization/Disposal**

1. Message Queue is created at the Shard initialization. The Catchain for Message Queue has two sets of nodes:
   1. All nodes of the current shard - seven or more, depending on the Catchain config. Let this number be S.
   2. All previous nodes for the shard. The number of previous nodes may change from 0, if this is the first block in the masterchain to 2*S, if a **Merge** takes place. It works as follows: Shard A joins Shard B, as a result a new Shard C is formed. Its predecessors were validators for Shard A + validators for Shard B.
   3. So, in total, this Catchain may have from S to 3*S nodes.
2. When the current Shard is terminated, it joins the catchain(s) for its heirs. It could have next two catchains if the Shard is split. It copies all current non-expired messages there and leaves the catchain.
3. This scheme with message copying is simpler than the scheme with parallel message copying. The messages are not sent to the next validators at Shard validator set termination. Instead, they are sent to the guessed future validator set.  
In case of **Split/Merge** the messages must be resent and has less bandwidth requirement. However, it gives an unbalanced load of the network (additional activity at validator set change), and in future it could be replaced/redesigned.

**Reliable Message Queue Processing**

1. Three kinds of values are kept in the queue: external message, message **"refusal receipt"** and **"successfully collated"** receipt. Each message has master catchain seqno its generation. Each message that is two or more master catchains old is called “expired” and it is not transferred to the next catchain session.
2. When a new message arrives to the validator from a full node, the validator places the message into the Message Queue Catchain. A message may exist in the Message Queue Catchain in several copies. However, the validator keeps track of the received messages and ignores all later copies.
3. Collators take the queue and process all new messages in it. Each message is checked for replay — whether it was already added to a block or declined. Each message should be declined by each node — so Collator checks for (1) messages added to blocks earlier and for (2) messages seen in the current session.
4. Validators do the same check: whether the message is already present in earlier blocks. If it does, then the block is declined.

**The communication with clients**

The client sends a message to the shardchain validator - the message is placed in the queue. Then, validators give back numerous receipts, showing the message processing history. Among them:

- Queue placement (receive receipt)
- Processing receipt - either **"refusal"** or **"successfully collated"**
- Shard block receipt - when the message was successfully placed into a shard block.

**The communication between nodes**

All nodes participating in the message queue create a separate overlay for communication. It's implementation is very similar to that of Catchain of the Validator session.

The overlay ID is generated from the **MessageQueueID**. It is supplied by node participants in a similar style to the ID generated from **ValidatorSessionID**.

**Data Structures**

1. Catchain-backed message queue
2. The Hashmap for all messages from the message queue **(Message Cache)**. The Hashmap keeps the statuses for each queue message. The Hashmap is garbage-collected at each shard session switch. All messages older than two masterchain catchain seq numbers are removed.

When the validator analyses a proposed block, it checks each message in it. If the message was processed by some node and accepted, then the current block is declined. When the collator generates a new block, it takes the oldest messages from the hashmap. If the collator declines the message, it adds the **"refusal receipt"** to the catchain and modifies the hashmap. When the Catchain-backed message queue receives a new message, it updates the hashmap. When a node receives a new shard block, it checks all messages in the shard block and modifies their status in the hashmap. The same happens in the candidate block. When the node knows that the shard block is approved by the masterchain, it upgrades its messages' status. When the node knows that a shard block is declined by the masterchain, it downgrades the status of all accepted messages from that block.
