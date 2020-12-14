import {createStore, applyMiddleware} from "redux"
import reducers from "./reducers/reducers"
import thunk from 'redux-thunk';

const store = createStore(reducers, applyMiddleware(thunk));

store.subscribe(() => console.info(store.getState())) // Для отладки

export default store;