import { assertEquals } from "https://deno.land/std@0.208.0/assert/mod.ts";
import { createLinkedList } from "./main.js";

// General Tests
Deno.test(function linkedListTest() {
  const linkedList = createLinkedList();

  linkedList.append("first"); // Append to empty list
  assertEquals(linkedList.head().getValue(), "first"); // Get value of head node
  assertEquals(linkedList.size(), 1); // Size of list

  linkedList.append("second"); // Append to filled list
  assertEquals(linkedList.tail().getValue(), "second"); // Get value of tail node
  assertEquals(linkedList.size(), 2); // Size of  list

  linkedList.prepend("zeroth"); // Prepend to filled list
  assertEquals(linkedList.head().getValue(), "zeroth");
  assertEquals(linkedList.size(), 3);
  assertEquals(linkedList.at(1).getValue(), "first"); // Get value of ith node
  assertEquals(linkedList.at(2).getValue(), "second");
  assertEquals(linkedList.pop(), "second"); // Remove tail node and return its value
  assertEquals(linkedList.tail().getValue(), "first");
  assertEquals(linkedList.size(), 2);
  assertEquals(linkedList.contains("zeroth"), true); // Checks if value is in list
  assertEquals(linkedList.contains("first"), true);
  assertEquals(linkedList.contains("second"), false);
  assertEquals(linkedList.find("zeroth"), 0); // Find index of value in list otherwise return null
  assertEquals(linkedList.find("first"), 1);
  assertEquals(linkedList.find("second"), null);
  assertEquals(linkedList.toString(), "( zeroth ) -> ( first ) -> null"); // Print list as string
});

// Tests for empty list
Deno.test(function emptyLinkedListTest() {
  const linkedList = createLinkedList();
  assertEquals(linkedList.size(), 0);
  assertEquals(linkedList.head(), null);
  assertEquals(linkedList.tail(), null);
  assertEquals(linkedList.at(0), null);
  assertEquals(linkedList.contains(0), false);
  assertEquals(linkedList.find(0), null);
  assertEquals(linkedList.toString(), "null");
  assertEquals(linkedList.pop(), null);
});

// Tests for list with single node
Deno.test(function singleLinkedListTest() {
  const linkedList = createLinkedList();
  linkedList.append(1);
  assertEquals(linkedList.size(), 1);
  assertEquals(linkedList.head().getValue(), 1);
  assertEquals(linkedList.tail().getValue(), 1);
  assertEquals(linkedList.at(0).getValue(), 1);
  assertEquals(linkedList.at(1), null);
  assertEquals(linkedList.at(-1), null);
  assertEquals(linkedList.contains(1), true);
  assertEquals(linkedList.contains("1"), false);
  assertEquals(linkedList.find(1), 0);
  assertEquals(linkedList.find("1"), null);
  assertEquals(linkedList.toString(), "( 1 ) -> null");
  assertEquals(linkedList.pop(), 1);
  assertEquals(linkedList.size(), 0);
});

//Tests for insertAt
Deno.test(function insertAtLinkedListTest() {
  const linkedList = createLinkedList();
  const values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  for (const value in values) {
    linkedList.append(value);
  }
  assertEquals(
    linkedList.toString(),
    "( 0 ) -> ( 1 ) -> ( 2 ) -> ( 3 ) -> ( 4 ) -> ( 5 ) -> ( 6 ) -> ( 7 ) -> ( 8 ) -> ( 9 ) -> null"
  );

  linkedList.insertAt(99, -1); // Does nothing with negative indices
  assertEquals(
    linkedList.toString(),
    "( 0 ) -> ( 1 ) -> ( 2 ) -> ( 3 ) -> ( 4 ) -> ( 5 ) -> ( 6 ) -> ( 7 ) -> ( 8 ) -> ( 9 ) -> null"
  );
  linkedList.insertAt(99, linkedList.size() + 1); // Does nothing when index exceeds size
  assertEquals(
    linkedList.toString(),
    "( 0 ) -> ( 1 ) -> ( 2 ) -> ( 3 ) -> ( 4 ) -> ( 5 ) -> ( 6 ) -> ( 7 ) -> ( 8 ) -> ( 9 ) -> null"
  );
  linkedList.insertAt(99, 5); // Insert at index 5
  assertEquals(
    linkedList.toString(),
    "( 0 ) -> ( 1 ) -> ( 2 ) -> ( 3 ) -> ( 4 ) -> ( 99 ) -> ( 5 ) -> ( 6 ) -> ( 7 ) -> ( 8 ) -> ( 9 ) -> null"
  );
  linkedList.insertAt(88, 0); //Insert at head
  assertEquals(
    linkedList.toString(),
    "( 88 ) -> ( 0 ) -> ( 1 ) -> ( 2 ) -> ( 3 ) -> ( 4 ) -> ( 99 ) -> ( 5 ) -> ( 6 ) -> ( 7 ) -> ( 8 ) -> ( 9 ) -> null"
  );
  linkedList.insertAt(77, linkedList.size()); // Insert at tail
  assertEquals(
    linkedList.toString(),
    "( 88 ) -> ( 0 ) -> ( 1 ) -> ( 2 ) -> ( 3 ) -> ( 4 ) -> ( 99 ) -> ( 5 ) -> ( 6 ) -> ( 7 ) -> ( 8 ) -> ( 9 ) -> ( 77 ) -> null"
  );
});

// Tests for removeAt
Deno.test(function removeAtLinkedListTest() {
  const linkedList = createLinkedList();
  const values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  for (const value in values) {
    linkedList.append(value);
  }
  assertEquals(
    linkedList.toString(),
    "( 0 ) -> ( 1 ) -> ( 2 ) -> ( 3 ) -> ( 4 ) -> ( 5 ) -> ( 6 ) -> ( 7 ) -> ( 8 ) -> ( 9 ) -> null"
  );

  linkedList.removeAt(-1); // Does nothing with negative indices
  assertEquals(
    linkedList.toString(),
    "( 0 ) -> ( 1 ) -> ( 2 ) -> ( 3 ) -> ( 4 ) -> ( 5 ) -> ( 6 ) -> ( 7 ) -> ( 8 ) -> ( 9 ) -> null"
  );
  linkedList.removeAt(3); // Remove index 3
  assertEquals(
    linkedList.toString(),
    "( 0 ) -> ( 1 ) -> ( 2 ) -> ( 4 ) -> ( 5 ) -> ( 6 ) -> ( 7 ) -> ( 8 ) -> ( 9 ) -> null"
  );
  linkedList.removeAt(0); // Remove head node
  assertEquals(
    linkedList.toString(),
    "( 1 ) -> ( 2 ) -> ( 4 ) -> ( 5 ) -> ( 6 ) -> ( 7 ) -> ( 8 ) -> ( 9 ) -> null"
  );
  linkedList.removeAt(linkedList.size() - 1); // Remove tail node
  assertEquals(
    linkedList.toString(),
    "( 1 ) -> ( 2 ) -> ( 4 ) -> ( 5 ) -> ( 6 ) -> ( 7 ) -> ( 8 ) -> null"
  );
  linkedList.removeAt(linkedList.size()); // Does nothing when index exceeds size
  assertEquals(
    linkedList.toString(),
    "( 1 ) -> ( 2 ) -> ( 4 ) -> ( 5 ) -> ( 6 ) -> ( 7 ) -> ( 8 ) -> null"
  );
});
