import Axios from 'axios';

export async function saveScoreToDatabase(score) {
  return await Axios.post(
    'https://iye014hoi0.execute-api.eu-west-2.amazonaws.com/default/saveScore',
    score
  );
}

export async function getScoresFromDatabase() {
  const response = await Axios.get(
    'https://bq9o0r65lj.execute-api.eu-west-2.amazonaws.com/default/getScores'
  );
  return response.data.Items;
}
