---
sidebar_position: 4
title: Everscale, Cosmos and Avalanche
---

# Everscale, Cosmos and Avalanche:  a comparison of most scalable blockchains allowing the creation of application-specific blockchains 

Everscale, Cosmos and Avalanche provide horizontal scaling via an asynchronous network model. That is to say, these platforms deliver the instruments necessary to create your own blockchain. Actually, they have different names in each network: **workchain in Everscale, zone in Cosmos and subnet in Avalanche.**

Newly created blockchains can have different virtual machines, configuration parameters and, if necessary, a native currency. In turn, if necessary, they can interact with other blockchains of the network via cross-chain communication. Coupled together, such an architectural construct can accommodate not hundreds of thousands (as it is today), but millions of active users and fully realize the vision of Web3 owned and controlled by users.

:::tip

Application-specific blockchains are those customized to host a single application. Instead of building a dApp on top of an underlying blockchain, developers build their own blockchain. This means building a full-node client, a light-client, and all the necessary interfaces to interact with the nodes.

:::

Setting in motion a decentralized service as a separate chain instead of a set of smart contracts has several fundamental advantages:

1. **Performance isolation**: Isolating the blockchain from the main network ensures that users of the service are not affected by unrelated high network activity. This way, it provides higher performance while it is also possible to connect to other chains in the network in case needed.
2. **Predictable fees**: The fee on the main network is not under the user’s control. Heightened activity of some applications on the network may increase the fee, which will be arbitrary for a separate chain. A flexible fee structure permits to have predictable fees and eliminates the need for networks’ native tokens. You don't need EVER, ATOM, or AVAX to use application-specific chains. 
3. **Sovereignty**: In case of one-chain blockchains if there is a bug or if a new feature is needed, the developers of the application have few possibilities to upgrade the code. That is to say, if the community of the underlying blockchain refuses any changes to the code, nothing can happen. In contrast, on multi-blockchain platforms such as Everscale, devs are the sole designers of their application-specific blockchains.
4. **Security**: Developers are not limited by the cryptographic functions made available by the underlying Virtual Machines. They can use their own custom cryptography, and rely on well-audited crypto libraries.
5. **Even more security**: Developers do not have to worry about potential bugs or exploitable mechanisms in the underlying Virtual Machine. In turn, it makes it easier for them to reason about the security of their own application.

Although Everscale, Cosmos and Avalanche are all horizontally scalable, they have significant differences at the protocol level. These include:

