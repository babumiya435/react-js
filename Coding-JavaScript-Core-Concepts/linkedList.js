class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
class LinkedList {
    constructor(head=null){
        this.head = head;
        if (this.head) {
            this.size = 1;
        }else{
            this.size = 0;
        }
    }
    displayList(){
        if(this.head === null){
            console.log("List is empty")
        }else{
            let cur = this.head;
            while(cur){
                console.log(cur.data);
                cur = cur.next;
            }
        }
    }
    displayListToArray(){
        if(this.head === null){
            console.log("List is empty");
        }else{
            let cur = this.head;
            let array = [];
            while(cur){
                array.push(cur.data);
                cur = cur.next;
            }
            console.log(array);
        }
    }
    insertAtLast(newNode){
        if(this.head === null){
            this.head = newNode;
        }else{
            let cur = this.head;
            while(cur.next !== null){
                cur = cur.next;
            }
            cur.next = newNode;
        }
    }
    insertAtFirst(newNode){
        newNode.next = this.head;
        this.head = newNode;
    }
    arrayToList(a,l,flow){
        for(let i=0;i<l;i++){
            let n = new Node(a[i]);
            if(flow === "last"){
                this.insertAtLast(n);
            }else if(flow === "first"){
                this.insertAtFirst(n);
            }
        }
    }
    getFirst(){
        if(!this.head){
            console.log("List is empty")
        }else{
            console.log(this.head.data);
        }
    }
    getLast(){
        if(!this.head){
            console.log("List is empty");
        }else{
            let cur = this.head;
            while(cur.next !== null){
                cur = cur.next;
            }
            console.log(cur.data);
        }
    }
    insertAtPosition(data,pos){
        const newNode = new Node(data)
        if(!this.head){
            this.head = newNode;
        }else{
            let cur = this.head;
            let prev;
            let it = 1;
            if(pos === 1){
                newNode.next = this.head;
                this.head = newNode;
                return;
            }
            while(cur.next){
                prev = cur;
                cur = cur.next;
                it++;
                if(it === pos){
                    break;
                }
            }
            if(it === pos){
                prev.next = newNode;
                newNode.next = cur;
                return;
            }
            
        }
        this.displayListToArray();
    }
    insertAtNodePosition(data,p){
        const n = new Node(data);
        if(!this.head){
            this.head = n;
        }else{
            if(p === 1){
                n.next = this.head;
                this.head = n;
                return;
            }else{
                let cur = this.head;
                let it = 1;
                let pre;
                while(cur.next){
                    pre = cur;
                    cur = cur.next;
                    it++;
                    if(it === p){
                        break;
                    }
                }
                if(it === p){
                    pre.next = n;
                    n.next = cur;
                    return;
                }
            }
        }
        this.displayListToArray();
    }
    insertAtindex(data,index){
        const node = new Node(data);
        if(!this.head){
            this.head = node;
            return;
        }
        if(index === 0){
            this.insertAtFirst(node);
            return
        }
        if(index>0){
            let cur = this.head;
            let it = 0;
            let pre = null;
            while(cur.next){
                pre = cur;
                cur = cur.next;
                it++;
                if(it === index){
                    break;
                }
            }
            if(it === index){
                pre.next = node;
                node.next = cur;
            }
        }
    }
    deleteFirst(){
        if(!this.head){
            console.log("List is empty");
            return;
        }
        this.head = this.head.next;
        return this.head;
    }
    deleteLast(){
        let cur = this.head;
        let prev = null;
        while(cur.next !== null){
            prev = cur;
            cur = cur.next;
        }
        prev.next = null;
        return;

    }
    deleteAtPosition(pos){
        if(pos === 1){
            this.deleteFirst();
            return;
        }
        // if(pos === this.size()){
        //     this.deleteLast();
        //     return;
        // }
        if(pos > 1){
            let cur = this.head;
            let prev = null;
            let it = 1;
            while(cur.next){
                prev = cur;
                cur = cur.next;
                it++;
                if(it === pos){
                    break;
                }
            }
            if(pos === it){
                prev.next = cur.next;
                return;
            }
        }
    }
    deleteAtIndex(index){
        let cur = this.head;
        let prev = null;
        let it = 0;
        while(cur.next){
            prev = cur;
            cur = cur.next;
            it++;
            if(it === index){
                break;
            }
        }
        if(it === index){
            prev.next = cur.next;
        }
    }
    getDataByPosition(p){
        let cur = this.head;
        let prev = null;
        let it = 1;
        if(p === 1 ){console.log(this.head.data); return}
        while(cur.next){
            it++;
            cur = cur.next;
            if(it === p){
                break;
            }
        }
        if(it === p){
            console.log(cur.data);
        }
    }
    getDataByIndex(index){
        let cur = this.head;
        let it = 0;
        if(index === 0 ){console.log(this.head.data); return;}
        while(cur.next){
            it++;
            cur = cur.next;
            if(it === index){
                break;
            }
        }
        if(it === index){
            console.log(cur.data);
        }
    }
    getDataByValue(value){
        let cur = this.head;
        let it = 1;
        while(cur.next){
            if(cur.data === value){
                console.log(cur);
                break;
            }
            cur = cur.next;
        }
    }
    reverseLL(){
        let cur = this.head;
        let prev = null,next = null;
        while(cur){
            next = cur.next;
            cur.next = prev;
            prev = cur;
            cur = next;
        }
        this.head = prev;
    }
    findKthNodeFromEnd(k){
        let size = 0;
        let cur = this.head;
        while(cur){
            size++;
            cur = cur.next;
        }
        let it = 1;
        let node = this.head;
        while(node.next){
            if(it === size-k+1){
                console.log(it,size,k)
                console.log(node.data)
                return node.data;
            }
            it++;
            node = node.next;
        }
    }
    findSizeOfList(){
        let cur = this.head;
        let size = 1;
        while(cur.next){
            size++;
            cur = cur.next;
        }
        return size;
    }
    recursivKth(k,head){
        let it = 1;
        head = head ? head : this.head;
        if(it === this.findSizeOfList()-k+1){
            console.log(head.data)
            return head.data;
        }else{
            it++;
            this.recursivKth(k,head.next);
        }
    }
}
let l1 = new LinkedList();
let n1 = new Node(10000);
const n2 = new Node(5000);
// l1.insertAtLast(n1);
l1.arrayToList([100,200,300,400,500],5,"last");
console.log("++++++++++++++++++++++++++++++++++++++++");
l1.displayListToArray();
l1.getDataByIndex(2);
// l1.getDataByValue(300);
l1.reverseLL();
l1.displayListToArray();
l1.findKthNodeFromEnd(5);
l1.recursivKth(5);
// l1.displayListToArray();
function reverse(){
    if(!this.data){
        return;
    }
    // iteratinve
    let cur = this.head;
    let prev = null,next=null;
    while(cur.next){
        next = cur.next;
        cur.next = prev;
        prev = cur;
        cur = next;
    }
}




console.log("++++++++++++++++++++++++++++++++++++++++");
