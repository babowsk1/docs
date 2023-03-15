---
sidebar_position: 5
---

# Lifecycle of messages in classes

```bash
kafka_consumer::process_message -> remp_client::process_remp_message
 - checking remp message on full_node. The message is read from kafka
if not ok:
    remp_client::new_processing_status
     - sending to kafka the answer
if ok:
    remp_client::process_remp_message_impl -> remp_client::send_remp_message
     - sending the message to the validators + sending the answer to kafka
    
before_collation -> reliable_message_queue::collect_messages_for_collation -> read message_cache::messages + reliable_message_queue::pending_collation_order -> reliable_message_queue::send_message_to_collator -> write ext_messages::messages -> read ext_messages::messages -> collator
 - messages reading by collators. 
Before calling the message collation procedure from message_cache::messages in the order reliable_message_queue::pending_collation_order are transferred to ext_messages::messages, where at the moment of collation they read entirely, sorted and used in collation. The order in pending_collation_order is not used yet, since the messages are read all at once anyway

reliable_message_queue::send_response_to_fullnode -> reliable_message_queue::response_sender 
 - sending the status to the full node
 
validator_session_listener::process_validation_queue -> reliable_message_queue::poll -> read remp_catchain::rmq_catchain_receiver -> write message_cache::messages + (if ignored or new) reliable_message_queue::add_pending_collation -> write reliable_message_queue::pending_collation_order + reliable_message_queue::send_response_to_fullnode
 - adding the message to pending_collation_order and message_cache::messages.    
For each validation event, for example, collation checking) the messages are transferred from 
 
catchain::notify_preprocess_block -> remp_catchain::unpack_payload -> write (if ignored or new) remp_catchain::rmq_catchain_sender
 - adding messages to rmq_catchain. 
The messages are received from the catchain.  
Here, it turns out that remp_catchain::rmq_catchain - is an abstraction level. Without it, it would have been possible to put messages directly in pending_collation_order and message_cache::messages


remp_catchain::process_blocks -> read remp_catchain::pending_messages_queue_receiver -> catchain::processed_block
 - sending messages to catchain from pending_messages_queue 

When does this happen?
 
validator_session_listener::process_validation_queue -> reliable_message_queue::poll -> remp_manager::poll -> read remp_manager::pending_messages | remp_manager::RempQueueDispatcher::queue -> reliable_message_queue::put_message_to_rmq -> remp_catchain::pending_messages_queue_sender
reliable_message_queue::process_collation_result -> reliable_message_queue::process_one_deque_remp_message_status -> remp_manager::poll -> read remp_manager::pending_messages | remp_manager::RempQueueDispatcher::queue -> reliable_message_queue::put_to_catchain -> remp_catchain::pending_messages_queue_sender
validator_group::stop(catchain_session) -> reliable_message_queue::forward_messages -> read reliable_message_queue::pending_collation_order -> remp_catchain::pending_messages_queue_sender
 -  filling pending_messages_queue_sender
   In the first case, the messages are taken from remp_manager::pending_messages, if there are any, or from remp_manager::RempQueueDispatcher::queue (described in 0). 
It occurs for each validation event.
   In the second case, according to the same scheme, messages are transferred after the collation.
    In the third case, when the catchain is changed, all messages are transferred from reliable_message_queue::pending_collation_order

0) remp_manager::poll -> remp_manager::RempQueueDispatcher::queue -> remp_manager::pending_messages
 - filling remp_manager::pending_messages из remp_manager::RempQueueDispatcher::queue
 
1) dht_lib::try_consume_query -> remp::try_consume_query -> remp_service::new_remp_message -> remp_manager::process_incoming_message -> write remp_manager::RempQueueDispatcher::queue
 - receiving the message from the network and adding it to remp_manager::RempQueueDispatcher::queue.
 Check 2)
 
2) remp_manager::receive_message -> read ext_messages::statuses_queue -> remp_manager::poll
 - filling the message chain from remp_manager::RempQueueDispatcher::queue. 
Check 1) The filling takes place with collation results

collator::finalize_block -> engine_operations::finalize_remp_messages -> ext_messages::finalize_messages -> write ext_messages::messages + ext_messages::statuses_queue
 - after collation, updating the array ext_messages::messages 
and the addition of statuses ext_messages::statuses_queue
```