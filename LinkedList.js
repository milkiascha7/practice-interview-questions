// 10-->5-->16

// let myLinkedList = {
//     head:{
//         value: 10,
//         next: {
//             value: 5,
//             next: {
//                 value : 16,
//                 next: null
//             }
//         }
//     }
// }
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    //   create the new node first with the same properties
    // const newNode = {
    //   value: value,
    //   next: null,
    // };

    const newNode = new Node(value);

    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;

    return this;
  }

  prepend(value) {
    // const firstNode = {
    //   value: value,
    //   next: null,
    // };
    const newNode = new Node(value);

    // this.head.next = firstNode;

    newNode.next = this.head;
    this.head = newNode;

    this.length++;

    return this;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.prepend(14);
myLinkedList.printList();
console.log(myLinkedList.printList());
