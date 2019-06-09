export const saveScoreLocally = (score) => {
  const currentScores = localStorage.getItem('scores');
  const newScores = currentScores ? [...JSON.parse(currentScores), score] : [score];
  localStorage.setItem('scores', JSON.stringify(newScores));
}

export const getScores = () => JSON.parse(localStorage.getItem('scores'));
