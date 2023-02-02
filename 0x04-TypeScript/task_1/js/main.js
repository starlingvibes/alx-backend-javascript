'use strict';
exports.__esModule = true;
exports.printTeacher = void 0;
function printTeacher(firstName, lastName) {
  return ''.concat(firstName.charAt(0), '. ').concat(lastName);
}
exports.printTeacher = printTeacher;
console.log(printTeacher('Chidera', 'Anichebe'));
