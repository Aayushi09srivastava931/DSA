function Node(val){
    this.val=val;
    this.next=null;
}

var MyLinkedList = function() {
this.head=null
this.size=0
    
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    if(index<0 || index>=this.size){
        return -1
    }
    else if(index==0){
        return this.head.val
    }
    else{
        let temp=this.head
        let count=0
        while(count<index){
            temp=temp.next
            count++
        }
        return temp.val
    }
    
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {

    let obj=new Node(val)
    obj.next=this.head
    this.head=obj
    this.size++
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    let obj=new Node(val)
    if(this.head==null){
        this.head=obj
    }
    else{
    let temp=this.head
    while(temp.next!=null){
        temp=temp.next
    }
    temp.next=obj
    }
    this.size++    
};


/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    if(index<0 || index>this.size){
        return
    }
    else if(index==0){
      this.addAtHead(val);
    }
    else if(index==this.size){
        this.addAtTail(val)
    }
    else{
    let obj=new Node(val);
    let temp=this.head
    let count=0
    while(count<index-1){
        temp=temp.next
        count++
    }
    obj.next=temp.next
    temp.next=obj
    this.size++
    }

    
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if(index<0 || index>=this.size){
        return
    }
    else if(this.head==null){
        return
    }
    else if(index==0){
        this.head=this.head.next
    }
    else{
        let count=0
        let temp = this.head
        while(count<index-1){
            temp=temp.next
            count++
        }
        temp.next=temp.next.next

    }
    this.size--
    
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */