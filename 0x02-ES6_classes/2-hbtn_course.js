export default class HolbertonCourse {
  /**
   * Creates a new @see {@link HolbertonCourse}.
   *
   * @param {String} name - The name of the course.
   * @param {Number} length - How long the course is (in months).
   * @param {String[]} students - The names of students in the course.
   */
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  get getName() {
    return this.name;
  }

  set setName(newName) {
    this.name = newName;
  }

  get getLength() {
    return this.length;
  }

  set setLength(newLength) {
    this.length = newLength;
  }

  get getStudents() {
    return this.students;
  }

  set setStudents(newStudents) {
    this.students = newStudents;
  }
}
