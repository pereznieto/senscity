import { millisecondsPerTurn } from "../components/Timer/Timer";

const maxScorePerRound = 100;
const halfEarthCircumference = 40075 / 2;

const accuracyWeighting = 0.8;
const timeWeighting = 0.2;

const normalizeScore = score =>
  Math.pow(score * Math.pow(maxScorePerRound, 1 / Math.E), Math.E);

export const calculatePrevScore = (distance, timeLeft) => {
  const rawDistanceScore =
    (halfEarthCircumference - distance) / halfEarthCircumference;
  const distanceScore = normalizeScore(rawDistanceScore);
  const rawTimeScore = timeLeft / millisecondsPerTurn;
  const timeScore = normalizeScore(rawTimeScore);
  return Math.round(
    distanceScore * accuracyWeighting + timeScore * timeWeighting
  );
};
