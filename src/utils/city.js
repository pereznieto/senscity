import _ from 'lodash';
import { allCities } from '../cities/allCities';
import { popularCities } from '../cities/popularCities';
import { latitudeToY, longitudeToX } from './distance';

export const citiesPerGame = 10; // Minimum 3
export const difficulties = ['easy', 'normal', 'hard'];

const getNumberOfEasyCitiesForNormal = total => (total < 6 ? 1 : 3);

export const getCitiesToPlay = difficulty => {
  const getNewCity = (cities, difficulty) => [
    ...cities,
    { ...getCity(difficulty)(cities.map(({ id }) => id)), difficulty },
  ];
  const emptyArray = _.fill(Array(citiesPerGame), {});
  if (difficulty === difficulties[1]) {
    return emptyArray.reduce((cities, current, index) => {
      if (index < getNumberOfEasyCitiesForNormal(citiesPerGame)) {
        return getNewCity(cities, difficulties[0]);
      } else if (index < citiesPerGame - 1) {
        return getNewCity(cities, difficulties[1]);
      } else {
        return getNewCity(cities, 'harder');
      }
    }, []);
  } else {
    return emptyArray.reduce(cities => getNewCity(cities, difficulty), []);
  }
};

export const getCity = difficulty => {
  switch (difficulty) {
    case difficulties[0]:
      return getRandomPopularCity;
    case difficulties[1]:
      return getRandomCity(1000000);
    case difficulties[2]:
      return getRandomCity(100000);
    case 'harder':
      return getRandomCity(100000, 1000000);
    default:
      return () => _.sample(getCities(allCities));
  }
};

export const getRandomCity = (
  minimumPopulation,
  maximumPopulation = 100000000
) => playedIds => {
  const unplayedCities = getCities(allCities).filter(
    ({ id, population }) =>
      playedIds.indexOf(id) === -1 &&
      population > minimumPopulation &&
      population < maximumPopulation
  );
  return _.sample(unplayedCities);
};

export const getRandomPopularCity = playedIds => {
  const unplayedCities = getCities(allCities).filter(
    ({ id, name }) => playedIds.indexOf(id) === -1 && popularCities.includes(name)
  );
  return _.sample(unplayedCities);
};

export const getCities = rawCities =>
  rawCities.map(
    ({ n: name, lt: latitude, lg: longitude, c: country, p: population }, id) => ({
      name,
      latitude,
      longitude,
      country,
      population,
      id,
    })
  );

export const getDisplayName = ({ name, country }, difficulty) => {
  if (name) {
    if (difficulty === difficulties[0] || isCityNameDuplicate(name)) {
      return `${name}, ${country}`;
    }
    return name;
  }
};

export const isCityNameDuplicate = cityName =>
  getCities(allCities).reduce(
    (accumulator, current) =>
      current.name === cityName ? [...accumulator, current] : accumulator,
    []
  ).length > 1;

export const getRealCoordinates = (mapSize, currentCity) => ({
  x: longitudeToX(mapSize.width, currentCity.longitude),
  y: latitudeToY(mapSize.height, currentCity.latitude),
});
