export const getDistanceBetweenClickAndCity = (click, mapSize, city) => {
  const { latitude, longitude } = city;
  const { width, height } = mapSize;
  const { x, y } = click;
  const mapEquator = height / 2;
  const mapGreenwich = width / 2;
  const xAdjustment = -6;
  const yAdjustment = 12;
  const xLongitude = parseFloat(((((x - mapGreenwich) * 180) / mapGreenwich) + xAdjustment).toFixed(3));
  const yLatitude = parseFloat(((((mapEquator - y) * 90) / mapEquator) + yAdjustment).toFixed(3));
  const distance = getDistanceBetweenTwoCoordinates(latitude, longitude, yLatitude, xLongitude);

  console.clear();
  console.log('width: ', width);
  console.log('height: ', height);
  console.log('mapEquator: ', mapEquator);
  console.log('mapGreenwich: ', mapGreenwich);
  console.log('x: ', x);
  console.log('y: ', y);

  return distance;
};

const getDistanceBetweenTwoCoordinates = (lat1, lon1, lat2, lon2) => {
  console.log({ lat1, lon1, lat2, lon2 });
  const p = 0.017453292519943295;
  const c = Math.cos;
  const a = 0.5 - c((lat2 - lat1) * p) / 2 + c(lat1 * p) * c(lat2 * p) * (1 - c((lon2 - lon1) * p)) / 2;

  return 12742 * Math.asin(Math.sqrt(a));
}
