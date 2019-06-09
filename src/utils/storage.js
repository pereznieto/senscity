export const saveScoreLocally = (score) => {
  const currentScores = localStorage.getItem('scores');
  const newScores = currentScores ? [...JSON.parse(currentScores), score] : [score];
  localStorage.setItem('scores', JSON.stringify(newScores));
}
