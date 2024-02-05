class Stack{
    constructor(){
        this.list = []
    }

    push(element){
        this.list.push(element)
    }
    pop()
    {
        return  this.list.pop()
    }
    peek(){
        return this.list[this.list.length - 1]
    }
    isEmpty(){
        return this.list.length === 0
    }

    size(){
        return this.list.length
    }

    print(){
        console.log(this.list)
    }
}

const stack = new Stack()

console.log(stack.isEmpty())

stack.push(20)
stack.push(30)
stack.push(10)
stack.size()
stack.print()
console.log("This is Peek element",stack.peek())
console.log(stack.pop())
console.log("This is Peek element",stack.peek())