class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }
  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }
  print() {
    if (this.isEmpty()) {
      return null;
    } else {
      let current = this.head;
      let listValues = "";
      while (current) {
        listValues += `${current.value} `;
        current = current.next;
      }
      console.log(listValues);
    }
  }
  append(value){
    const node = new Node(value)
    if(this.isEmpty()){
        this.head = node
    }else{
        let prev = this.head
        while(prev.next){
            prev = prev.next
        }
        prev.next = node
    }
    this.size++
  }
  insert(value,index){
    if(index<0||index>this.size)
    {
        return 
    }
    if(index === 0){
        this.prepend(value)
    }else{
        const node = new Node(value)
        let prev = this.head
        for(let i =0;i<index- 1;i++){
            prev = prev.next
        }
        node.next = prev.next
        prev.next = node
    }
  }
  remove(index){
    if(index<0||index>= this.size)
    {
        return null
    }
    let removeNode
    if(index === 0){
        removeNode = this.head
        this.head  = this.head.next
    }else{
        let prev = this.head
        for(let i =0;i<index - 1;i++)
        {
            prev = prev.next
        }
        removeNode = prev.next
        prev.next = removeNode.next
    }
    this.size--
    return removeNode.value
  }
  removeValue(value){
    if(this.isEmpty())
    {
        return null
    }
    if(this.head.value === value){
        this.head = this.head.next
        this.size--
        return value
    }else{
        let prev = this.head
        while(prev.next && prev.next,value !== value)
        {
            prev = prev.next
        }
        if(prev.next){
           const  removed = prev.next
            prev.next = removed.next
            this.size--
            return value
        }
        return null
    }
  }
  search(value){
    if(this.isEmpty())
    {
        return -1
    }
    let current = this.head
    let i =0
    while(current)
    {
        if(current.value === value)
        {
            return i
        }
        current = current.next
        i++
    }
    return -1

  }
  reverse(){
    let prev = null
    let curr = this.head
    while(curr){
        let next = curr.next
        curr.next = prev
        prev = curr
        curr = next
    }
    this.head
  }
}
module.exports = LinkedList

// const linked = new LinkedList();
// console.log(linked.isEmpty());
// console.log(linked.getSize());
// linked.append(10);
// linked.append(20);
// linked.append(30);
// linked.print();
// linked.append(11)
// linked.print()
// linked.insert(40,1)
// linked.print()
// console.log(linked.remove(0))
// linked.print()
// console.log(linked.removeValue(20))
// linked.print()
// console.log(linked.search(30))