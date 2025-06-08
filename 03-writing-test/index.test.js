import { test, describe } from 'node:test'; // Impor 'describe' juga
import assert from 'node:assert/strict';
import { sum } from './index.js';

// Gunakan 'describe' untuk mengelompokkan tes, bukan 'test'
describe('sum function test suite', () => {
  // Test case 1: Menjumlahkan dua bilangan positif
  test('should return the correct sum of two positive numbers', () => {
    const expected = 8;
    const result = sum(3, 5);
    assert.strictEqual(result, expected);
  });

  // Test case 2: Menjumlahkan bilangan positif dan negatif
  test('should return the correct sum of a positive and a negative number', () => {
    const expected = 5;
    const result = sum(10, -5);
    assert.strictEqual(result, expected);
  });

  // Test case 3: Menjumlahkan dua bilangan negatif
  test('should return the correct sum of two negative numbers', () => {
    const expected = -15;
    const result = sum(-7, -8);
    assert.strictEqual(result, expected);
  });

  // Test case 4: Menjumlahkan dengan nol
  test('should return the number itself when adding with zero', () => {
    const expected = 9;
    const result = sum(9, 0);
    assert.strictEqual(result, expected);
  });
});