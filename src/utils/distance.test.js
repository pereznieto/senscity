import { getDistanceBetweenTwoPoints } from "./distance";

describe('distance utils', () => {
  it('successfully calculates the distance between two points when one is at origin', () => {
    const pointOne = { x: 0, y: 0 };
    const pointTwo = { x: 3, y: 4 };
    expect(getDistanceBetweenTwoPoints(pointOne, pointTwo)).toEqual(5.000);
  });

  it('successfully calculates the distance between two points', () => {
    const pointOne = { x: 5, y: 7 };
    const pointTwo = { x: 3, y: 4 };
    expect(getDistanceBetweenTwoPoints(pointOne, pointTwo)).toEqual(3.606);
  });
});
