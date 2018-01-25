import Firebase from 'firebase';

export const SIGN_OUT_USER = 'SIGN_OUT_USER';
export const AUTH_ERROR = 'AUTH_ERROR';
export const AUTH_USER = 'AUTH_USER';
export const NEW_ARTICLE = 'NEW_ARTICLE';
export const DISPLAY_ARTICLES = 'DISPLAY_ARTICLES';
export const ADD_VET = 'ADD_VET';
export const DISPLAY_VETS = 'DISPLAY_VETS';
export const ADD_DOG_FRIENDLY = 'ADD_DOG_FRIENDLY';
export const DISPLAY_DOG_FRIENDLY = 'DISPLAY_DOG_FRIENDLY';
export const DISPLAY_DF_TAGS = 'DISPLAY_DF_TAGS';
export const ADD_GALLERY = 'ADD_GALLERY';
export const DISPLAY_GALLERY = 'DISPLAY_GALLERY';
export const ADD_VOTE = 'ADD_VOTE';
export const BLOCK_VOTE = 'BLOCK_VOTE';
export const ADD_ADOPTION = 'ADD_ADOPTION';
export const DISPLAY_ADOPTION = 'DISPLAY_ADOPTION';
export const RESERVE = 'RESERVE';
export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const SEND_ADOPTION_MESSAGE = 'SEND_ADOPTION_MESSAGE';

const config = {
  apiKey: 'AIzaSyDjmyqfb-Olrz8xpTzK6B5Ry_x29Ut7dW4',
  authDomain: 'dogether-d802f.firebaseapp.com',
  databaseURL: 'https://dogether-d802f.firebaseio.com',
  projectId: 'dogether-d802f',
  storageBucket: 'dogether-d802f.appspot.com',
  messagingSenderId: '375326882369'
};

Firebase.initializeApp(config);

const artDatabase = Firebase.database().ref('newArticle');
const vetDatabase = Firebase.database().ref('Vets');
const dogFriendlyDatabase = Firebase.database().ref('dogFriendly');
const articleStorage = Firebase.storage().ref('Articles');
const galleryStorage = Firebase.storage().ref('Gallery');
const galleryDatabase = Firebase.database().ref('Gallery');
const adoptionDatabase = Firebase.database().ref('Adoption');
const adoptionStorage = Firebase.storage().ref('Adoption');
const adoptionMessageDatabase = Firebase.database().ref('adoptionMessage');

export function signUpUser(credentials) {
  return function(dispatch) {
    Firebase.auth()
      .createUserWithEmailAndPassword(credentials.email, credentials.password)
      .then(response => {
        dispatch(authUser());
      })
      .catch(error => {
        console.log(error);
        dispatch(authError(error));
      });
  };
}

export function signInUser(credentials) {
  return function(dispatch) {
    Firebase.auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(response => {
        dispatch(authUser());
      })
      .catch(error => {
        dispatch(authError(error));
      });
  };
}

export function signOutUser() {
  return function(dispatch) {
    Firebase.auth()
      .signOut()
      .then(() => {
        dispatch({
          type: SIGN_OUT_USER
        });
      });
  };
}

export function verifyAuth() {
  return function(dispatch) {
    Firebase.auth().onAuthStateChanged(user => {
      if (user) {
        dispatch(authUser());
      } else {
        dispatch(signOutUser());
      }
    });
  };
}

export function authUser() {
  return {
    type: AUTH_USER
  };
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  };
}

export function createNewArticle(article, callback) {
  const { title, picture, content } = article;
  const userUid = Firebase.auth().currentUser.uid;
  const id = `${userUid}${new Date().getTime()}`;
  return function(dispatch) {
    articleStorage
      .child(`images/${id}`)
      .put(picture[0])
      .then(snapshot => {
        artDatabase.push({
          userUid,
          id,
          title,
          content,
          picture: snapshot.metadata.downloadURLs[0]
        });
      });
    callback();
    dispatch({
      type: NEW_ARTICLE,
      payload: article
    });
  };
}

export function displayArticles() {
  return function(dispatch) {
    artDatabase.on('value', snapshot => {
      dispatch({
        type: DISPLAY_ARTICLES,
        payload: snapshot.val()
      });
    });
  };
}

export function addVet(values, callback) {
  const { vet, streetName, streetNumber, phone, www } = values;
  const userUid = Firebase.auth().currentUser.uid;
  return function(dispatch) {
    vetDatabase.push({
      userUid,
      vet,
      streetName,
      streetNumber,
      phone,
      www
    });
    callback();
    dispatch({
      type: ADD_VET,
      payload: values
    });
  };
}

