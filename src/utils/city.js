import { cities } from "../cities/cities";
import _ from 'lodash';

export const getRandomCity = (playedIds) => {
  const unplayedCities = cities.filter(({ id }) => playedIds.indexOf(id) == -1);
  return _.sample(unplayedCities);
}
