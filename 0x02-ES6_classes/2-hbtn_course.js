export default class HolbertonCourse {
  /**
   * Creates a new @see {@link HolbertonCourse}.
   *
   * @param {String} name - The name of the course.
   * @param {Number} length - How long the course is (in months).
   * @param {String[]} students - The names of students in the course.
   */
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get getName() {
    return this._name;
  }

  set setName(newName) {
    if (typeof newName !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = newName;
  }

  get getLength() {
    return this._length;
  }

  set setLength(newLength) {
    if (typeof newLength !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = newLength;
  }

  get getStudents() {
    return this._students;
  }

  set setStudents(newStudents) {
    if (typeof newStudents !== 'object') {
      throw new TypeError('Students must be an array');
    }
    if (newStudents.every((i) => typeof i !== 'string')) {
      throw new TypeError('All elements must be strings');
    }
    this._students = newStudents;
  }
}
