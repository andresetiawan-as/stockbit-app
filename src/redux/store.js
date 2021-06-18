import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { createBrowserHistory } from 'history'
import { connectRouter, routerMiddleware } from 'connected-react-router';
// import thunk from 'redux-thunk'
// import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import reducers from './reducers'
// import { composeWithDevTools } from 'redux-devtools-extension';

const envQA = process.env.API_ENV == 'development' || process.env.API_ENV == 'DEVELOPMENT' || process.env.API_ENV == 'QA'
const envUTT = process.env.API_ENV == 'stagging' || process.env.API_ENV == 'UTT'
const envPROD = process.env.API_ENV == 'production' || process.env.API_ENV == 'PROD'

const history = createBrowserHistory();
// const sagaMiddleware = createSagaMiddleware();
const routeMiddleware = routerMiddleware(history);
const middlewares = [routeMiddleware]; //sagaMiddleware, 
const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        })
        : compose;

const store = createStore(
    combineReducers({
        ...reducers,
        router: connectRouter(history)
    }),
    composeEnhancers(applyMiddleware(...middlewares))
);
// sagaMiddleware.run(rootSaga);
export { store, history };
