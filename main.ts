export function add(a: number, b: number): number {
  return a + b;
}

// Learn more at https://deno.land/manual/examples/module_metadata#concepts
if (import.meta.main) {
  console.log("Add 2 + 3 =", add(2, 3));
}

function createNode<T>() {
  let value = null as T;
  let nextNode = null as T;

  function getValue() {
    return value;
  }

  function setValue(newValue: T) {
    value = newValue;
  }

  function getNextNode() {
    return nextNode;
  }

  function setNextNode(newNextNode: T) {
    nextNode = newNextNode;
  }

  return { getValue, setValue, getNextNode, setNextNode };
}
