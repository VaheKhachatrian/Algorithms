class Queue {
    constructor() {
        this.queue = []
    }
    push(arg) {
        this.queue.length++;
        // [this.queue[0], this.queue[this.queue.length - 1]] = [this.queue[this.queue.length - 1], this.queue[0]]
        for(let i = this.queue.length - 1; i > 0; i--) {
            [this.queue[i], this.queue[i - 1]] = [this.queue[i - 1], this.queue[i]]
        }
        this.queue[0] = arg;
    }
    pop() {
        this.queue.length--;
    }
}
let q = new Queue()
q.push(1)
q.push(2)
q.push(3)
q.push(4)
q.pop()
console.log(q);