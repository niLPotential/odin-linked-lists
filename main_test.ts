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
});
