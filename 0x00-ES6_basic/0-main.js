import { taskFirst, taskNext } from './0-constants.js';
import taskBlock from './1-block-scoped.js';
import getNeighborhoodsList from './2-arrow.js';

console.log(`${taskFirst()} ${taskNext()}`);
console.log(taskBlock(true));
console.log(taskBlock(false));
const neighborhoodsList = new getNeighborhoodsList();
const res = neighborhoodsList.addNeighborhood('Noe Valley');
console.log(res);
