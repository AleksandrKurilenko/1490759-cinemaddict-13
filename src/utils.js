import Abstract from './view/abstract';
import {Category, RenderPosition} from './data';
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
  const hours = duration / 60;
  const minutes = duration % 60;
  return (hours < 1) ? `${minutes}m` : `${Math.floor(hours)}h ${minutes}m`;
};

export const isOnline = () => {
  return window.navigator.onLine;
};

export const getFormattedTime = (date) => {

  const difference = (+new Date() - +new Date(date)) / 60000;

  const hoursDiff = difference / 60;

  const daysDiff = hoursDiff / 24;

  const monthDiff = daysDiff / 30;

  if (difference < 1) {
    return `now`;

  } else if (difference >= 1 && difference < 5) {
    return `a few minutes ago`;

  } else if (difference >= 5 && difference < 60) {
    return `${Math.floor(difference)} minutes ago`;

  } else if (difference > 60 && difference < 61) {
    return `1 hour ago`;

  } else if (difference >= 61 && hoursDiff < 24) {
    return `${Math.floor(hoursDiff)} hours ago`;

  } else if (hoursDiff > 24 && hoursDiff < 48) {
    return `1 day ago`;

  } else if (hoursDiff >= 48 && daysDiff < 30) {
    return `${Math.floor(daysDiff)} days ago`;

  } else if (daysDiff >= 30 && daysDiff < 60) {
    return `1 month ago`;

  } else if (daysDiff >= 60 && monthDiff < 12) {
    return `${Math.floor(monthDiff)} month ago`;

  } else if (monthDiff >= 12 && monthDiff < 24) {
    return `1 year ago`;

  } else if (monthDiff > 24) {
    return `${Math.floor(monthDiff / 12)} years ago`;

  } else {
    return dayjs(date).format(`YYYY/MM/DD HH:mm`);
  }
};
