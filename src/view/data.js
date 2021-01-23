import {generateComments} from "./comments";
import {getRandomInteger} from "./common";
import {generateArray, generateYear} from "./utils";

const FILM_NAMES = [
  `Made for each other`,
  `Popeye meets Sinbad`,
  `Sagebrush trail`,
  `Santa claus conquers the martians`,
  `The dance of life`,
  `The great flamarion`,
  `The man with the golden arm`,
];

const POSTERS = [
  `made-for-each-other.png`,
  `popeye-meets-sinbad.png`,
  `sagebrush-trail.jpg`,
  `santa-claus-conquers-the-martians.jpg`,
  `the-dance-of-life.jpg`,
  `the-great-flamarion.jpg`,
  `the-man-with-the-golden-arm.jpg`,
];

const GENRES = [`action`, `cartoon`, `comedy`, `horror`];
const AGE_LIMITS = [`3+`, `13+`, `16+`, `18+`];
const COUNTRYS = [`Russia`, `USA`, `Germany`, `Valhalla`];
const STARS = [`Sylvester Stallone`, `Arnold Schwarzenegger`, `Leonardo Dicaprio`, `Brad Pitt`];

// const getDescriptionData = () => {
//   const descriptionList = [
//     `Burlesque comic Ralph "Skid" Johnson (Skelly), and specialty dancer Bonny Lee King (Carroll), end up together on a cold, rainy night at a tr…`,
//     `Sentenced for a murder he did not commit, John Brant escapes from prison determined to find the real killer. By chance Brant's narrow escap…`,
//     `Frankie Machine (Frank Sinatra) is released from the federal Narcotic Farm in Lexington, Kentucky with a set of drums and a new outlook on…`,
//     `The Martians Momar ("Mom Martian") and Kimar ("King Martian") are worried that their children Girmar ("Girl Martian") and Bomar ("Boy Marti…`,
//     `In this short, Sindbad the Sailor (presumably Bluto playing a "role") proclaims himself, in song, to be the greatest sailor, adventurer and…`
//   ];
//   const randomDescription = getRandomInteger(0, descriptionList.length - 1);

//   return descriptionList[randomDescription];
// };

export const getRandomItem = (array) => {
  const randomIndex = getRandomInteger(0, array.length - 1);

  return array[randomIndex];
};

const generateDiscription = () => {
  const description = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.`;
  const descriptionArray = description.split(`. `);
  const randomNumberOfSentence = getRandomInteger(0, 4);
  const result = [];
  for (let i = 0; i <= randomNumberOfSentence; i++) {
    const randomSentence = getRandomInteger(0, descriptionArray.length - 1);
    result.push(descriptionArray[randomSentence]);
  }
  return result;
};

const generateFilm = () => {
  return {
    id: Math.random(),
    filmName: getRandomItem(FILM_NAMES),
    poster: getRandomItem(POSTERS),
    description: generateDiscription(),
    rating: getRandomInteger(0, 8),
    ageLimit: getRandomItem(AGE_LIMITS),
    year: generateYear(30, 12, 60),
    duration: getRandomInteger(0, 239),
    director: generateArray(STARS),
    writers: generateArray(STARS),
    actors: generateArray(STARS),
    country: generateArray(COUNTRYS),
    genre: generateArray(GENRES),
    watched: Boolean(getRandomInteger(0, 1)),
    watchList: Boolean(getRandomInteger(0, 1)),
    favorite: Boolean(getRandomInteger(0, 1)),
    comments: generateComments(getRandomInteger(0, 5)),
  };
};

const getFilmsData = () => {
  const count = getRandomInteger(2, 15);
  const filmsArray = [];
  for (let i = 0; i < count; i++) {
    filmsArray.push(generateFilm());
  }
  return filmsArray;
};

export default getFilmsData;

export const generateFilmCard = () => {
  return {
    id: Math.random(),
    filmName: getRandomItem(FILM_NAMES),
    poster: getRandomItem(POSTERS),
    description: generateDiscription(),
    rating: getRandomInteger(0, 8),
    ageLimit: getRandomItem(AGE_LIMITS),
    year: generateYear(30, 12, 60),
    duration: getRandomInteger(0, 239),
    director: generateArray(STARS),
    writers: generateArray(STARS),
    actors: generateArray(STARS),
    country: generateArray(COUNTRYS),
    genre: generateArray(GENRES),
    watched: Boolean(getRandomInteger(0, 1)),
    watchList: Boolean(getRandomInteger(0, 1)),
    favorite: Boolean(getRandomInteger(0, 1)),
    comments: generateComments(getRandomInteger(0, 5)),
  };
};
