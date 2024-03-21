class Stack {
    constructor() {
        this.stack = [];
    }
    push(arg) {
        this.stack.length++;
        this.stack[this.stack.length - 1] = arg;
    }
    pop() {
        this.stack.length--;
    }
}
let s = new Stack()
s.push(4)
s.push(5)
s.push(6)
s.push(7)
s.pop()
s.pop()
s.pop()
s.pop()
console.log(s);