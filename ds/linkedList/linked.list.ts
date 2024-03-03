// Construction of Singly linked list & Doubly linked list.
// Convert array to a linked list
// Add a node at the end & beginning
// Delete node with the value specified
// Insert a node after & before a node with x data
// Print all elements by order & reverse by order
// Write a program to remove duplicates in a sorted singly linked list
class ListNode {
    public value: number;
    public next: ListNode | null;
    constructor(value: number, next: ListNode | null = null) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    public head: ListNode | null;
    public size: number;
    constructor() {
        this.head = null;
        this.size = 0;
    }

    public addNodeToHead(value: number) {
        const newNode = new ListNode(value);
        if (!this.head) {
            this.head = newNode
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.size++;
    }

    public addNodeToEnd(value: number) {
        const newNode = new ListNode(value);
        if (!this.head) {
            this.head = newNode
        } else {
            let current: ListNode = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;
        return;
    }

    public convertArrayToLL(array: number[]) {
        if (!array.length) return;

        // first we are taking the tail node to add the nodes to end
        let current: ListNode | null = this.head;
        while (current?.next) {
            current = current.next
        }

        // then we are adding array elements to the end;
        let i: number = 0;
        while (i < array.length) {
            const newNode = new ListNode(array[i]);
            if (current) {
                current.next = newNode
            } else {
                this.head = newNode;
                current = this.head;
            }
            this.size++;
        }
    }

    // its for deleting the only first node which we are finding with the value specified
    public deleteNodeWithSpecifiedValue(value: number) {
        if (!this.head) return;

        let prev: ListNode | null;
        let current: ListNode | null = this.head;
        while (current) {
            if (current?.value === value) {
                if (prev!) {
                    prev.next = current.next;
                } else {
                    this.head = current?.next;
                }
                break;
            }
            prev = current
            current = current.next;
        }
    }

    public reverseList() {
        let prev: ListNode | null = null;
        let current: ListNode | null = this.head;
        let next: ListNode | null = null;

        while (current !== null) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }

        this.head = prev;
        return;
    }

    public getListInConsole() {
        if (!this.head) {
            console.log(`sorry there is no values added into list`);
            return;
        }
        let current: ListNode | null = this.head;
        while (current !== null) {
            console.log(current.value);
            current = current.next;
        }
        return;
    }
}

const obj = new LinkedList()
obj.addNodeToEnd(10)
obj.addNodeToEnd(20)
obj.addNodeToEnd(30)
obj.addNodeToEnd(40)
obj.addNodeToEnd(50)
console.log('------------------------------------------');
obj.getListInConsole()
console.log('------------------------------------------');
obj.reverseList()
obj.getListInConsole()
console.log('------------------------------------------');
obj.deleteNodeWithSpecifiedValue(20)
obj.getListInConsole()
