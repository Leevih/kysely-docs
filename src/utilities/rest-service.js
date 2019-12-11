import axios from 'axios';

const fetchAnswers = () => {
    return axios.get('https://kyselyhomma2.herokuapp.com/vastaukset');
}

const fetchQuestions = () => {
    return axios.get('https://kyselyhomma2.herokuapp.com/kysymykset');
}

const fetchPolls = () => {
    return axios.get('https://kyselyhomma2.herokuapp.com/kyselyt');
}

const postItem = (item) => {
    return axios.post()
}

export default { 
    fetchAnswers,
    fetchQuestions,
    fetchPolls
 }