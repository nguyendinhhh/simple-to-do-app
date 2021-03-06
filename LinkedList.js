class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.firstNode = null;
        // this.firstNode = new Node(null); will create another Node whose data is null
    }

    remove(){
        const value = this.firstNode.data;
        this.firstNode = this.firstNode.next;
        return value;
    }

    clear(){
        // while(this.numberOfEntries > 0) // O(n)
        // {
        //     this.remove(); 
        // }

        this.firstNode = null; // O(1)
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

    getFirst() {
      return this.firstNode.data;
    }

    toArray(){
        const result = [];

        let currentNode = this.firstNode;
        while (currentNode !== null)
        {
            result.push(currentNode.data);
            currentNode=currentNode.next;
        }
        return result;
    }
}
