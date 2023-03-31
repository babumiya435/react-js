class Node {
    constructor(data , next = null){
        this.data = data;
        this.next = next;
    }
}
class LinkedList {
    constructor(head){
        this.head = null;
        this.size = 0;
    }
    displayData(){
        let cur = this.head;
        let dataList = [];
        while(cur){
            dataList.push(cur.data);
            cur = cur.next;
        }
        console.log(dataList);
        console.log("SIZE ->",this.size);
    }
    displayDataRecursive(head,x){
        if(x){
            head = this.head;
        }
        if(head == null){
            return 
        }
        this.displayDataRecursive(head.next);
        console.log(head.data);
    }
    insertNodeAtLast(data){
        let newNode = new Node(data);
        if(!this.head){
            this.head = newNode;
            this.size++;
            return;
        }
        let cur = this.head;
        while(cur.next){
            cur = cur.next;
        }
        cur.next = newNode;
        this.size++;
        // return this.head;
    }
    arrayToList(a,l){
        for(let i = 0;i<l;i++){
            this.insertNodeAtLast(a[i]);
        }
    }
    reverseLL(){
        let cur = this.head;
        let prev,next = null;
        while(cur){
            next = cur.next;
            cur.next = prev;
            prev = cur;
            cur = next;
        }
        this.head = prev;
        return prev;
    }
    reverseLLRecursively(head,x){
        if(x){
            head = this.head;
        }
        if(head.next == null){
            return head;
        }
        let last = this.reverseLLRecursively(head.next);
        head.next.next = head;
        head.next = null;
        this.head = last;
        return last;
    }
    rev(){
        let cur = this.head;
        let prev,next = null;
        while(cur){
            next = cur.next;
            cur.next = prev;
            prev = cur;
            cur = next;
        }
        this.head = prev;
    }
    revRec(head,x){
        if(x){
            head = this.head;
        }
        if(head.next === null){
            return head;
        }
        let last = this.revRec(head.next);
        head.next.next = head;
        head.next = null;
        this.head = last;
        return last;
    }

}

let list = new LinkedList();
// list.insertNodeAtLast(100);
list.arrayToList([1,2,3,4,5],5);
// list.displayData();
// list.reverseLL();
list.displayData();
// list.displayDataRecursive("","x");
list.rev();
list.displayData();
// list.revRec("","x");
// list.displayData();


