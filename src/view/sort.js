import Abstract from "./abstract";

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

export default class SortMenu extends Abstract {
  constructor() {
    super();
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

  getTemplate() {
    return createSortTemplate(this._detailsSort);
  }
}
