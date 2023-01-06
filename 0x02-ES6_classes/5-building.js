/**
 * Abstract Class Building
 *
 * @class Building
 */

class Building {
  /**
   * Creates a new @see {@link Building}.
   *
   * @param {Number} sqft - The size of the building in square feets
   */
  constructor(sqft) {
    this._sqft = sqft;
  }

  get getSqft() {
    return this._sqft;
  }

  set setSqft(newSqft) {
    if (typeof newSqft !== 'number') {
      throw new TypeError('Sqft must be a number');
    }
    this._sqft = newSqft;
  }

  evacuationWarningMessage() {
    throw new Error(
      'Class extending Building must override evacuationWarningMessage' // eslint-disable-line comma-dangle
    );
  }
}

const b = new Building(100);
console.log(b);
