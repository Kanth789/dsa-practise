class Node {
  constructor(data, next = null) {
    // Data stored in the node
    this.data = data;
    // Pointer to the next node in the list
    this.next = next;
  }
}

function firstNode(head) {
  let fast = head;
  let slow = head;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      slow = head;

      while (slow !== fast) {
        slow = slow.next;
        fast = fast.next;
      }
      return slow;
    }
  }
  return null;
}

const node1 = new Node(1);
const node2 = new Node(2);
node1.next = node2;
const node3 = new Node(3);
node2.next = node3;
const node4 = new Node(4);
node3.next = node4;
const node5 = new Node(5);
node4.next = node5;

node5.next = node2;

const head = node1;

const loopStartNode = firstNode(head);

if (loopStartNode) {
  console.log(
    "Loop detected. Starting node of the loop is: " + loopStartNode.data
  );
} else {
  console.log("No loop detected in the linked list.");
}
