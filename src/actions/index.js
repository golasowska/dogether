import Firebase from 'firebase';

export const SIGN_OUT_USER = 'SIGN_OUT_USER';
export const AUTH_ERROR = 'AUTH_ERROR';
export const AUTH_USER = 'AUTH_USER';
export const NEW_ARTICLE = 'NEW_ARTICLE';
export const DISPLAY_ARTICLES = 'DISPLAY_ARTICLES';
export const ADD_VET = 'ADD_VET';
export const DISPLAY_VETS = 'DISPLAY_VETS';
export const ADD_DOG_FRIENDLY = 'ADD_DOG_FRIENDLY';


const config = {
    apiKey: "AIzaSyDjmyqfb-Olrz8xpTzK6B5Ry_x29Ut7dW4",
    authDomain: "dogether-d802f.firebaseapp.com",
    databaseURL: "https://dogether-d802f.firebaseio.com",
    projectId: "dogether-d802f",
    storageBucket: "dogether-d802f.appspot.com",
    messagingSenderId: "375326882369"
  };

  Firebase.initializeApp(config);

  const artDatabase = Firebase.database().ref('newArticle');
  const vetDatabase = Firebase.database().ref('Vets');
  const dogFriendlyDatabase = Firebase.database().ref('dogFriendly');
  const storage = Firebase.storage().ref();

  export function signUpUser(credentials) {
    return function(dispatch) {
      Firebase.auth().createUserWithEmailAndPassword(credentials.email, credentials.password)
      .then(response => {
        dispatch(authUser());
      })
      .catch(error => {
        console.log(error);
        dispatch(authError(error));
      });
    }
  }

  export function signInUser(credentials) {
    return function(dispatch) {
      Firebase.auth().signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(response => {
        dispatch(authUser());
      })
      .catch(error => {
        dispatch(authError(error));
      });
    }
  }

  export function signOutUser() {
    return function (dispatch) {
      Firebase.auth().signOut()
      .then(() => {
        dispatch({
          type: SIGN_OUT_USER
        })
      });
    }
  }

  export function verifyAuth() {
    return function (dispatch) {
      Firebase.auth().onAuthStateChanged( user => {
        if (user) {
          dispatch(authUser());
        } else {
          dispatch(signOutUser());
        }
      });
    }
  }

  export function authUser() {
    return {
      type: AUTH_USER
    }
  }

  export function authError(error) {
    return {
      type: AUTH_ERROR,
      payload: error
    }
  }

  export function createNewArticle(article, callback) {
    const { title, picture, content} = article;
    const userUid = Firebase.auth().currentUser.uid;
    const id= `${userUid}${new Date().getTime()}`
    return function(dispatch) {
      storage.child(`images/${id}`).put(picture[0]).then((snapshot) => {
        artDatabase.push({
          id: id,
          title: title,
          content: content,
          picture: snapshot.metadata.downloadURLs[0]})
        })
        callback()
          dispatch({
            type: NEW_ARTICLE,
            payload: article
        })
    }
  }

  export function displayArticles() {
    return function(dispatch) {
      artDatabase.on('value', snapshot => {dispatch({
        type: DISPLAY_ARTICLES,
        payload: snapshot.val()
      })})
    }
  }

  export function addVet(values, callback) {
    const { vet, streetName, streetNumber, phone, www } = values;
    const userUid = Firebase.auth().currentUser.uid;
    return function(dispatch) {
      vetDatabase.push({
        id: userUid,
        vet: vet,
        streetName: streetName,
        streetNumber: streetNumber,
        phone: phone,
        www: www
      })
      callback()
      dispatch({
        type: ADD_VET,
        payload: values
      })
    }
  }

  export function displayVets() {
    return function(dispatch) {
      vetDatabase.on('value', snapshot => {dispatch({
        type: DISPLAY_VETS,
        payload: snapshot.val()
      })})
    }
  }

  export function addDogFriendly(values, callback) {
    const { place, tags, description, www} = values;
    const userUid = Firebase.auth().currentUser.uid;
    return function(dispatch) {
      dogFriendlyDatabase.push({
        id: userUid,
        place: place,
        tags: tags,
        description: description,
        www: www
      })
      callback()
      dispatch({
        type: ADD_DOG_FRIENDLY,
        payload: values
      })
    }
  }
