'use strict';

/**
 * Arquivo: linkedlist.js
 * Author: Vanderci Curvelo Junior
 * Description: implementation of some linkedlist algorithms'
 * Data: 11/05/2020
 *
 */

const Node = {
  object :  {},
  next   :  {}
};

let head_node = {};

const addToTop = (object)  =>  {
  let next = {};

  if (head_node !== {}) {
      next = head_node;
  }

  head_node = Object.assign({}, Node);
  head_node.object = object;
  head_node.next   = next;
};

const remove = ()  =>  {

};

const find = ()  =>  {

};

const count = ()  =>  {

};

const list  = ()  =>  {

}

const linkedList = {
  addToTop : addToTop
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

linkedList.addToTop(s1, {});

linkedList.addToTop(s2, s1);

linkedList.addToTop(s3, s2);

console.log(head_node);
console.log(head_node.next);
