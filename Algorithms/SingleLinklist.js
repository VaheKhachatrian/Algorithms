// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }

// class Headle {
//     constructor(value) {
//         this.next = new Node(value);
//     }
    
//     getElem(index) {
//         if(index < 0) {
//             throw new Error("index can`t be negativ")
//         }
//         index++;
//         let current = this;
//         while(index && current !== null) {
//             current = current.next;
//             index--;
//         }
    
//         if(index || current === null) {
//             throw new Error("index very big");
//         }
    
//         return current.value;
//     }

//     push_back(value) {
//         let node = new Node(value);
//         let current = this;
//         while(current.next !== null) {
//             current = current.next;
//         }
//         current.next = node;
//     }

//     push_front(value) {
//         let node = new Node(value);
//         let current = this;
//         node.next = current.next;
//         current.next = node;
//     }   

//     pop_back() {
//         if(current.next === null) throw new Error('can`t delete list')
//         let current = this;
//         while(current.next.next !== null) {
//             current = current.next;
//         }
//         current.next = null;
//     }

//     pop_front() {
//         if(this.next === null) throw new Error('can`t delete list');
//         let tmp = this.next.next;
//         this.next.next = null;
//         this.next = tmp;
//     }

//     serch(value) {
//         let current = this;
//         while(current !== null && current.value !== value) {
//             current = current.next;
//         }
//         if(current === null) {
//             return false;
//         }
//         return true
//     }

//     insert(index, value) {
//         if(index === 0) {
//             return this.push_front(value);
//         }
//         let current = this;
//         while(index && current.next !== null) {
//             current = current.next;
//             index--;
//         }
//         if(index || current === null) {
//             throw new Error('index very big');
//         }
//         let node = new Node(value);
//         node.next = current.next;
//         current.next = node;
//     }

//     insert_list(index, added) {
//         if(index < 0) {
//             throw new Error('index can`t be negative')
//         }
//         let current = this;
//         while(index && current.next !== null) {
//             current = current.next;
//             index--;
//         }
//         if(index || current === null) {
//             throw new Error('index very big');
//         }
//         // let tmp = current.next;
//         // while(added.next !== null) {
//         //     current.next = added.next;
//         //     added = added.next;
//         //     current = current.next;
//         // }
//         // current.next = tmp;

//         let curr2 = added;
//         while(curr2.next !== null) {
//             curr2 = curr2.next;
//         }

//         curr2.next = current.next;
//         current.next = added.next;
//         added.next = null;
//     }

//     delete(index) {
//         if(index < 0) {
//             throw new Error('index can`t be negativ');
//         }
//         if(index == 0) {
//             return this.pop_front();
//         }
//         let current = this;
//         while(index && current.next !== null) {
//             current = current.next;
//             index--;
//         }
//         if(index || current === null) {
//             throw new Error('index very big')
//         }
//         let tmp = current.next.next;
//         current.next.next = null;
//         current.next = tmp;
//     }

// }

// let list = new Headle(1);
// list.push_back(6);
// list.push_back(7);
// let list1 = new Headle(2);
// list1.push_back(3);
// list1.push_back(4);
// list.insert_list(2,list1)
// for(let i = 0; i < 6; ++i) {
//     console.log(list.getElem(i));
// }


let time = 3000;
let i = 0;
let arr = [1,2,3,4,5]

for(let i = 0; i < arr.length; ++i) {
    setTimeout(function() {
        console.log(arr[i]);
    }, i * time)
}