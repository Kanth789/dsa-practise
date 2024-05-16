class Node {
    constructor(data, next = null) {
      this.data = data;
      this.next = next;
    }
  }
function addToNumber(head1, head2) {
    const dummyHead = new Node();
    let temp = dummyHead,
      carry = 0;
    let sum;
    while (head1 !== null || head2 !== null || carry !== 0) {
      sum = 0;
      if (head1 !== null) {
        sum += head1.data;
        head1 = head1.next;
      }
      if (head2 !== null) {
        sum += head2.data;
        head2 = head2.next;
      }
      sum += carry;
      carry = Math.floor(sum / 10);
      const newNode = new Node(sum % 10);
      temp.next = newNode;
      temp = temp.next;
    }
    return dummyHead.next;
  }

  const printLinkedList = (head) => {
    let temp = head;
    while (temp !== null) {
      process.stdout.write(temp.data + " ");
      temp = temp.next;
    }
    console.log();
  }
  
  
  const head = new Node(9);
  head.next = new Node(9);
  head.next.next = new Node(9);
  head.next.next.next = new Node(9);
  head.next.next.next.next = new Node(9);
  head.next.next.next.next.next = new Node(9);
  head.next.next.next.next.next.next = new Node(9);

  

  

  
  const main = new Node(9);
  main.next = new Node(9);
  main.next.next = new Node(9);
  main.next.next.next = new Node(9);
  
  process.stdout.write("Original Linked List: ");
  printLinkedList(head);
  process.stdout.write("Original Linked List: ");
  printLinkedList(main);
  
  const result = addToNumber(head, main);
  process.stdout.write("Result Linked List: ");
  printLinkedList(result);
  