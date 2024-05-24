/** Node: node (single element) for a queue. */

class Node {
  constructor(val) {
    this.val = val;
    // a pointer to the next node in the queue 
    this.next = null;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    // the number of nodes in the queue
    this.size = 0;
  }

  /** isEmpty(): check if the queue is empty 
   * returns true if empty */

  isEmpty(){
    return this.size === 0;
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    // referencing the node class 
    let node = new Node(val);

    if (this.isEmpty()) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }
    this.size++;
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    if (this.isEmpty()) throw new Error("can't dequeue empty queue");

    let temp = this.first;
    if (this.first == this.last){
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.val;
  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    return this.first.val;
  }
}

module.exports = Queue;
