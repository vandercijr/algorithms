'use strict';

// recursive form
// first implementation
// const bubbleSort = (array_input) => {
//   const asize = array_input.length;

//   if (asize > 2) {
//     let found = false;
//     for (var i = 0; i < asize; i++) {
//       if (array_input[i] > array_input[i+1]) {
//         found = true;
//         let auxiliar_data = array_input[i];

//         array_input[i] = array_input[i+1];
//         array_input[i+1] = auxiliar_data;
//       }
//     }

//     if (!found) {
//       return true;
//     }

//     bubbleSort(array_input);
//   }
// };

//  the iterative way
const bubbleSort = (array_input, order) => {
  const asize = array_input.length;
  const swap = (swap_array, idxa, idxb) =>  {
    let auxiliar = swap_array[idxa];

    swap_array[idxa] = swap_array[idxb];
    swap_array[idxb] = auxiliar;
  }

  if (asize > 2) {
    let found = true;

    while (found) {
      found = false;

      for (var i = 0; i < asize; i++) {
        if (array_input[i] > array_input[i+1]) {
          found = true;

          swap(array_input, i, i+1);
        }
      }
    }
  }
};

module.exports = {
  bubbleSort : bubbleSort
};
