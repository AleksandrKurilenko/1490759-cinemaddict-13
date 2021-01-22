import Abstract from "./abstract";

export const RenderPosition = {
  AFTERBEGIN: `afterbegin`,
  BEFOREEND: `beforeend`
};

export const render = (container, child, place) => {
  if (container instanceof Abstract) {
    container = container.getElement();
  }

  if (child instanceof Abstract) {
    child = child.getElement();
  }

  switch (place) {
    case RenderPosition.AFTERBEGIN:
      container.prepend(child);
      break;
    case RenderPosition.BEFOREEND:
      container.append(child);
      break;
  }
};

export const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;

  return newElement.firstChild;
};

export const firstLetterCaps = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const generateFilter = (filmCard) => {
  return Object.entries(filmToFilterMap).map(([filterName, countFilms]) => {
    return {
      name: filterName,
      count: countFilms(filmCard),
    };
  });
};

const filmToFilterMap = {
  all: (filmCard) => filmCard.length,
  watchlist: (filmCard) => filmCard
    .filter((el) => el.watchList).length,
  history: (filmCard) => filmCard
    .filter((el) => el.watched).length,
  favorites: (filmCard) => filmCard
    .filter((el) => el.favorite).length,
};
