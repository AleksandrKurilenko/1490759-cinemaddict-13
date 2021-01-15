import {createElement} from "./utils";

const createMoreButton = () => {
  return `<button class="films-list__show-more">Show more</button>`;
};

export default class MoreButtonTemplate {
  constructor() {
    this._element = null;
  }

  getMoreButton() {
    return createMoreButton();
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getMoreButton());
    }
    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
