import Abstract from "./abstract";

export const SortType = {
  DEFAULT: `default`,
  DATE: `date`,
  RAITING: `raiting`,
  COMMENTS: `comments`
};

const createSiteSort = (sortType) => {
  const getActiveHtmlClass = (elementSortType) => {
    return (elementSortType === sortType) ? ` sort__button--active` : ``;
  };
  return `<ul class="sort">
  <li><a href="#" class="sort__button${getActiveHtmlClass(SortType.DEFAULT)}" data-sort-type="${SortType.DEFAULT}">Sort by default</a></li>
  <li><a href="#" class="sort__button${getActiveHtmlClass(SortType.DATE)}" data-sort-type="${SortType.DATE}">Sort by date</a></li>
  <li><a href="#" class="sort__button${getActiveHtmlClass(SortType.RAITING)}" data-sort-type="${SortType.RAITING}">Sort by rating</a></li>
</ul>`;
};

export default class SiteSort extends Abstract {
  constructor(sortType) {
    super();
    this.sortType = sortType;
    this._onSortTypeChange = this._onSortTypeChange.bind(this);
  }
  getTemplate() {
    return createSiteSort(this.sortType);
  }

  _onSortTypeChange(evt) {
    if (evt.target.tagName !== `A`) {
      return;
    }

    evt.preventDefault();
    this._callback.sortTypeChange(evt.target.dataset.sortType);
  }

  setSortTypeChangeHandler(cb) {
    this._callback.sortTypeChange = cb;
    this.getElement().addEventListener(`click`, this._onSortTypeChange);
  }
}
