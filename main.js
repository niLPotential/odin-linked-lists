export function createLinkedList() {
  let headNode = null;

  function append(value) {
    const newNode = createNode();
    newNode.setValue(value);
    if (this.head() === null) {
      headNode = newNode;
    } else {
      this.tail().setNextNode(newNode);
    }
  }

  function prepend(value) {
    const newNode = createNode();
    newNode.setValue(value);
    if (this.head() === null) {
      headNode = newNode;
    } else {
      newNode.setNextNode(this.head());
      headNode = newNode;
    }
  }

  function size() {
    if (this.head() === null) {
      return 0;
    }
    let result = 1;
    let node = this.head();
    while (node.getNextNode() !== null) {
      node = node.getNextNode();
      result++;
    }
    return result;
  }

  function head() {
    return headNode;
  }

  function tail() {
    if (this.head() === null) {
      return null;
    }
    let node = this.head();
    while (node.getNextNode() !== null) {
      node = node.getNextNode();
    }
    return node;
  }

  function at(index) {
    let i = 0;
    let node = this.head();
    while (i < index && node.getNextNode() !== null) {
      node = node.getNextNode();
      i++;
    }
    return node;
  }

  function pop() {
    let previousNode = null;
    let node = this.head();
    while (node.getNextNode() !== null) {
      previousNode = node;
      node = node.getNextNode();
    }
    previousNode.setNextNode(null);
    return node;
  }

  function contains(value) {
    let node = this.head();
    if (node.getValue() === value) {
      return true;
    }

    while (node.getNextNode() !== null) {
      node = node.getNextNode();
      if (node.getValue() === value) {
        return true;
      }
    }
    return false;
  }

  return { append, prepend, size, head, tail, at, pop, contains };
}

function createNode() {
  let value = null;
  let nextNode = null;

  function getValue() {
    return value;
  }

  function setValue(newValue) {
    value = newValue;
  }

  function getNextNode() {
    return nextNode;
  }

  function setNextNode(newNextNode) {
    nextNode = newNextNode;
  }

  return { getValue, setValue, getNextNode, setNextNode };
}
