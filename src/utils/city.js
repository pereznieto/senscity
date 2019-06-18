import _ from 'lodash';
import { allCities } from '../cities/allCities';
import { popularCities } from "../cities/popularCities";

export const getRandomCity = maximumPopulation => playedIds => {
  const unplayedCities = getCities(allCities)
    .filter(({ id, population }) => playedIds.indexOf(id) === -1 && population > maximumPopulation);
  return _.sample(unplayedCities);
};

export const getRandomPopularCity = playedIds => {
  const unplayedCities = getCities(allCities)
    .filter(({ id, name }) => playedIds.indexOf(id) === -1 && popularCities.includes(name));
  return _.sample(unplayedCities)
};

export const getCities = rawCities => rawCities.map(({
  n: name,
  lt: latitude,
  lg: longitude,
  c: country,
  p: population,
}, id) => ({ name, latitude, longitude, country, population, id }));

export const isCityNameDuplicate = cityName => {
  return getCities(allCities).reduce(
    (acc, cur) => {
      if(cur.name === cityName) {
        return acc.concat(cur)
      }
      return acc;
    }, []
  ).length > 1
};