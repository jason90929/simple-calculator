import calculate from '../calculate';
import OPERATION from '@/resources/constants/OPERATION';
import add from '@/resources/utils/add';
import subtract from '@/resources/utils/subtract';
import multiply from '@/resources/utils/multiply';
import divide from '@/resources/utils/divide';

jest.mock('@/resources/utils/add', function () {
  return jest.fn();
});
jest.mock('@/resources/utils/subtract', function () {
  return jest.fn();
});
jest.mock('@/resources/utils/multiply', function () {
  return jest.fn();
});
jest.mock('@/resources/utils/divide', function () {
  return jest.fn();
});

describe('calculate', function () {
  test('使用 add function', function () {
    calculate(1, 2, OPERATION.ADD);

    expect(add).toHaveBeenCalledWith(1, 2);
  });

  test('使用 subtract function', function () {
    calculate(3, 4, OPERATION.SUBTRACT);

    expect(subtract).toHaveBeenCalledWith(3, 4);
  });

  test('使用 multiply function', function () {
    calculate(5, 6, OPERATION.MULTIPLY);

    expect(multiply).toHaveBeenCalledWith(5, 6);
  });

  test('使用 divide function', function () {
    calculate(7, 8, OPERATION.DIVIDE);

    expect(divide).toHaveBeenCalledWith(7, 8);
  });
});
