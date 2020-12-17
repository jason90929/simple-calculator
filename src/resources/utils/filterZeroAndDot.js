function filterZeroAndDot(value = '') {
  if (value.includes('e+')) {
    return 'Infinity';
  }
  if (value.includes('e-')) {
    return '-Infinity';
  }
  value = value.replace(/^0+/, '');
  value = value.replace(/^\./, '0.');
  const splitValue = value.split('.');
  if (splitValue.length > 1) {
    return `${splitValue?.[0]}.${splitValue?.[1]}`;
  }
  return value || '0';
}

export default filterZeroAndDot;
