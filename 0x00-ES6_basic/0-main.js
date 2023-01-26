import { taskFirst, taskNext } from './0-constants.js';
import taskBlock from './1-block-scoped.js';
import getNeighborhoodsList from './2-arrow.js';
import getSumOfHoods from './3-default-parameter.js';
import returnHowManyArguments from './4-rest-parameter.js';
import concatArrays from './5-spread-operator.js';
import getSanFranciscoDescription from './6-string-interpolation.js';
import getBudgetObject from './7-getBudgetObject.js';
import getBudgetForCurrentYear from './8-getBudgetCurrentYear.js';
import getFullBudgetObject from './9-getFullBudget.js';

console.log(`${taskFirst()} ${taskNext()}`);
console.log(taskBlock(true));
console.log(taskBlock(false));
const neighborhoodsList = new getNeighborhoodsList();
const res = neighborhoodsList.addNeighborhood('Noe Valley');
console.log(res);
console.log(getSumOfHoods(34));
console.log(getSumOfHoods(34, 3));
console.log(getSumOfHoods(34, 3, 4));
console.log(returnHowManyArguments('one', 1, 7.8));
console.log(concatArrays(['a', 'b'], ['c', 'd'], 'Hello'));
console.log(getSanFranciscoDescription());
console.log(getBudgetObject(400, 700, 900));
console.log(getBudgetForCurrentYear(2100, 5200, 1090));
const fullBudget = getFullBudgetObject(20, 50, 10);

console.log(fullBudget.getIncomeInDollars(fullBudget.income));
console.log(fullBudget.getIncomeInEuros(fullBudget.income));
