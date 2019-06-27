import _ from 'lodash';
import { allCities } from '../cities/allCities';
import { popularCities } from '../cities/popularCities';
import { latitudeToY, longitudeToX } from './distance';

export const citiesPerGame = 10;
export const difficulties = ['easy', 'normal', 'hard'];

export const getCity = mode => {
  if (mode === difficulties[0]) {
    return getRandomPopularCity;
  } else if (mode === difficulties[1]) {
    return getRandomCity(1000000);
  } else if (mode === difficulties[2]) {
    return getRandomCity(100000);
  }
  return () => getCities(allCities)[123];
};

export const getRandomCity = maximumPopulation => playedIds => {
  const unplayedCities = getCities(allCities).filter(
    ({ id, population }) => playedIds.indexOf(id) === -1 && population > maximumPopulation
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

export const getDisplayName = ({ name, country }, mode) => {
  if (name) {
    if (mode === difficulties[0] || isCityNameDuplicate(name)) {
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
