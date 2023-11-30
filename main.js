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
    if (index < 0) {
      return null;
    }
    let i = 0;
    let node = this.head();
    while (i < index) {
      if (node.getNextNode() === null) {
        return null;
      } else {
        node = node.getNextNode();
        i++;
      }
    }
    return node;
  }

  function pop() {
    if (this.head() === null) {
      return null;
    }
    let node = this.head();
    if (this.head().getNextNode() === null) {
      headNode = null;
      return node;
    }
    let previousNode = null;
    while (node.getNextNode() !== null) {
      previousNode = node;
      node = node.getNextNode();
    }

    previousNode.setNextNode(null);
    return node;
  }

  function contains(value) {
    if (this.head() === null) {
      return false;
    }
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

  function find(value) {
    if (this.head() === null) {
      return null;
    }
    let node = this.head();
    if (node.getValue() === value) {
      return 0;
    }
    let index = 0;
    while (node.getNextNode() !== null) {
      index++;
      node = node.getNextNode();
      if (node.getValue() === value) {
        return index;
      }
    }
    return null;
  }

  function toString() {
    if (this.head() === null) {
      return "null";
    }
    let str = "";
    let node = this.head();
    str += `( ${node.getValue()} ) -> `;
    while (node.getNextNode() !== null) {
      node = node.getNextNode();
      str += `( ${node.getValue()} ) -> `;
    }
    str += "null";
    return str;
  }

  return {
    append,
    prepend,
    size,
    head,
    tail,
    at,
    pop,
    contains,
    find,
    toString,
  };
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
