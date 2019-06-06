export const getDistanceBetweenTwoPoints = (firstPoint, secondPoint) =>
  parseFloat(Math.sqrt(Math.pow(firstPoint.x - secondPoint.x, 2) + Math.pow(firstPoint.y - secondPoint.y, 2))
    .toFixed(3));

export const getDistanceBetweenClickAndCity = (click, mapSize, city) => {
  const { latitude, longitude } = city;
  const { width, height } = mapSize;
  const { x, y } = click;
  const mapEquator = height / 2;
  const mapGreenwich = width / 2;
  const yLatitude = ((mapEquator - y) * 90) / mapEquator;
  const xLongitude = ((x - mapGreenwich) * 180) / mapGreenwich

  console.log({ latitude, longitude, width, height });
  console.log({ xLongitude, yLatitude });

  // return { x: xLongitude - 6, y: yLatitude + 12 };

  return 50;
};