- [The consensum mechanism](#consensus-mechanisms)
- [Cross-chain communication](#cross-chain-communication)
- [Scalability approaches](#scalability-approaches)

The comparison below is intended to help developers, entrepreneurs, researchers and anyone who is considering creating next-gen Web3 solutions. It will help comprehend the differences between the three architectures and the compromises the developers had to make to deliver these highly competitive platforms.

## Consensus mechanisms 

### Everscale’s Catchain 

Everscale consensus overall idea is quite similar to PBFT (Practical Byzantine Fault Tolerance) and Cosmos’ Tendermint. There is the same three-step phase (Block approval, Voting, Pre-committing) characteristic of all of them. However, with slight variations. Let us briefly examine what differentiates these protocols from Catchain:

#### PBFT

The Slot leader is re-elected only if it does not perform well. In comparison, Catchain changes leaders each round in a deterministic fashion.

One round of block voting requires O(n²) messages (where n = number of nodes). Each node sends a message to all others. Catchain uses a special protocol which greatly reduces the number of messages: the outgoing messages are sent to a small number of neighbors (5 is the default number) and then those neighbors resend them further.

### Cosmos’ Tendermint

Tendermint is the closest algorithm to Catchain. Its main advantage revolves around its very fast block completion. As in Catchain, the proposer node is selected in a round-robin fashion each turn. Tendermint needs only local clocks to compute timeouts. This is in contrast to Catchain, which requires globally synchronous clocks. This may make Catchain vulnerable to “eclipse” attacks. That is, by manipulating NTP messages one may make a node completely out of sync. The blockchain will remain correct but this particular node will not be able to vote and propose its blocks. To tackle this issue, Cosmos implemented a gossip message-propagation algorithm. It reduces the number of messages to O(n log n) for each voting. Catchain, in turn, has its overlay protocol for broadcasting messages, which does a similar thing.

**However, there is a drawback** of Tendernint’s fast completion. Namely, since each node has to communicate with each other, it has quadratic message passing complexity and can complete only one block at a time.

### Avalanche Consensus

Avalanche uses its own consensus mechanism. It does not have any similarities with Catchain or Tendermint. Instead of a linear chain, it combines repeated sub-sampling of votes among confirming nodes (Snowball) and transitive voting in a Directed Acyclic Graph (DAG). Since Avalanche consensus has a constant complexity of message transmission, it provides low latency and a large number of participants in the network. It has probabilistic finality, like the Nakamoto consensus, but it can be customized and has an astronomically low bounce rate. 

However, despite its strong points, there is a **solid drawback** to Avalanche’ consensus. There is not a penalty mechanism for validators. That is, malicious or careless validators are not penalized for misconduct. It comes in contrast to Everscale, where validators are having their stakes slashed in case of misbehavior. 

## Cross-chain communication

- **Everscale** - provides the possibility to create own application-specific blockchains called workchains. There is the possibility for cross-chain communication between the workchcains. All workchain block proofs are posted to the masterchain. The blocks of the masterchain contain the latest block hashes of all other chains in the network. Everscale’s architecture can potentially accommodate up to 232 workchains. 

- **Cosmos** allows you to create a distributed network of blockchains called ‘’zones’’ with their own sets of validators. The interaction between these chains is achieved using the Inter-Blockchain Communication **(IBC)** bridge protocol. Each chain must implement an IBC in order to establish a bridge with other chains. Currently, there are 56 chains supporting IBC, with specializations such as DeFi, EVM smart contracts, social networks, privacy and games. Bridges to Ethereum, Bitcoin and others are under development.

**Notwithstanding its pros, there is a drawback** in this approach. That is, a bridge between blockchains with separate security levels without any security separation mechanism, as in the current Cosmos architecture, is not much different from a bridge between any chains as a whole. Thus, without general guarantees of finality, inter-chain interaction has a different level of risk. Therefore, a more secure communication protocol is yet to be developed. 

- **Avalanche** allows you to create an overlapping network of Confirmators organized in the form of subnets. There are several chains that simultaneously check the main network. Different networks in the same subnet can transfer assets to each other almost instantly. The communication between subnets is currently carried out through bridges. Namely, via ChainBridge-Solidity contracts for EVM chains. In fact, the more subnets have overlapping confirmations with other subnets, the higher security guarantees they can have when communicating with each other. Currently, there are 3 chains in the main network: **X-Chain** for transfers, **P-Chain** for staking, **C-Chain** for smart contracts. Other chains and subnets are in the process of being created. In addition, there is the Avalanche-Ethereum bridge, which operates through a trusted federation. 

Actually, here we end up with the **same drawback** as in the Cosmos’ case. There is no security separation mechanism. The communication between subnets is also accomplished via bridges. 

## Scalability approaches 

The total amount of computing work per second that the network can handle depends on the complexity of the virtual machine and the runtime functions used in the network. Everscale Cosmos and Avalanche create specialized asynchronous blockchain networks, so ultimately, these networks as a whole have no throughput limitations. However, what really matters is how a separate chain can handle periods  of time with heightened activity. Everscale, on its part, is the only of the three platforms compared here that developed a unique and extremely efficient multithreading approach. It allows parallel execution of smart contracts by subgroups of validators that share the same data. To see how it works, we will once again supply you with the animation that we started this analysis with. It depicts how a workchian under severe pressure divides into threads to be able to process the increasing number of incoming messages (transactions). The whole process can continue up to 256 threads. That is to say, any application-specific workchain will be able to process almost any number of transactions in a timely and secure manner. 

:::info 

To learn more about Everscale’s scalability please follow [this page](infinite-scalability.md).

:::