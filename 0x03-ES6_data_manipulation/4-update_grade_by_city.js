export default function updateStudentGradeByCity(students, city, newGrades) {
  return students.filter((student) => student.location === city).map((student) => {
    const studentGrade = newGrades.filter((grade) => grade.studentId === student.id);
    if (studentGrade.length === 0) {
      return {
        ...student,
        grade: 'N/A',
      };
    } return {
      ...student,
      grade: studentGrade[0].grade,
    };
  });
}
