import filterDigits from '../filterDigits';

xdescribe('filterDigits', function () {
  test('只留八位數', function () {
    expect(filterDigits('1234567890123456789', 8)).toBe('12345678');
  });

  test('只留八位數且小數另計', function () {
    expect(filterDigits('123.4567890123456789', 8)).toBe('123.45678');
    expect(filterDigits('123.4567890123456789', 8)).not.toBe( '12345678');
  });

  test('第八位剛好有小數就小數移除', function () {
    expect(filterDigits('12345678.90123456789', 8)).toBe('12345678');
    expect(filterDigits('12345678.90123456789', 8)).not.toBe( '12345678.');
  });

  test('負號不算在八位數內', function () {
    expect(filterDigits('-1234567890123456789', 8)).toBe('-12345678');
  });

  test('負號，小數點，八位數', function () {
    expect(filterDigits('-123.4567890123456789', 8)).toBe('-123.45678');
  });

  test('負號，第八位數後有小數點', function () {
    expect(filterDigits('-12345678.90123456789', 8)).toBe('-12345678');
  });
});
