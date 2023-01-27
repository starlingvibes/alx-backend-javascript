export default class Currency {
  /**
   * Creates a new @see {@link Currency}.
   *
   * @param {String} code - The code of the currency
   * @param {String} name - The name of the currency
   */

  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  get getCode() {
    return this._code;
  }

  set setCode(newCode) {
    if (typeof newCode !== 'string') {
      throw new TypeError('Code must be a string');
    }
    this._code = newCode;
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

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
