/**
 * Updates grade by city
 * @param {{
 *   id: Number,
 *   firstName: String,
 *   location: String
 * }[]} students - The list of students.
 * @param {String} city - the city to filter by
 * @param {{
 * studentId: Number,
 * grade: Number}[]} newGrades - array of new grades
 * @returns
 */

export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const grade = newGrades.find((g) => g.studentId === student.id);
      return { ...student, grade: grade ? grade.grade : 'N/A' };
    });
}
