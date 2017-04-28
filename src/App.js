import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';

import reducers from './reducers';
import Router from './Router';

class App extends Component {

  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyBZRRkRFMhVuDzn_NLl-n3jCuDxthyVTxY',
      authDomain: 'manager-60f59.firebaseapp.com',
      databaseURL: 'https://manager-60f59.firebaseio.com',
      storageBucket: 'manager-60f59.appspot.com',
      messagingSenderId: '247148480344'
    };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
