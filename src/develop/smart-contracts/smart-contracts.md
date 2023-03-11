---
slug: "smart-contracts"
sidebar_position: 0
---

# Smart Contracts

Knowing that Ethereum has made a massive investment in developing decentralized technologies, we cannot ignore how EVM’s synchronous architecture has limitations regarding scalability.

If smart contract “A” interacts with smart contract “B,” which then interacts with smart contract “C,” all three interactions on the blockchain must be processed as one transaction.

Therefore, if hundreds of smart contracts have interactions, they’ll have to be processed as a single transaction.

This creates congestion and the inability to separate and parallelize calculations to the point where overcoming this issue becomes impossible as the number of users and transactions grows exponentially.

Everscale, a next-generation blockchain, solves this problem because it has asynchronous actor architecture.

If you’re a programmer, you’ve probably already heard of this term. Most programming languages were synchronous in the beginning, but eventually, they achieved asynchronism, multithreading, and an actor model.

Asynchronism on Everscale is the same unavoidable step in the evolution of blockchain technology.

On Everscale, smart contracts run on the Threaded Virtual Machine, which is incompatible with Ethereum.

Therefore, we enhanced the Solidity programming language specifically to write smart contracts for the asynchronous architecture.

By working with the actor paradigm, developers might have to “readjust” their thinking.

For us, though, all of the latest developments in decentralized technologies will eventually be based on an asynchronous architecture.