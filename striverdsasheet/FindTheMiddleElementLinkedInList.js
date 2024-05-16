class Node {
    constructor(data,next = null)
    {
        this.data = data
        this.next = next
    }
}

function findMiddle(head) {
   
    let slow = head;   
    let fast = head;   

    
    while (fast && fast.next && slow) {
        
        fast = fast.next.next; 
        
        slow = slow.next;       
    }

    return slow;  
}


const printLinkedList = (head) =>{
    let temp = head
    while(temp !== null)
    {
        process.stdout.write(temp.data + ' ');
        temp = temp.next
    }
    console.log();
}

const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);

process.stdout.write('Original Linked List: ');
printLinkedList(head);
const middleNode = findMiddle(head);

console.log("The middle node value is: " + middleNode.data);