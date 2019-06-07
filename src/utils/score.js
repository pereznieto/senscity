const maxScorePerRound = 100;
const halfEarthCircumference = 40075 / 2;

export const calculatePrevScore = distance => {
  const rawScore = (halfEarthCircumference - distance) / halfEarthCircumference;
  return Math.pow(rawScore * Math.pow(maxScorePerRound, (1 / Math.E)), Math.E);
};