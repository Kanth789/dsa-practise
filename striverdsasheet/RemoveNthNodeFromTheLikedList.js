class Node {
  constructor(data, next = null) {
    (this.data = data), (this.next = next);
  }
}

function findAndRemove(head, target) {
  let fastp = head;
  let slowp = head;
  for (let i = 0; i < target; i++) {
    fastp = fastp.next;

    if (fastp === null) {
      return head.next;
    }
    while (fastp.next !== null) {
      fastp = fastp.next;
      slowp = slowp.next;
    }

    let delNode = slowp.next;
    slowp.next = slowp.next.next;
    delNode = null;
    return head;
  }
}

const printLinkedList = (head) => {
  let temp = head;
  while (temp !== null) {
    process.stdout.write(temp.data + " ");
    temp = temp.next;
  }
  console.log();
};

const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);

process.stdout.write("Original Linked List: ");
printLinkedList(head);

let target = 6;

findAndRemove(head, target);


process.stdout.write("deleted Linked List: ");
printLinkedList(head);
