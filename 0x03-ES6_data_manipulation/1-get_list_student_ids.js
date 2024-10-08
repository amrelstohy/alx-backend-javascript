export default function getListStudentIds(arr) {
  if (arr instanceof Array) {
    return arr.map((ele) => ele.id);
  }
  return [];
}
