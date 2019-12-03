import React, { useReducer, useEffect } from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navigation from './components/Navigation';
import DataDisplay from './components/DataDisplay';
import Kotisivu from './components/Kotisivu';
import Footer from './components/Footer';
import FomrsPage from './components/FormsPage';

import { AppProvider } from './utilities/AppContext';
import appReducer from './utilities/appReducer';
import restService from './utilities/rest-service';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';
import loadingReducer from './utilities/loadingReducer';

const theme = createMuiTheme({
  palette: {
    primary: grey,
    secondary: {
      main: '#212121',
    },
  },
});

const initialState = {
  answers: [],
  questions: [],
  polls: [],
  ANSWERS_SUCCESS: false,
  currentUrl: ''
};

const initLoadingState = {
  answersLoading: true,
  questionsLoading: true,
  pollsLoading: true,
  allDone: false,
}

const App = () => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  const [loadingState, loadingDispatch] = useReducer(loadingReducer, initLoadingState)

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
        loadingDispatch({ type: 'QUESTIONS_LOADING', payload: false })
        console.log('questions success')
      })
      .catch(error => {
        loadingDispatch({ type: 'QUESTIONS_LOADING', payload: true })
        console.log('error fecthing questions')
      })

    //fetching polls
    restService
      .fetchPolls()
      .then(res => {
        dispatch({ type: 'SET_POLLS', payload: res.data });
        loadingDispatch({ type: 'ANSWERS_LOADING', payload: false })
        console.log('polls success')
      })
      .catch(error => {
        console.log('error fecthing polls')
      })

  }, [])

  return (
    <ThemeProvider theme={theme}>
      <AppProvider value={{ state, dispatch, loadingState }}>
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
            <Route path="/" exact>
              <Kotisivu />
            </Route>
            <Route path="/form-example" exact>
                <FomrsPage />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </AppProvider>
    </ThemeProvider>
  );
}

export default App;
