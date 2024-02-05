class Queue{
    constructor(){
        this.item = {}
        this.rear = 0
        this.front = 0
    }

    enqueue(element){
        this.item[this.rear] = element
        this.rear++
    }

    dequeue(){
        const  item = this.item[this.front]
        delete this.item[this.front]
        this.front++
        return item
    }

    isEmpty(){
        return this.rear - this.front === 0
    }

    peek(){
        return this.item[this.front]
    }

    size(){
        return this.rear - this.front
    }

    print(){
        console.log(this.item)
    }

}

const newQueue = new Queue()
console.log(newQueue.isEmpty())
newQueue.enqueue(10)
newQueue.enqueue(20)
newQueue.enqueue(30)
console.log(newQueue.size())
console.log(newQueue.dequeue())
newQueue.print()
newQueue.enqueue(40)
newQueue.enqueue(50)
newQueue.enqueue(60)
newQueue.print()
newQueue.size()
console.log(newQueue.dequeue())
newQueue.print()
console.log(newQueue.peek())