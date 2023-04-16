const { NotImplementedError } = require("../extensions/index.js");

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  let head = l;
  let curr = head;
  let prev = null;
  let length = 0;

  while (curr.next) {
    curr = curr.next;
    length++;
  }

  curr = head;
  console.log(curr.value);

  for (let i = 0; i < length; i++) {
    if (curr.value === k) {
      if (prev === null) {
        l = curr.next;
      } else if (!curr.next) {
        prev.next === null;
      } else {
        prev.next = curr.next;
      }
    }

    prev = curr;
    curr = curr.next;
  }

  return l;
}

console.log(
  removeKFromList(
    {
      next: {
        next: {
          next: {
            next: [null],
            value: 3,
          },
          value: 3,
        },
        value: 2,
      },
      value: 1,
    },
    3
  )
);

module.exports = {
  removeKFromList,
};
