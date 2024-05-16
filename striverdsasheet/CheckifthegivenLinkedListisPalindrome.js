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

// Function to check if a linked list
// is a palindrome
function isPalindrome(head) {
    // Check if the linked list is empty
    // or has only one node
    if (head === null || head.next === null) {
        // It's a palindrome by definition
        return true;
    }

    // Initialize two pointers, slow and fast, 
    // to find the middle of the linked list
    let slow = head;
    let fast = head;

    // Traverse the linked list to find
    // the middle using slow and fast pointers
    while (fast.next !== null && fast.next.next !== null) {
        
        // Move slow pointer one step at a time
        slow = slow.next;
        // Move fast pointer two steps at a time
        fast = fast.next.next;
    }

    // Reverse the second half of the
    // linked list starting from the middle
    const newHead = reverseLinkedList(slow.next);

    // Pointer to the first half
    let first = head;

    // Pointer to the reversed second half
    let second = newHead;

    while (second !== null) {
        // Compare data values of nodes from both halves
        if (first.data !== second.data) {
            
            // Reverse the second half
            // back to its original state
            reverseLinkedList(newHead);
            // Not a palindrome
            return false;
        }
        // Move the first pointer
        first = first.next;
        // Move the second pointer
        second = second.next;
    }

    // Reverse the second half
    // back to its original state
    reverseLinkedList(newHead);

    // The linked list is a palindrome
    return true;
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
head.next.next.next = new Node(2);
head.next.next.next.next = new Node(1);

// Print the original linked list
console.log("Original Linked List: ");
printLinkedList(head);

if (isPalindrome(head)) {
    console.log("The linked list is a palindrome.");
} else {
    console.log("The linked list is not a palindrome.");
}


