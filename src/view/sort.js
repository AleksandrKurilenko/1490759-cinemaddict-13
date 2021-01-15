import {createElement} from "./utils";

const sortDetailsMenu = ({
  textA,
  classSortA
}) => {
  return `<li><a href="#" class="sort__button ${classSortA}">${textA}</a></li>`;
};

const createSortTemplate = (detailsSort) => {
  return `<ul class="sort">
 ${detailsSort.map(sortDetailsMenu).join(``)}
    </ul>`;
};

export default class SortMenu {
  constructor() {
    this._element = null;
    this._detailsSort = [{
      textA: `Sort by default`,
      classSortA: ``
    },
    {
      textA: `Sort by date`,
      classSortA: ``
    },
    {
      textA: `Sort by rating`,
      classSortA: `sort__button--active`
    }
    ];
  }

  getSort() {
    return createSortTemplate(this._detailsSort);
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getSort());
    }
    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
