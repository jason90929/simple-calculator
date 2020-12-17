import filterDigits from '../filterDigits';

describe('filterDigits', function () {
  test('只留八位數', function () {
    expect(filterDigits('1234', 8)).toBe('1234');
    expect(filterDigits('12345678', 8)).toBe('12345678');
    expect(filterDigits('1234567890123456789', 8)).toBe('12345678');
  });

  test('只留八位數且小數另計', function () {
    expect(filterDigits('123.456', 8)).toBe('123.456');
    expect(filterDigits('123.45678', 8)).toBe('123.45678');
    expect(filterDigits('123.4567890123456789', 8)).toBe('123.45678');
    expect(filterDigits('123.4567890123456789', 8)).not.toBe( '12345678');
  });

  test('第八位剛好有小數就小數移除', function () {
    expect(filterDigits('12345678', 8)).toBe('12345678');
    expect(filterDigits('12345678.', 8)).toBe('12345678');
    expect(filterDigits('12345678.90123456789', 8)).toBe('12345678');
    expect(filterDigits('12345678.90123456789', 8)).not.toBe( '12345678.');
  });

  test('負號不算在八位數內', function () {
    expect(filterDigits('-1234', 8)).toBe('-1234');
    expect(filterDigits('-12345678', 8)).toBe('-12345678');
    expect(filterDigits('-1234567890123456789', 8)).toBe('-12345678');
  });

  test('負號，小數點，八位數', function () {
    expect(filterDigits('-123.456', 8)).toBe('-123.456');
    expect(filterDigits('-123.4567890123456789', 8)).toBe('-123.45678');
  });

  test('負號，第八位數後有小數點', function () {
    expect(filterDigits('-12345678', 8)).toBe('-12345678');
    expect(filterDigits('-12345678.', 8)).toBe('-12345678');
    expect(filterDigits('-12345678.90123456789', 8)).toBe('-12345678');
    expect(filterDigits('-12345678.90123456789', 8)).not.toBe('-12345678.');
  });

  test('小數點在總數未滿8時不會消除', function () {
    expect(filterDigits('1.', 8)).toBe('1.');
    expect(filterDigits('12.', 8)).toBe('12.');
    expect(filterDigits('123.', 8)).toBe('123.');
    expect(filterDigits('1234.', 8)).toBe('1234.');
    expect(filterDigits('12345.', 8)).toBe('12345.');
    expect(filterDigits('123456.', 8)).toBe('123456.');
    expect(filterDigits('1234567.', 8)).toBe('1234567.');
    expect(filterDigits('-1.', 8)).toBe('-1.');
    expect(filterDigits('-12.', 8)).toBe('-12.');
    expect(filterDigits('-123.', 8)).toBe('-123.');
    expect(filterDigits('-1234.', 8)).toBe('-1234.');
    expect(filterDigits('-12345.', 8)).toBe('-12345.');
    expect(filterDigits('-123456.', 8)).toBe('-123456.');
    expect(filterDigits('-1234567.', 8)).toBe('-1234567.');
  });

  test('很多小數點', function () {
    expect(filterDigits('0.1', 8)).toBe('0.1');
    expect(filterDigits('0.01', 8)).toBe('0.01');
    expect(filterDigits('0.001', 8)).toBe('0.001');
    expect(filterDigits('0.0001', 8)).toBe('0.0001');
    expect(filterDigits('0.00001', 8)).toBe('0.00001');
    expect(filterDigits('0.000001', 8)).toBe('0.000001');
    expect(filterDigits('0.0000001', 8)).toBe('0.0000001');
    expect(filterDigits('0.00000001', 8)).toBe('0.0000000');
  });
});
