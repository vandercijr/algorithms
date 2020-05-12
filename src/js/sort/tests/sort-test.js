/**
 * Arquivo: bubblesort-test.js
 * Author: Vanderci Curvelo Junior
 * Description: test for the file : 'bubblesort.js'
 * Data: 11/05/2020
 *
 * Documentação: http://chaijs.com/guide/styles/#assert
 *
 */

const chai = require('chai');
const bubblesort = require('../bubblesort.js');
const assert = chai.assert;

//names generated from ttps://www.name-generator.org.uk
const array_input = [
  'Paris Cutler',
  'Gideon Stibbons',
  'Cordelia Holt',
  'Randall Ridcully',
  'Nadia Drake',
  'Ruki Imperial',
  'Tamika Konstan',
  'Faust Rune',
  'Ponder Weasley',
  'Ommin Voldemort'
];

const sorted_array = [
  'Cordelia Holt',
  'Faust Rune',
  'Gideon Stibbons',
  'Nadia Drake',
  'Ommin Voldemort',
  'Paris Cutler',
  'Ponder Weasley',
  'Randall Ridcully',
  'Ruki Imperial',
  'Tamika Konstan'
];

describe('Test some sort algorithms', () => {
	it('Should sort an array using BubbleSort algo', () => {

		assert.equal(bubblesort(array_input), sorted_array);

	});
});
