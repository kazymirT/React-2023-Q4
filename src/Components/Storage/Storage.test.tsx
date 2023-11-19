import { describe, test, expect, afterEach } from 'vitest';
import { getLocalStorages, setLocalStorages } from './Storage';

describe('setLocalStorages function', () => {
  afterEach(() => {
    localStorage.clear();
  });

  test('sets item in localStorage', () => {
    setLocalStorages('testKey', 'testValue');
    expect(localStorage.getItem('testKey')).toBe('testValue');
  });

  test('overwrites existing item in localStorage', () => {
    localStorage.setItem('existingKey', 'existingValue');
    setLocalStorages('existingKey', 'newValue');
    expect(localStorage.getItem('existingKey')).toBe('newValue');
  });
});

describe('getLocalStorages function', () => {
  afterEach(() => {
    localStorage.clear();
  });

  test('returns item from localStorage', () => {
    localStorage.setItem('testKey', 'testValue');
    expect(getLocalStorages('testKey')).toBe('testValue');
  });

  test('returns default value if item not found', () => {
    expect(getLocalStorages('nonexistentKey')).toBe(' ');
  });
});
