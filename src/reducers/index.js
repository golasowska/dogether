import { combineReducers } from 'redux';
import { reducer as FormReducer } from 'redux-form';
import AuthReducer from './auth';
import { routerReducer } from 'react-router-redux';
import ArticleReducer from './article';
import DisplayArtReducer from './displayart';
import AddVetReducer from './addVet';
import DisplayVetsReducer from './displayVet';

const rootReducer = combineReducers({
  form: FormReducer,
  auth: AuthReducer,
  router: routerReducer,
  article: ArticleReducer,
  displayart: DisplayArtReducer,
  vets: AddVetReducer,
  displayVets: DisplayVetsReducer
});

export default rootReducer;
