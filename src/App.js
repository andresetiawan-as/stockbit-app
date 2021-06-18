import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store, history } from './redux/store';
import { ConnectedRouter } from 'connected-react-router';
import './App.css';
import Home from './component/Home'
import MovieList from './component/MovieList'

const App = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Router>
          <div className="content">
            <div className="container">
              <div>
                <h1>Movie List</h1>
              </div>
              <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/movie-details/:id' component={MovieList} />
              </Switch>
            </div>
          </div>
        </Router>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;