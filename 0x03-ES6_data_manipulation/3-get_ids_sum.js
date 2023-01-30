/**
 * Retrieves ids from a list of students.
 * @param {{
 *   id: Number,
 *   firstName: String,
 *   location: String
 * }[]} students - The list of students.
 * @returns {Number}
 */

export default function getStudentIdsSum(students) {
  return students.reduce(
    (accumulator, students) => accumulator + students.id,
    0
  );
}
