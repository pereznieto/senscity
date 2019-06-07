import {calculatePrevScore} from "./score";

describe('calculatePrevScore', () => {
  it('should correctly calculate minimum score', () => {
    const score = calculatePrevScore(20032, 1);
    expect(score).toEqual(0)
  });

  it('should correctly calculate maximum score', () => {
    const score = calculatePrevScore(0, 5000);
    expect(score).toEqual(100)
  });

  it('should return correct score according to accuracy and time weightings', () => {
    const score = calculatePrevScore(0, 1);
    expect(score).toEqual(80)
  })
});