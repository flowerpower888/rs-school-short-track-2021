const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.value = undefined;
    this.length = 0;
  }

  get size() {
    return this.length;
  }

  enqueue(element) {
    if (this.length === 0) {
      this.head = new ListNode(element);
    } else {
      let cur = this.head;
      while (cur.next) {
        cur = cur.next;
      }
      cur.next = new ListNode(element);
    }
    this.length += 1;
  }

  dequeue() {
    if (this.head === null) return null;
    const val = this.head.value;
    this.head = this.head.next;
    this.length -= 1;
    return val;
  }
}

module.exports = Queue;
