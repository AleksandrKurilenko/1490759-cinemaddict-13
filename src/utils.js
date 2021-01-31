import Abstract from './view/abstract';
import {Category, NumberValues, RenderPosition} from './data';
import dayjs from 'dayjs';

const SHOW_TIME = 4000;

export const renderToast = (message) => {
  const toast = document.createElement(`div`);
  toast.textContent = message;
  toast.classList.add(`toast`);

  document.body.append(toast);

  setTimeout(() => {
    toast.remove();
  }, SHOW_TIME);
};

export const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;
  return newElement.firstChild;
};

export const render = (container, element, place = RenderPosition.BEFOREEND) => {
  if (container instanceof Abstract) {
    container = container.getElement();
  }
  if (element instanceof Abstract) {
    element = element.getElement();
  }
  switch (place) {
    case RenderPosition.BEFOREEND:
      container.append(element);
      break;
    case RenderPosition.AFTERBEGIN:
      container.prepend(element);
      break;
  }
};

export const replace = (newElement, oldElement) => {
  if (newElement instanceof Abstract) {
    newElement = newElement.getElement();
  }
  if (oldElement instanceof Abstract) {
    oldElement = oldElement.getElement();
  }

  const parentElement = oldElement.parentElement;

  if (parentElement === null || newElement === null || oldElement === null) {
    throw new Error(`One of elements doesn't exist in case of replacement`);
  }

  parentElement.replaceChild(newElement, oldElement);
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

export const isKeyPress = (evt, cb, keyName) => {
  if (evt.key === keyName) {
    cb();
  }
};

export const filter = {
  [Category.All]: (films) => films,
  [Category.WATCHLIST]: (films) => films.filter((film) => (film.isInWatchlist)),
  [Category.HISTORY]: (films) => films.filter((film) => (film.isInHistory)),
  [Category.FAVOURITES]: (films) => films.filter((film) => (film.isFavourite))
};

export const getDuration = (duration) => {
  const hours = duration / NumberValues.SIXTY;
  const minutes = duration % NumberValues.SIXTY;
  return (hours < NumberValues.ONE) ? `${minutes}m` : `${Math.floor(hours)}h ${minutes}m`;
};

export const isOnline = () => {
  return window.navigator.onLine;
};

export const getFormattedTime = (date) => {

  const difference = (+new Date() - +new Date(date)) / NumberValues.SIXTY_THOUSAND;

  const hoursDiff = difference / NumberValues.SIXTY;

  const daysDiff = hoursDiff / NumberValues.TWENTY_FOUR;

  const monthDiff = daysDiff / NumberValues.THIRTY;

  if (difference < NumberValues.ONE) {
    return `now`;

  } else if (difference >= NumberValues.ONE && difference < NumberValues.FIVE) {
    return `a few minutes ago`;

  } else if (difference >= NumberValues.FIVE && difference < NumberValues.SIXTY) {
    return `${Math.floor(difference)} minutes ago`;

  } else if (difference > NumberValues.SIXTY && difference < NumberValues.SIXTY_ONE) {
    return `1 hour ago`;

  } else if (difference >= NumberValues.SIXTY_ONE && hoursDiff < NumberValues.TWENTY_FOUR) {
    return `${Math.floor(hoursDiff)} hours ago`;

  } else if (hoursDiff > NumberValues.TWENTY_FOUR && hoursDiff < NumberValues.THIRTEEN) {
    return `1 day ago`;

  } else if (hoursDiff >= NumberValues.THIRTEEN && daysDiff < NumberValues.THIRTY) {
    return `${Math.floor(daysDiff)} days ago`;

  } else if (daysDiff >= NumberValues.THIRTY && daysDiff < NumberValues.SIXTY) {
    return `1 month ago`;

  } else if (daysDiff >= NumberValues.SIXTY && monthDiff < NumberValues.TWELVE) {
    return `${Math.floor(monthDiff)} month ago`;

  } else if (monthDiff >= NumberValues.TWELVE && monthDiff < NumberValues.TWENTY_FOUR) {
    return `1 year ago`;

  } else if (monthDiff > NumberValues.TWENTY_FOUR) {
    return `${Math.floor(monthDiff / NumberValues.TWELVE)} years ago`;

  } else {
    return dayjs(date).format(`YYYY/MM/DD HH:mm`);
  }
};
