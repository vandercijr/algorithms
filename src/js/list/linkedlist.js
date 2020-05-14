'use strict';

/**
 * Arquivo: linkedlist.js
 * Author: Vanderci Curvelo Junior
 * Description: implementation of some linkedlist algorithms'
 * Data: 11/05/2020
 *
 */

const Node = {
  id     :  0,
  object :  {},
  next   :  {}
};

let head_node;

const addToTop = (object)  =>  {
  let next;

  if (typeof head_node !== 'undefined') {
      next = head_node;
  }

  head_node = Object.create(Node);
  head_node.id     = count()-1;
  head_node.object = object;
  head_node.next   = next;
};

const push = (object)  =>  {
  let current_node = head_node;
  let next;

  if (typeof head_node === 'undefined') {
      addToTop(object);
      return true;
  }

  while (typeof current_node.next !== 'undefined') current_node = current_node.next;

  current_node.next = Object.create(Node);

  current_node.next.id     = count()-1;
  current_node.next.object = object;
  current_node.next.next   = next;
};

  const remove = (id)  =>  {
  let current_node = head_node;
  let next;

  if (typeof head_node === 'undefined') {
      addToTop(object);
      return true;
  }

  while (typeof current_node.next !== 'undefined') current_node = current_node.next;
};

const find = (id)  =>  {
  let current_node = head_node;

  while (typeof current_node !== 'undefined') {
    if (current_node.id === id) {
      return current_node;
    }
    current_node = current_node.next;
  }

  return Object.create(Node);
};

const count = ()  =>  {
  let current_node = head_node;
  let count = 0;

  while (typeof current_node !== 'undefined') {
    count++;
    current_node = current_node.next;
  }

  return count;
};

const list  = ()  =>  {

}

const linkedList = {
  addToTop : addToTop,
  push     : push,
  count    : count,
  find     : find
}

const s1 = {
  name : 'vanderci',
  age  : 38
};

const s2 = {
  name : 'sarah',
  age  : 34
};

const s3 = {
  name : 'clara',
  age  : 11
};

// linkedList.addToTop(s1);
//
// linkedList.addToTop(s2);

linkedList.push(s1);

linkedList.push(s2);

linkedList.push(s3);

console.log(head_node);
console.log(linkedList.count());

console.log(linkedList.find(4));
