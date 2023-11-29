import { assertEquals } from "https://deno.land/std@0.208.0/assert/mod.ts";
import { createLinkedList } from "./main.js";

Deno.test(function linkedListTest() {
  const linkedList = createLinkedList();

  linkedList.append("first");
  assertEquals(linkedList.head().getValue(), "first");
  assertEquals(linkedList.size(), 1);

  linkedList.append("second");
  assertEquals(linkedList.tail().getValue(), "second");
  assertEquals(linkedList.size(), 2);

  linkedList.prepend("zeroth");
  assertEquals(linkedList.head().getValue(), "zeroth");
  assertEquals(linkedList.size(), 3);
  assertEquals(linkedList.at(1).getValue(), "first");
  assertEquals(linkedList.at(2).getValue(), "second");
  assertEquals(linkedList.pop().getValue(), "second");
  assertEquals(linkedList.tail().getValue(), "first");
  assertEquals(linkedList.size(), 2);
  assertEquals(linkedList.contains("second"), false);
  assertEquals(linkedList.contains("first"), true);
  assertEquals(linkedList.contains("zeroth"), true);
  assertEquals(linkedList.find("second"), null);
  assertEquals(linkedList.find("first"), 1);
  assertEquals(linkedList.find("zeroth"), 0);
  assertEquals(linkedList.toString(), "( zeroth ) -> ( first ) -> null");
});

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
  assertEquals(linkedList.pop().getValue(), 1);
  assertEquals(linkedList.size(), 0);
});
