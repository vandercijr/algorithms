'use strict'

const bubbleSort = (array_input) => {
    const asize = array_input.length;

    if (asize > 2) {
      let found = false;
      for (var i = 0; i < asize; i++) {
        if (array_input[i] > array_input[i+1]) {
          found = true;
          let auxiliar_data = array_input[i];

          array_input[i] = array_input[i+1];
          array_input[i+1] = auxiliar_data;
        }
      }

      if (!found) {
        return true;
      }

      bubbleSort(array_input);
    }
}

module.exports = {
  bubbleSort : bubbleSort
}
