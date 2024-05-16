
// Node class represents a
// node in a linked list
class Node {
    constructor(data, next) {
        // Data stored in the node
        this.data = data; 
        
        // Pointer to the next node in the list
        this.next = next;  
    }
}

// Function to detect a loop in a linked list
// using the Tortoise and Hare Algorithm
function detectCycle(head) {
    // Initialize two pointers, slow and fast,
    // to the head of the linked list
    let slow = head;
    let fast = head;
    let result;

    // Step 2: Traverse the linked list
    // with the slow and fast pointers
    while (fast !== null && fast.next !== null) {
        // Move slow one step
        slow = slow.next;
        // Move fast two steps
        fast = fast.next.next;

        // Check if slow and fast pointers meet
        if (slow === fast) {
            result = slow.data
            return [true,result];  // Loop detected
        }
    }

    // If fast reaches the end of the list, there is no loop
    return [false];
}


// Create a sample linked list
// with a loop for testing
const node1 = new Node(1);
const node2 = new Node(2);
node1.next = node2;
const node3 = new Node(3);
node2.next = node3;
const node4 = new Node(4);
node3.next = node4;
const node5 = new Node(5);
node4.next = node5;

// Make a loop from node5 to node2
node5.next = node2;
const head = node1;


// Check if there is a loop in the linked list
const result = detectCycle(head);
console.log("Loop detected:", result[0]);
if (result[0]) {
    console.log("Node where the loop starts:", result[1]);
} else {
    console.log("No loop detected in the linked list.");
}