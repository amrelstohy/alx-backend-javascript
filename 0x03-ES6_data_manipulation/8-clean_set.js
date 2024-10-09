export default function cleanSet(set, startString) {
  const str = [];
  set.forEach((element) => {
    if (element.startsWith(startString) && startString !== '') {
      str.push(element.slice(startString.length));
    }
  });
  return str.join('-');
}
