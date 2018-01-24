import { combineReducers } from 'redux';
import { reducer as FormReducer } from 'redux-form';
import AuthReducer from './auth';
import { routerReducer } from 'react-router-redux';
import ArticleReducer from './article';
import DisplayArtReducer from './displayart';
import AddVetReducer from './addVet';
import DisplayVetsReducer from './displayVet';
import AddDogFriendly from './addDogFriendly';
import DisplayDogFriendly from './displayDogFriendly';
import AddGallery from './addgallery';
import DisplayGallery from './displaygallery';

const rootReducer = combineReducers({
  form: FormReducer,
  auth: AuthReducer,
  router: routerReducer,
  article: ArticleReducer,
  displayart: DisplayArtReducer,
  vets: AddVetReducer,
  displayVets: DisplayVetsReducer,
  dogFriendly: AddDogFriendly,
  displayDogFriendly: DisplayDogFriendly,
  addGallery: AddGallery,
  displayGallery: DisplayGallery
});

export default rootReducer;
