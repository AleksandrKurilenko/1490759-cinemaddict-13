import {createElement} from '../utils.js';

export default class Abstract {
  constructor() {
    if (new.target === Abstract) {
      throw new Error(`Can't create Abstract class`);
    }
    this._callback = {};
    this._element = null;
  }

  getTemplate() {
    throw new Error(`Can't run abstract method`);
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }
    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
