import axios from 'axios';

const fetchAnswers = () => {
    return axios.get('https://kyselyhomma1.herokuapp.com/vastaukset');
}

const fetchQuestions = () => {
    return axios.get('https://kyselyhomma1.herokuapp.com/kysymykset');
}

const fetchPolls = () => {
    return axios.get('https://kyselyhomma1.herokuapp.com/kyselyt');
}

export default { 
    fetchAnswers,
    fetchQuestions,
    fetchPolls
 }