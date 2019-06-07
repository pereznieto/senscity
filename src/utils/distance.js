export const getDistanceBetweenClickAndCity = (click, mapSize, city) => {
  const { latitude, longitude } = city;
  const { width, height } = mapSize;
  const { x, y } = click;
  const mapEquator = height / 2;
  const mapGreenwich = width / 2;
  const xAdjustment = -6;
  const yAdjustment = 12;
  const xLongitude = (((x - mapGreenwich) * 180) / mapGreenwich) + xAdjustment;
  const yLatitude = (((mapEquator - y) * 90) / mapEquator) + yAdjustment;
  const distance = getDistanceBetweenTwoCoordinates(latitude, longitude, yLatitude, xLongitude);

  return parseFloat(distance.toFixed(3));
};

const getDistanceBetweenTwoCoordinates = (lat1, lon1, lat2, lon2) => {
  const p = 0.017453292519943295;
  const c = Math.cos;
  const a = 0.5 - c((lat2 - lat1) * p) / 2 + c(lat1 * p) * c(lat2 * p) * (1 - c((lon2 - lon1) * p)) / 2;

  return 12742 * Math.asin(Math.sqrt(a));
}
