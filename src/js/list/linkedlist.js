'use strict';

/**
 * Arquivo: linkedlist.js
 * Author: Vanderci Curvelo Junior
 * Description: implementation of some linkedlist algorithms'
 * Data: 11/05/2020
 *
 */

const add = 

const linkedList = (array_input, order) => {
  const asize = array_input.length;

  if (asize > 2) {
    let found = true;

    while (found) {
      found = false;

      for (var i = 0; i < asize; i++) {
        let a = (order === 'desc') ? i+1 : i, 
            b = (order === 'desc') ? i   : i+1;

        let shouldSwap = array_input[a] > array_input[b];

        if (shouldSwap) {
          found = true;
          swap(array_input, a, b);
        }
      }
    }
  }
};

module.exports = {
  bubbleSort : bubbleSort
};
