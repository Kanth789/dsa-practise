class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

function reverseLinkedList(head) {
    
    // Initialize pointer 'temp' at
    // head of the linked list
    let temp = head;  
    
    // Initialize a pointer 'prev' to null
    // representing the previous node
    // (initially none)
    let prev = null;  

    // Traversing the list, continue until
    // 'temp' reaches the end (null)
    while (temp !== null) {  
        // Store the next node in
        // 'front' to preserve the reference
        let front = temp.next;  
        
        // Reverse direction of current node's
        // 'next' pointer to point to 'prev'
        temp.next = prev;  
        
        // Move 'prev' to the current node,
        // preparing it for the next iteration
        prev = temp;
        
        // Move 'temp' to the 'front' node
        // (the next node), advancing traversal
        temp = front;  
    }

    // Return the new head of
    // the reversed linked list
    return prev;  
}

// Function to get the Kth node from
// a given position in the linked list
function getKthNode(temp, k) {
    // Decrement K as we already
    // start from the 1st node
    k -= 1;

    // Decrement K until it reaches
    // the desired position
    while (temp !== null && k > 0) {
        // Decrement k as temp progresses
        k--;

        // Move to the next node
        temp = temp.next;
    }

    // Return the Kth node
    return temp;
}



function kReverse(head, k) {
    let temp = head;

    let prevLast = null;

    while (temp !== null) {
        let kThNode = getKthNode(temp, k);

        // If the Kth node is NULL
        // (not a complete group)
        if (kThNode === null) {
            // If there was a previous group,
            // link the last node to the current node
            if (prevLast) {
                prevLast.next = temp;
            }

            // Exit the loop
            break;
        }

        // Store the next node
        // after the Kth node
        let nextNode = kThNode.next;

        // Disconnect the Kth node
        // to prepare for reversal
        kThNode.next = null;

        // Reverse the nodes from
        // temp to the Kth node
        reverseLinkedList(temp);

        // Adjust the head if the reversal
        // starts from the head
        if (temp === head) {
            head = kThNode;
        } else {
            // Link the last node of the previous
            // group to the reversed group
            prevLast.next = kThNode;
        }

        // Update the pointer to the
        // last node of the previous group
        prevLast = temp;

        // Move to the next group
        temp = nextNode;
    }

    // Return the head of the
    // modified linked list
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

let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

// Print the original linked list
console.log("Original Linked List: ");
printLinkedList(head);


head = kReverse(head, 2);

// Print the reversed linked list
console.log("Reversed Linked List: ");
printLinkedList(head);