// import { TextDecoder } from 'text-encoding';
import { expect, jest } from '@jest/globals';

jest.setTimeout(80000);

expect.extend({
  toBeTypeOrNull(received, classTypeOrNull) {
    try {
      expect(received).toEqual(expect.any(classTypeOrNull));
      return {
        message: () => `Ok`,
        pass: true,
      };
    } catch (error) {
      return received === null
        ? {
            message: () => `Ok`,
            pass: true,
          }
        : {
            message: () =>
              `expected ${received} to be ${classTypeOrNull} type or null`,
            pass: false,
          };
    }
  },
});

require('jest-extended');
export {};
