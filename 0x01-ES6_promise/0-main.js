import getResponseFromAPI from './0-promise.js';
import getFullResponseFromAPI from './1-promise.js';

const response = getResponseFromAPI();
console.log(response instanceof Promise);
console.log(getFullResponseFromAPI(true));
console.log(getFullResponseFromAPI(false));
