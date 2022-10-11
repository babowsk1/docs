---
title: Fee calculation
description: Explanation of the formulas for fee calculation
sidebar_position: 4
---

# Fee calculation

## Introduction

Transaction fees consist of a few types of different fees connected to the execution of a single transaction. Transactions itself are complex processes, and fees are paid relative to different stages of executing them.

In this document, we explain how the fees are calculated.

We shall define transaction_fee as a sum of all fees for a single transaction.

```text
transaction_fee = inbound_external_message_fee
                + storage_fees
                + gas_fees
                + total_action_fees
                + outbound_internal_messages_fee
```

Where:

`inbound_external_message_fee` — is deducted, if an [inbound external message](20-fee-calculation.md#inbound-external-messages) is imported in the transaction.

`storage_fees` — [storage costs](20-fee-calculation.md#storage-fees) since the moment of the last transaction.

`gas_fees` — include all gas fees associated with the transaction. You can find more info in the [Gas calculation basics](30-managing-gas.md#gas-calculation-basics) section.

`total_action_fees` — fees for performing _send message_ [actions](20-fee-calculation.md#action-fees).

`outbound_internal_messages_fee` — is calculated as a sum of fees for all [outbound internal messages](20-fee-calculation.md#outbound-messages) generated by the transaction.

Depending on the nature of the transaction, all of these except storage fees may not be applicable.

Below we examine these types of fees in detail.

> **Note:** Block creation fee is not to be confused with the fees discussed in this document. Block creation fee is the new coins minted by the elector contract and distributed among validators as reward for creating blocks. It is not part of transaction fees.

## Storage fees

Every transaction in Everscale has a storage phase that implies a certain storage fee charged on an account balance. This fee is charged for the period between transactions and is calculated according to the following formula:
```text
storage_fees = CEIL(
    (
        account.bits
        * global_bit_price
        + account.cells
        * global_cell_price
    ) * period / 2 ^ 16
)
```

Where:

`account.bits` and `account.cells` — stand for a number of bits and cells in the Account structure represented as tree of cells (including code and data).

`global_bit_price` — is a global configuration parameter (`p18` for both masterchain and workchains), price for storing one bit.

`global_cell_price` — another global configuration parameter (`p18` for both masterchain and workchains), price for storing one cell.

`period` — number of seconds since previous storage fee payment.

> **Note:** While `account.bits` are generally easy to estimate, the `account.cells` value can vary greatly for different types of data. A cell can contain no more than 1023 bits and 4 references to other cells. Contract code and numerical variables tend to be packed into cells effectively, resulting in mostly full cells, and thus a minimal number of cells needed to store the data. More complex data structures can be packed into cells less efficiently, taking up more cells to store the same amount of data.

**Example:** Let's calculate a minimal fee for storing 1KB of data for the duration of one day on a workchain:

`global_bit_price` = 1

`global_cell_price` = 500

`period` = 86400 seconds

`account.bits` = 8192

The minimal `account.cells` value for 8192 bits of data is 9 (rounding 8192/1023 up to the nearest integer).

Thus the minimum storage fee would be calculated as follows:
```text
storage_fees = CEIL(
    (
        8192
        * 1
        + 9
        * 500
    ) * 86400 / 65536
) = 16733 nanotokens = 0.000016733 tokens
```

Real storage fees for 1KB account can be higher, depending on the specific features of the contract.

If the account balance is less than the due storage fee, the account is frozen and its balance is subtracted from storage fee and reduced to zero. Remaining storage fee is stored in account as debt.

> **Note:** Current global configuration can be always reviewed on [ever.live]( https:/ /ever.live/) in the master config section of the latest key block details ([example](https://net.ever.live/blocks?section=details&id=8cee868a94b1e22794a927279286dc95498310cda982f4657e351a3da693cf27)) `FIXME broken link`. It can only be changed by a vote of validators.


## Message fees

Every message is subject to a forwarding fee, which is calculated according to the following formula:

```text
msg_fwd_fee = (
    lump_price + CEIL(
        (
            bit_price
            * msg.bits
            + cell_price
            * msg.cells
        ) / 2 ^ 16
    )
)
```

`msg.bits` and `msg.cells` are calculated from message represented as a tree of cells. Root cell is not counted. `lump_price`, `bit_price`, `cell_price` are contained in global config parameters `p24` and `p25`, and can and can only be changed by a vote of validators.

> **Note:** Like in storage fees, `msg.bits` are generally easy to estimate, while the `msg.cells` value can vary for different types of messages.

**Example:** Let's calculate a minimal forward fee for sending a 1KB message on a workchain:

`lump_price` = 10000000

`bit_price` = 655360000

`cell_price` = 65536000000

To calculate `msg.bits` we subtract the root cell bits from the total message bits. For this example we'll assume that the root cell is filled completely (usually this is not the case, and the subtracted value is smaller, which results in a higher fee):

```text
msg.bits = 8192 - 1023 = 7169
```

To calculate `msg.cells` we subtract the root cell from the total umber of cells. The minimal number of cells in a 1 KB message is 9 (rounding 8192/1023 up to the nearest integer). Thus `msg.cells` is calculated as follows:

```text
msg.bits = 9 - 1 = 8
```

The minimum forward fee for a 1KB message would be calculated as follows:
```text
msg_fwd_fee = (
    10000000 + CEIL(
        (
            655360000
            * 7169
            + 65536000000
            * 8
        ) / 65536
    )
) = 89690000 nanotokens = 0.08969 tokens
```

Real forward fees for 1 KB messages may be higher, depending on the type and contents of the message.

> **Note:** Current global configuration can be always reviewed on [ever.live](https://ever.live/) in the master config section of the latest key block details ([example](https://net.ton.live/blocks?section=details&id=8cee868a94b1e22794a927279286dc95498310cda982f4657e351a3da693cf27)) `FIXME broken link`.


### Outbound messages

`outbound_internal_messages_fee` is calculated **as a sum** of outbound internal message fees for every message generated as result of transaction execution:

```text
outbound_internal_messages_fee = SUM(
    out_int_msg.header.fwd_fee
    + out_int_msg.header.ihr_fee
)
```

Where

`out_int_msg.header.fwd_fee` is a part of the standard forward fee for the outbound internal message.

`out_int_msg.header.ihr_fee` is currently disabled.

#### Routing

The forward fee for outbound internal message is split into `int_msg_mine_fee` and `int_msg_remain_fee`:

```text
msg_forward_fee = int_msg_mine_fee + int_msg_remain_fee
```

Where:

```text
int_msg_mine_fee = msg_forward_fee * first_frac / 2 ^ 16
```

`first_frac` — is contained in global config parameters `p24` and `p25`, and determines the fraction of the fee, that the current set of validators receive.

> **Note:** Current global configuration can be always reviewed on [ever.live](https://ever.live/) in the master config section of the latest key block details ([example](https://net.ton.ever/blocks?section=details&id=8cee868a94b1e22794a927279286dc95498310cda982f4657e351a3da693cf27)) `FIXME broken link`.

`int_msg_mine_fee` then becomes part of transaction action fees (see below).

The remaining `int_msg_remain_fee` is placed in the header of outbound internal message (becoming `out_int_msg.header.fwd_fee`) and will go to validators who will process the message.

If, while being forwarded to the destination address, the message passes through additional validator sets (i.e. if the validator set changes more than once while the message is being forwarded), a part of `out_int_msg.header.fwd_fee` is payed to the relevant validator set every time and the remaining fee in the message header is reduced by this amount:

```text
intermediate_fee = out_int_msg.header.fwd_fee * next_frac / 2 ^ 16
```

`next_frac` — is contained in global config parameters `p24` and `p25`, and determines the fraction of the remaining forward fee, that intermediary validators receive.

>**Note:** Current global configuration can be always reviewed on [ever.live](https://ever.live/) in the master config section of the latest key block details ([example](https://net.ever.live/blocks?section=details&id=8cee868a94b1e22794a927279286dc95498310cda982f4657e351a3da693cf27)) `FIXME broken link`.

>**Note:** Length of route does not affect the initial calculation of the forward fee. The fee is simply split between all involved validators according to global config parameters.

> **Note:** If an exception is thrown, and a bounce message is generated, it is subject to fees, just like a single regular outbound message.


### Inbound external messages

Whenever an inbound external message needs to be imported for transaction execution, the for this action fee is calculated according to the [standard forwarding fee formula](20-fee-calculation.md#message-fees), and paid to the current validators.

## Action fees

Action fees pay for performing 'send message' actions. They consist of all fees for external outbound messages, and the first fraction of internal outbound message fees. They are calculated as follows:

```text
total_action_fees = total_out_ext_msg_fwd_fee + total_int_msg_mine_fee
```

where:

`total_out_ext_msg_fwd_fee` — sum of implicit forward fee for all generated outbound external messages.
`total_int_msg_mine_fee` — sum of 'mine' parts of message forward fees for outbound internal messages.
`total_fwd_fees` — is a separate way to calculate total forwarding fees.

```text
total_fwd_fees = total_action_fees + SUM(
    int_msg_remain_fee
    + out_int_msg.header.ihr_fee
)
```

`out_int_msg.header.ihr_fee` — this fee is currently zero.

The action fee might be absent if no actions are performed during the transaction.

## Gas fees

`trans.gas_fees` includes all gas fees associated with the transaction.

As with Action fees, Gas fees are not always applicable. They can be skipped if the TVM compute phase is not initialized for a transaction.

In order to study the calculation of Gas fees in detail please consult [this page](30-managing-gas.md).