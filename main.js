export function createLinkedList() {
  let headNode = null;
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
