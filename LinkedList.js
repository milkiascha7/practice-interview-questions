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

  // adding a node at the last
  append(value) {
    //   create the new node first with the same properties
    const newNode = new Node(value);

    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;

    return this;
  }

  // adding a node at the first
  prepend(value) {
    const newNode = new Node(value);

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

  insert(index, value) {
    console.log('this', this.length);

    // if index is larger than the entire list length add it to the end
    if (index >= this.length) {
      return this.append(value);
    }

    const newNode = {
      value: value,
      next: null,
    };

    const leader = this.traverseToIndex(index - 1);
    const holdNextPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdNextPointer;

    this.length++;
    return this.printList();
  }

  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.prepend(14);
myLinkedList.printList();
console.log(myLinkedList.printList());
myLinkedList.insert(2, 28);
myLinkedList.insert(200, 128);
myLinkedList.insert(3, 13);
myLinkedList.prepend(19);
console.log(myLinkedList.printList());
