function filterDigits(value = '', digits = 8) {
  if (Number(value) > Number(`${'9'.repeat(digits)}`)) {
    return 'Infinity';
  }
  if (Number(value) < Number(`-${'9'.repeat(digits)}`)) {
    return '-Infinity';
  }

  let result = '';
  const isNegative = value?.[0] === '-';
  const hasDot = value.includes('.');
  const totalLength = digits + (hasDot && 1) + (isNegative && 1);
  if (!isNegative
    && (value.length > totalLength)
    && (Number(value) < Number(`0.${'0'.repeat(digits - 1)}9`))) {
    return '0';
  }
  result = value.substring(0, totalLength);
  if (hasDot
    && result.length >= totalLength
    && result[result.length - 1] === '.') {
    result = result.substring(0, result.length - 1);
  }

  return result;
}

export default filterDigits;
