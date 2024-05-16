class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

function findIntersection(firstHead, secondHead) {
    let lengthA = getLength(firstHead);
    let lengthB = getLength(secondHead);
    
    let diff = Math.abs(lengthA - lengthB);

    let longer = lengthA > lengthB ? firstHead : secondHead;
    let shorter = lengthA > lengthB ? secondHead : firstHead;
    while (diff > 0) {
        longer = longer.next;
        diff--;
    }
    
    while (longer !== null && shorter !== null) {
        if (longer.data === shorter.data) { // Compare data values
            return longer;
        }
        longer = longer.next;
        shorter = shorter.next;
    }
    
    return null; // No intersection found
}


function getLength(head) {
    let length = 0;
    let current = head;
    while (current !== null) {
        length++;
        current = current.next;
    }
    return length;
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
head.next = new Node(3);
head.next.next = new Node(1);
head.next.next.next = new Node(2);
head.next.next.next.next = new Node(4);

const main = new Node(3);
main.next = new Node(2);
main.next.next = new Node(4);

process.stdout.write("First Array Linked List: ");
printLinkedList(head);
process.stdout.write("Second Array Linked List: ");
printLinkedList(main);

const result = findIntersection(head, main);
console.log(result.data);