export function displayVets() {
  return function(dispatch) {
    vetDatabase.on('value', snapshot => {
      dispatch({
        type: DISPLAY_VETS,
        payload: snapshot.val()
      });
    });
  };
}

export function addDogFriendly(values, callback) {
  const { place, tags, description, www } = values;
  const userUid = Firebase.auth().currentUser.uid;
  return function(dispatch) {
    dogFriendlyDatabase.push({
      userUid,
      place,
      tags,
      description,
      www
    });
    callback();
    dispatch({
      type: ADD_DOG_FRIENDLY,
      payload: values
    });
  };
}

export function displayDogFriendly() {
  return function(dispatch) {
    dogFriendlyDatabase.on('value', snapshot => {
      dispatch({
        type: DISPLAY_DOG_FRIENDLY,
        payload: snapshot.val()
      });
    });
  };
}

export function fetchDfTags(values) {
  const value = values.title;
  return function(dispatch) {
    dogFriendlyDatabase
      .orderByChild('tags')
      .equalTo(value)
      .on('value', snapshot => {
        console.log('snapshot.key, snapshot.val', snapshot.val());
        dispatch({
          type: DISPLAY_DF_TAGS,
          payload: snapshot.val()
        });
      });
  };
}

export function addGallery(values, callback) {
  const { name, picture } = values;
  const userUid = Firebase.auth().currentUser.uid;
  const id = `${userUid}${new Date().getTime()}`;
  const votes = 0;
  return function(dispatch) {
    galleryStorage
      .child(`images/${id}`)
      .put(picture[0])
      .then(snapshot => {
        galleryDatabase.push({
          userUid,
          id,
          name,
          picture: snapshot.metadata.downloadURLs[0],
          votes
        });
      });
    callback();
    dispatch({
      type: ADD_GALLERY,
      payload: values
    });
  };
}

export function displayGallery() {
  return function(dispatch) {
    galleryDatabase.on('value', snapshot => {
      dispatch({
        type: DISPLAY_GALLERY,
        payload: snapshot.val()
      });
    });
  };
}

export function addVote(votes, key) {
  return function(dispatch) {
    galleryDatabase.child(key).update({
      votes: votes
    });
    dispatch({
      type: ADD_VOTE,
      payload: votes
    });
  };
}

export function blockVote(block) {
  return function(dispatch) {
    dispatch({
      type: BLOCK_VOTE,
      payload: block
    });
  };
}

export function addAdoption(values, callback) {
  const { name, breed, picture } = values;
  const userUid = Firebase.auth().currentUser.uid;
  const id = `${userUid}${new Date().getTime()}`;
  const adoption = 'reserve';
  return function(dispatch) {
    adoptionStorage
      .child(`images/${id}`)
      .put(picture[0])
      .then(snapshot => {
        adoptionDatabase.push({
          adoption,
          userUid,
          id,
          name,
          breed,
          picture: snapshot.metadata.downloadURLs[0]
        });
      });
    callback();
    dispatch({
      type: ADD_ADOPTION,
      payload: values
    });
  };
}

export function displayAdoption() {
  return function(dispatch) {
    adoptionDatabase.on('value', snapshot => {
      dispatch({
        type: DISPLAY_ADOPTION,
        payload: snapshot.val()
      });
    });
  };
}

export function reserveData(data, key) {
  console.log('action reserve', data);
  return function(dispatch) {
    adoptionDatabase.child(key).update({
      adoption: data
    });
    dispatch({
      type: RESERVE,
      payload: data
    });
  };
}

export function openModal(dog) {
  return {
    type: OPEN_MODAL,
    payload: dog
  };
}

export function closeModal() {
  return {
    type: CLOSE_MODAL
  };
}

export function adoptMessage(values, ownerUid) {
  const { name, phone, message } = values;
  const userUid = Firebase.auth().currentUser.uid;
  const data = { values, ownerUid, userUid };
  return function(dispatch) {
    adoptionMessageDatabase.push({
      userUid,
      name,
      phone,
      message,
      ownerUid
    });
    console.log('data w send message', data);
    dispatch({
      type: SEND_ADOPTION_MESSAGE,
      payload: data
    });
  };
}

// export function displayDogFriendly() {
//   return function(dispatch) {
//     dogFriendlyDatabase.on('value', snapshot => {
//       dispatch({
//         type: DISPLAY_DOG_FRIENDLY,
//         payload: snapshot.val()
//       });
//     });
//   };
// }
