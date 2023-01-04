import Currency from './3-currency.js';

export default class Pricing {
  /**
   * Creates a new @see {@link Currency}.
   *
   * @param {Number} amount - The amount of the currency
   * @param {Object} currency - The currency object
   */

  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  get getAmount() {
    return this._amount;
  }

  set setAmount(newAmount) {
    if (typeof newAmount !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    this._amount = newAmount;
  }

  get getCurrency() {
    return this._currency;
  }

  set setCurrency(newCurrency) {
    if (typeof newCurrency !== 'object') {
      throw new TypeError('Currency must be an object');
    }
    this._currency = newCurrency;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency._name} (${this._currency._code})`;
  }

  static convertPrice(amount, conversionRate) {
    /**
     * Creates a new @see {@link convertPrice}.
     *
     * @param {Number} amount - The amount of the currency
     * @param {Number} conversionRate - The conversion rate to use
     */
    return amount * conversionRate;
  }
}
