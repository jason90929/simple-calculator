function displayInfinity(value, digits = 8) {
  if (Number(value) > Number(`${'9'.repeat(digits)}`)) {
    return 'Infinity';
  }
  if (Number(value) < Number(`-${'9'.repeat(digits)}`)) {
    return '-Infinity';
  }

  return value;
}

export default displayInfinity;
