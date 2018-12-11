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

    remove(){
        if (this.numberOfEntries === 0)
        {
            return undefined;
        }
        const value = this.firstNode.data;
        this.firstNode = this.firstNode.next;
        this.numberOfEntries--;

        return value;
    }

    clear(){
        while(this.numberOfEntries > 0)
        {
            this.remove();
        }
    }

    // getReferenceTo(anEntry){
    //     let found = false;
    //     let currentNode = this.firstNode;

    //     while (!found && (currentNode != null)){
    //         if (anEntry === currentNode.data)
    //             found = true;
    //         else
    //             currentNode = currentNode.next;
    //     }
    //     return currentNode;
    // }


    // remove(){
    //     let result = null;
    //     if (this.firstNode!=null){
    //         result = this.firstNode.data;
    //         this.firstNode = this.firstNode.next;
    //         this.numberOfEntries--;
    //     }
    //     return result;
    // }

    // clear(){
    //     while (this.numberOfEntries > 0)
    //         remove();
    // }

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


// module.exports = LinkedList;
