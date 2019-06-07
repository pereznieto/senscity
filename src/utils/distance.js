export const getDistanceBetweenClickAndCity = (click, mapSize, city) => {
  const { latitude, longitude } = city;
  const { width, height } = mapSize;
  const { x, y } = click;
  const mapEquator = height * (9 / 15);
  const mapGreenwich = width / 2;
  const xLongitude = ((x - mapGreenwich) * 180) / mapGreenwich;
  const yLatitude = ((mapEquator - y) * 90) / mapEquator;
  const distance = getDistanceBetweenTwoCoordinates(latitude, longitude, yLatitude, xLongitude);

  return distance;
};

const getDistanceBetweenTwoCoordinates = (lat1, lon1, lat2, lon2) => {
  const earthDiameter = 12742;
  const rad = 0.017453292519943295;
  const cos = Math.cos;

  return earthDiameter * Math.asin(Math.sqrt(0.5 - cos((lat2 - lat1) * rad) / 2 + cos(lat1 * rad) * cos(lat2 * rad) * (1 - cos((lon2 - lon1) * rad)) / 2));
}
