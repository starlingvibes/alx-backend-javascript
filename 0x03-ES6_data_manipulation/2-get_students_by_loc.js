/**
 * Retrieves ids from a list of students.
 * @param {{
 *   id: Number,
 *   firstName: String,
 *   location: String
 * }[]} students - The list of students.
 * @param {city: String}
 * @returns {{id: Number, firstName: String, location: String}[]}
 */
export default function getStudentsByLocation(students, city) {
  return students.filter((student) => student.location == city);
}
