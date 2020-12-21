const detailsSort = [
  {
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


const sortDetailsMenu = ({textA, classSortA}) => {
  return `<li><a href="#" class="sort__button ${classSortA}">${textA}</a></li>`;
};

export const createSortTemplate = () => {
  return `<ul class="sort">
 ${detailsSort.map(sortDetailsMenu).join(``)}
    </ul>`;
};
