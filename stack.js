/** Node: node for a stack. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

   /** isEmpty(): check if the queue is empty 
   * returns true if empty */

   isEmpty(){
    return this.size === 0;
  }


  /** push(val): add new value to end of the stack. Returns undefined. */

  push(val) {
    // referencing the node class 
    let node = new Node(val);

    if (this.isEmpty()) {
      this.first = node;
      this.last = node;
    } else {
      let temp = this.first;
      this.first = node;
      this.first.next = temp;
    }
    this.size++;
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    if (this.isEmpty()) throw new Error("can't pop empty queue");

    let temp = this.first;
    if (this.first == this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size --;
    return temp.val;
  }

  /** peek(): return the value of the first node in the stack. */

  peek() {
    return this.first.val;
  }
}

module.exports = Stack;
