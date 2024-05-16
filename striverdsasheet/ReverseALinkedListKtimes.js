class Node {
  constructor(data, next = null) {
    (this.data = data), (this.next = next);
  }
}

function rotateRight(head, target) {
  if (head === null || head.next === null) {
    return head;
  }
  for (let i = 0; i < target; i++) {
    let temp = head; 
    while (temp.next.next !== null) {
      temp = temp.next;
    }
    let end = temp.next;  
    temp.next = null;  
    end.next = head; 
    head = end; 
  }
  return head;
}

function printLinkedList(head) {
  let temp = head;
  while (temp !== null) {
    process.stdout.write(temp.data + " ");
    temp = temp.next;
  }
  console.log();
}

const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);


// Print the original linked list
process.stdout.write("Original Linked List: ");
const result = printLinkedList(head);

let k = 2;
const newHead = rotateRight(head, k);
process.stdout.write("Original Linked List: ");
const output = printLinkedList(newHead);
