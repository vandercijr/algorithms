/**
 * Arquivo: bubblesort-test.js
 * Author: Vanderci Curvelo Junior
 * Description: test for the file : 'bubblesort.js'
 * Data: 11/05/2020
 *
 * Documentação: http://chaijs.com/guide/styles/#expect
 *
 */

const chai = require('chai');
const { bubbleSort } = require('../sort.js');
const expect = chai.expect;

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
	it('Should sort an array using BubbleSort algorithm', () => {
    bubbleSort(array_input);

		expect(array_input).to.deep.equal(sorted_array);

	});
});
