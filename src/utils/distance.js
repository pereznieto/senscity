export const getDistanceBetweenTwoPoints = (firstPoint, secondPoint) =>
  parseFloat(Math.sqrt(Math.pow(firstPoint.x - secondPoint.x, 2) + Math.pow(firstPoint.y - secondPoint.y, 2))
    .toFixed(3));
