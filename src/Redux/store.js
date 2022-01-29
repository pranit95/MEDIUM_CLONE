import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { searchReducer } from "./search/reducer";
import { reducer } from "./signup/reducer";
import { trendReducer } from "./trendings/reducer";
import { blogReducer } from "./blog/reducer";
const rootReducer = combineReducers({
  signup: reducer,
  trend: trendReducer,
  blog: blogReducer,
  search: searchReducer,
});
let composeEnhancers = compose;
if (process.env.NODE_ENV !== "production") {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;
}
const enhancer = composeEnhancers(applyMiddleware(thunk));
const store = createStore(rootReducer, enhancer);
export default store;
