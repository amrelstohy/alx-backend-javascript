export default function updateStudentGradeByCity(students, city, newGrades) {
  return students.filter((student) => student.location === city).map((student) => {
    const studentGrade = newGrades.filter((grade) => grade.studentId === student.id);
    const grade = studentGrade.length === 0 ? 'N/A' : studentGrade[0].grade;
    return {
      ...student,
      grade,
    };
  });
}
