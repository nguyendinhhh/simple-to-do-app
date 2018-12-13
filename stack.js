class Stack {
  constructor() {
    this.stack = new LinkedList();
    this.numberOfEntries = 0;
  }

  push(newEntry) {
    this.stack.add(newEntry);
    this.numberOfEntries++;
  }

  peek() {
    return this.stack.getFirst();
  }

  pop() {
    if (this.numberOfEntries === 0)
      return null;
    this.numberOfEntries--;
    return this.stack.remove();
  }

  display() {
    this.stack.display();
  }

  getNumberOfEntries() {
    return this.numberOfEntries;
  }

  toArray() {
    return this.stack.toArray();
  }

  clear() {
    this.stack.clear();
    this.numberOfEntries = 0;
  }
}
