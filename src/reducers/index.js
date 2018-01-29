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
import AddVote from './addvote';
import BlockVote from './blockvote';
import AddAdoption from './addadoption';
import DisplayAdoption from './displayadoption';
import Reserve from './reserve';
import ModalReducer from './modal';
import SendAdoptionMessage from './sendAdoptMessage';
import DisplayMessages from './displayMessages';
import VetLocation from './vetLocation';
import RemoveMessage from './removeMessage';
import DisplayMyArticles from './displayMyArticles';
import RemoveMyArticle from './removeMyArticle';

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
  displayGallery: DisplayGallery,
  addvote: AddVote,
  blockvote: BlockVote,
  addadoption: AddAdoption,
  displayAdoption: DisplayAdoption,
  reserve: Reserve,
  modal: ModalReducer,
  sendAdoptMessage: SendAdoptionMessage,
  displayMessages: DisplayMessages,
  vetLocation: VetLocation,
  removeMessage: RemoveMessage,
  displayMyArticles: DisplayMyArticles,
  removeMyArticle: RemoveMyArticle
});

export default rootReducer;
