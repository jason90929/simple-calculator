import subtract from '../subtract';

describe('subtract', function () {
  test('整數相減', function () {
    expect(subtract(3, 2)).toBe(1);
  });

  test('浮點數相減', function () {
    expect(subtract(1.0, 0.9)).toBe(0.1);
    expect(subtract(1.0, 0.9)).not.toBe(0.09999999999999998);
  });
});
