export default function cleanSet(set, startString) {
  if (!startString || typeof startString !== 'string') {
    return '';
  }
  const str = [];
  set.forEach((element) => {
    if (element.startsWith(startString) && startString !== '') {
      str.push(element.slice(startString.length));
    }
  });
  return str.join('-');
}
