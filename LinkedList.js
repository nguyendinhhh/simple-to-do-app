class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
    
    // getData(){
    //     return this.data;
    // }
}

class LinkedList{
    constructor(){
        this.firstNode = null;
        // this.firstNode = new Node(null); will create another Node whose data is null
        this.numberOfEntries = 0;
    }

    add(newEntry){
        const newNode = new Node(newEntry);
        newNode.next = this.firstNode;

        this.firstNode = newNode;
        this.numberOfEntries++;
        return true;
    }

    display(){
        let tempNode = this.firstNode;
        while (tempNode !== null){
            console.log(tempNode.data);
            tempNode = tempNode.next;
        }
    }

}


module.exports = LinkedList;