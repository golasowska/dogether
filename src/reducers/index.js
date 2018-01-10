import { combineReducers } from 'redux';
import { reducer as FormReducer } from 'redux-form';
import AuthReducer from './auth';
import { routerReducer } from 'react-router-redux';
import ArticleReducer from './article';

const rootReducer = combineReducers({
  form: FormReducer,
  auth: AuthReducer,
  router: routerReducer,
  article: ArticleReducer
});

export default rootReducer;
