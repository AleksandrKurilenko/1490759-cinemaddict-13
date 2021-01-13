import {
  createElement
} from "./utils";

const createTotalFilmsTemplate = () => {
  return `<p>130 291 movies inside</p>`;
};

export default class TotalFilmsTemplate {
  constructor() {
    this._element = null;
  }

  getSort() {
    return createTotalFilmsTemplate();
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getSort());
    }
    return this._element;
  }

  removeElement() {
    this._element = null
  }
};
