import { compose, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {rootReducer} from "./reducers/root";
import { socketMiddleware } from "./middleware/socketMiddleware";
import { wsActions } from "./actions/webSocket";

const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
        : compose;


const enhancer = composeEnhancers(applyMiddleware(thunk, socketMiddleware(wsActions)) );
export const store = createStore(rootReducer, enhancer);

