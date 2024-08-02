export default class Currency {
  // Constructor initializes code and name
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  // Getter for code
  get code() {
    return this._code;
  }

  // Setter for code
  set code(value) {
    if (typeof value !== 'string') {
    throw new TypeError('code must be a string');
    }
    this._code = value;
  }

  // Getter for name
  get name() {
    return this._name;
  }

  // Setter for name
  set name(value) {
    if (typeof !== 'string') {
    throw new TypeError('name must be  string');
    }
    this._name = value;
  }

  // Method to display currency in the format name (code)
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
