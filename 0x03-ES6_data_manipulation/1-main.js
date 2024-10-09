import cleanSet from './8-clean_set.js';

let x;
if (x) {
  console.log(x);
}

const set = new Set(['id-test', 'id-chicken', 'id-user', , 'id-id-']);
console.log(set);
console.log(cleanSet(set, 'id-'));
