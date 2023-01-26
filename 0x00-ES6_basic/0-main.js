import { taskFirst, taskNext } from './0-constants.js';
import taskBlock from './1-block-scoped.js';
import getNeighborhoodsList from './2-arrow.js';
import getSumOfHoods from './3-default-parameter.js';
import returnHowManyArguments from './4-rest-parameter.js';

console.log(`${taskFirst()} ${taskNext()}`);
console.log(taskBlock(true));
console.log(taskBlock(false));
const neighborhoodsList = new getNeighborhoodsList();
const res = neighborhoodsList.addNeighborhood('Noe Valley');
console.log(res);
console.log(getSumOfHoods(34));
console.log(getSumOfHoods(34, 3));
console.log(getSumOfHoods(34, 3, 4));
console.log(returnHowManyArguments('one', 1));
