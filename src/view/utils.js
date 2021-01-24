import Abstract from "./abstract";
import {getRandomInteger} from "./common";

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

export const filmToFilterMap = {
  all: (filmCard) => filmCard.length,
  watchlist: (filmCard) => filmCard
    .filter((el) => el.watchList).length,
  history: (filmCard) => filmCard
    .filter((el) => el.watched).length,
  favorites: (filmCard) => filmCard
    .filter((el) => el.favorite).length,
};

export const resultHoursMins = (mins) => {
  let hours = Math.trunc(mins / 60);
  let minutes = mins % 60;
  return [hours, minutes];
};

export const generateArray = (array) => {
  const randomArray = [];
  const randomNumber = getRandomInteger(1, array.length);
  for (let j = 0; j < randomNumber; j++) {
    const randomItem = getRandomInteger(0, randomNumber - 1);
    randomArray.push(array[randomItem]);
  }

  const unique = [...new Set(randomArray)];
  return unique;
};

export const remove = (element) => {
  if (element === null) {
    return;
  }

  if (!(element instanceof Abstract)) {
    throw new Error(`Can remove view components only`);
  }
  element.getElement().remove();
  element.removeElement();
};
