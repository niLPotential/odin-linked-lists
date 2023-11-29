export function createLinkedList() {
  let headNode = null;

  function append(value) {
    const newNode = createNode();
    newNode.setValue(value);
    if (headNode === null) {
      headNode = newNode;
    } else {
      this.tail().setNextNode(newNode);
    }
  }

  function prepend(value) {
    const newNode = createNode();
    newNode.setValue(value);
    if (headNode === null) {
      headNode = newNode;
    } else {
      newNode.setNextNode(this.head());
      headNode = newNode;
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
    while (node.getNextNode() !== null) {
      node = node.getNextNode();
    }
    return node;
  }

  return { append, prepend, size, head, tail };
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
