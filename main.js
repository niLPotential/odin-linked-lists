export function createLinkedList() {
  let headNode = null;

  function append(value) {
    const newNode = createNode();
    newNode.setValue(value);
    if (headNode === null) {
      headNode = newNode;
    } else {
      this.tail().nextNode = newNode;
    }
  }

  function size() {
    if (headNode === null) {
      return 0;
    }
    let result = 1;
    let node = headNode;
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
    if (headNode === null) {
      return null;
    }
    let node = headNode;
    while (node.nextNode !== null) {
      node = node.nextNode;
    }
    return node;
  }

  return { append, size, head, tail };
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