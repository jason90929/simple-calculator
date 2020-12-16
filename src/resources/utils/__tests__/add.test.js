import add from '../add';

describe('add', function () {
  test('整數相加', function () {
    expect(add(1, 2)).toBe(3);
  });

  test('浮點數相加', function () {
    expect(add(0.1, 0.2)).toBe(0.3);
    expect(add(0.1, 0.2)).not.toBe( 0.30000000000000004);
  });
});
