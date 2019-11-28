import React, { useReducer, useEffect } from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navigation from './components/Navigation';
import DataDisplay from './components/DataDisplay';
import Kotisivu from './components/Kotisivu';

import { AppProvider } from './utilities/AppContext';
import appReducer from './utilities/appReducer';
import restService from './utilities/rest-service';

const initialState = {
  answers: [],
  questions: [],
  polls: [],
  ANSWERS_SUCCESS: false,
  currentUrl: ''
};

const App = () => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  useEffect(() => {
    //fetching answers
    restService
      .fetchAnswers()
      .then(res => {
        dispatch({ type: 'SET_ANSWERS', payload: res.data });
        console.log('answers success');
      })
      .catch(error => {
        console.log('error fetching answers');
      })
      
      //fetching questions
      restService
      .fetchQuestions()
      .then(res => {
        dispatch({ type: 'SET_QUESTIONS', payload: res.data });
        console.log('questions success')
      })
      .catch(error => {
        console.log('error fecthing questions')
      })

      //fetching polls
      restService
      .fetchPolls()
      .then(res => {
        dispatch({ type: 'SET_POLLS', payload: res.data });
        console.log('polls success')
      })
      .catch(error => {
        console.log('error fecthing polls')
      })

  }, [])

  return (
    <AppProvider value={{ state, dispatch }}>
      <Router>
        <div>
          <Navigation />
        </div>
        <Switch>
          <Route path="/vastaukset">
            <DataDisplay
              props={{
                title: 'vastaukset',
                data: state.answers
              }} />
          </Route>
          <Route path="/kysymykset">
            <DataDisplay
              props={{
                title: 'kysymykset',
                data: state.questions
              }} />
          </Route>
          <Route path="/kyselyt">
            <DataDisplay
              props={{
                title: 'kyselyt',
                data: state.polls
              }} />
          </Route>
          <Route path="/">
            <Kotisivu />
          </Route>
        </Switch>
      </Router>
    </AppProvider>
  );
}

export default App;
