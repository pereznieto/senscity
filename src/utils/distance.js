export const getDistanceBetweenClickAndCity = ({ x, y }, { width, height }, { latitude, longitude }) =>
  getDistanceBetweenTwoCoordinates(latitude, longitude, yToLatitude(height, y), xToLongitude(width, x));

const xToLongitude = (width, x) => {
  const mapGreenwich = width / 2;
  return ((x - mapGreenwich) * 180) / mapGreenwich
};

const yToLatitude = (height, y) => {
  const mapEquator = height * (9 / 15);
  return ((mapEquator - y) * 90) / mapEquator
};

export const longitudeToX = (width, longitude) => {
  const mapGreenwich = width / 2;
  return parseInt(((longitude * mapGreenwich) / 180) + mapGreenwich)
};

export const latitudeToY = (height, latitude) => {
  const mapEquator = height * (9 / 15);
  return parseInt(mapEquator - ((latitude * mapEquator) / 90));
};

const getDistanceBetweenTwoCoordinates = (lat1, lon1, lat2, lon2) => {
  const earthDiameter = 12742;
  const rad = 0.017453292519943295;
  const cos = Math.cos;

  return earthDiameter * Math.asin(Math.sqrt(0.5 - cos((lat2 - lat1) * rad) / 2 + cos(lat1 * rad) * cos(lat2 * rad) * (1 - cos((lon2 - lon1) * rad)) / 2));
}
