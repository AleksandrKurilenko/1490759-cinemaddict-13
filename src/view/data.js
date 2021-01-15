import {getRandomInteger} from "./utils";

const getTitleData = () => {
  const titleList = [
    `The Dance of Life`,
    `Sagebrush Trail`,
    `The Man with the Golden Arm`,
    `Santa Claus Conquers the Martians`,
    `Popeye the Sailor Meets Sindbad the Sailor`
  ];
  const randomTitle = getRandomInteger(0, titleList.length - 1);

  return titleList[randomTitle];
};

const getGenreData = () => {
  const genreList = [
    `Musical`,
    `Western`,
    `Drama`,
    `Comedy`,
    `Cartoon`
  ];
  const randomGenre = getRandomInteger(0, genreList.length - 1);

  return genreList[randomGenre];
};

const getImgData = () => {
  const imgList = [
    `the-dance-of-life.jpg`,
    `sagebrush-trail.jpg`,
    `the-man-with-the-golden-arm.jpg`,
    `santa-claus-conquers-the-martians.jpg`,
    `popeye-meets-sinbad.png`
  ];
  const randomImg = getRandomInteger(0, imgList.length - 1);

  return imgList[randomImg];
};

const getDescriptionData = () => {
  const descriptionList = [
    `Burlesque comic Ralph "Skid" Johnson (Skelly), and specialty dancer Bonny Lee King (Carroll), end up together on a cold, rainy night at a tr…`,
    `Sentenced for a murder he did not commit, John Brant escapes from prison determined to find the real killer. By chance Brant's narrow escap…`,
    `Frankie Machine (Frank Sinatra) is released from the federal Narcotic Farm in Lexington, Kentucky with a set of drums and a new outlook on…`,
    `The Martians Momar ("Mom Martian") and Kimar ("King Martian") are worried that their children Girmar ("Girl Martian") and Bomar ("Boy Marti…`,
    `In this short, Sindbad the Sailor (presumably Bluto playing a "role") proclaims himself, in song, to be the greatest sailor, adventurer and…`
  ];
  const randomDescription = getRandomInteger(0, descriptionList.length - 1);

  return descriptionList[randomDescription];
};

const generateFilm = () => {
  return {
    title: getTitleData(),
    rating: getRandomInteger(0, 100) / 10,
    year: getRandomInteger(1900, 1974),
    duration: (getRandomInteger(0, 2) + `h `) + (getRandomInteger(16, 55) + `m `),
    genre: getGenreData(),
    img: getImgData(),
    description: getDescriptionData(),
    comments: getRandomInteger(0, 500) + ` comments`,
    classEmpty: ``,
    classActive: `film-card__controls-item--active`
  };
};

const getFilmsData = () => {
  const count = getRandomInteger(5, 15);
  const filmsArray = [];
  for (let i = 0; i < count; i++) {
    filmsArray.push(generateFilm());
  }
  return filmsArray;
};

export default getFilmsData;
