import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import sum from './index.js';

describe('sum function test suite', () => {
  // Skenario 1: Pengujian dengan input yang valid (angka positif)
  test('should return the correct sum for two positive numbers', () => {
    const expected = 10;
    const result = sum(4, 6);
    assert.strictEqual(result, expected, 'Test Case 1 Failed: Positive numbers');
  });

  // Skenario 2: Pengujian dengan salah satu angka adalah nol
  test('should return the number itself when one of the arguments is zero', () => {
    const expected = 7;
    const result = sum(7, 0);
    assert.strictEqual(result, expected, 'Test Case 2 Failed: Sum with zero');
  });

  // Skenario 3: Pengujian dengan input angka negatif
  test('should return 0 if the first argument is a negative number', () => {
    const expected = 0;
    const result = sum(-5, 10);
    assert.strictEqual(result, expected, 'Test Case 3 Failed: First argument negative');
  });

  test('should return 0 if the second argument is a negative number', () => {
    const expected = 0;
    const result = sum(5, -10);
    assert.strictEqual(result, expected, 'Test Case 4 Failed: Second argument negative');
  });

  // Skenario 4: Pengujian dengan input bukan angka (invalid type)
  test('should return 0 if the first argument is not a number', () => {
    const expected = 0;
    const result = sum('5', 10);
    assert.strictEqual(result, expected, 'Test Case 5 Failed: First argument is a string');
  });

  test('should return 0 if the second argument is not a number', () => {
    const expected = 0;
    const result = sum(5, '10');
    assert.strictEqual(result, expected, 'Test Case 6 Failed: Second argument is a string');
  });
});