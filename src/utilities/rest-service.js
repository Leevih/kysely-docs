import axios from 'axios';

const fetchAnswers = () => {
    return axios.get('https://kyselyhomma3.herokuapp.com/vastaukset');
}

const fetchQuestions = () => {
    return axios.get('https://kyselyhomma3.herokuapp.com/kysymykset');
}

const fetchPolls = () => {
    return axios.get('https://kyselyhomma3.herokuapp.com/kyselyt');
}

const postQuestion = (item) => {
    return axios.post('https://kyselyhomma3.herokuapp.com/kysymykset');
}

const postItem = (item) => {
    return axios.post()
}

export default { 
    fetchAnswers,
    fetchQuestions,
    fetchPolls,
    postItem,
    postQuestion
}