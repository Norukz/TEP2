const Node = require('./node');

/**
 * +----------------+
 * |   LinkedList   |
 * +----------------+
 * | head           |
 * | tail           |
 * | size           |
 * +----------------+
 * | toString       |
 * |                |
 * +----------------+
 */
class LinkedList {
  constructor () {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  isEmpty () {
    /* if (!this.size) {
      return true;
    } else {
      return false;
    } */
    // return !this.size === false
    return !this.size ? true : false;
  }

  /**
   * appendToStart
   * @param {number} value The new node value 
   */
  appendToStart (value) {
    // 1. Create a new node
    const newNode = new Node(value);
    // 2. new node points to head
    newNode.next = this.head
    // 3. head = new node
    this.head = newNode
    // 4. ++this.size
    ++this.size;
    // 5 if list is empty then, this tail points to new Node
    if (this.isEmpty()) {
      this.tail = newNode;
    }

  }

  appendToEnd (value) {
    const newNode = new Node(value);

    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    ++this.size
  }

  //Metodo para buscar si esta en la lista
  exists (value) {
    
      let current = this.head;
      while (current.value != value) {
       current = current.next;
      }
      return current;

    return false;
  }



  toString() {
    if (this.isEmpty()) return 'this list is empty';

    let str= '';
    let currentNode = this.head;
    while (currentNode !== null) { 
      str +=  `${currentNode.value} `;
      currentNode = currentNode.next;
    }
    return str;
  }
}

const myLinkedList = new LinkedList();
// const linkedString = myLinkedList.toString();

// console.log(linkedString)
console.log(myLinkedList.isEmpty()) // true

 myLinkedList.appendToStart(3);
 myLinkedList.appendToStart(17);


console.log(myLinkedList.isEmpty()) // false

myLinkedList.appendToEnd(7);
myLinkedList.appendToEnd(1);
myLinkedList.appendToEnd(23);
myLinkedList.appendToEnd(12);
myLinkedList.appendToEnd(17);

console.log(myLinkedList.exists(17)); // true

console.log(myLinkedList.toString());

/*

console.log(myLinkedList.exists(13)); // true
console.log(myLinkedList.exists(23)); // true
console.log(myLinkedList.exists(2)); // false
console.log(myLinkedList.exists(12)); // true
*/
