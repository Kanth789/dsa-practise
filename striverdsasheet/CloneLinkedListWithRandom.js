class Node {
  constructor(data, next, random) {
    this.data = data,
    this.next = next, 
    this.random = random;
  }
}

function copyRandomList(head){
    let temp = head
    while(temp !== null)
        {
            const newNode = new Node(temp.data)
            newNode.next = temp.next
            temp.next = newNode
            temp =  temp.next.next 
        }
    let pointer = head
    while(pointer !== null)
        {
            if(pointer.random !== null)
                {
                    pointer.next.random = pointer.random.next
                }
            pointer = pointer.next.next
        }
    let dummyHead = new Node(0)
    pointer = head
    temp = dummyHead
    let fast = new Node()
    while(pointer !== null)
        {
            fast = pointer.next.next
            temp.next = pointer.next
            pointer.next = fast
            temp = temp.next
            pointer = fast
        }
    return dummyHead.next
}

function printList(head) {
  let temp = head;
  while (temp !== null) {
    process.stdout.write(temp.data + " ");
    temp = temp.next;
  }
  console.log();
}

let head = null;

let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);

head = node1;
head.next = node2;
head.next.next = node3;
head.next.next.next = node4;

head.random = node4;
head.next.random = node1;
head.next.next.random = null;
head.next.next.next.random = node2;

process.stdout.write("Original list");
printList(head);

process.stdout.write("Copy list:(current node:node pointed by next pointer,node");
const newHead = copyRandomList(head);
printList(newHead);
