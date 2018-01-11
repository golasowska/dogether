import Firebase from 'firebase';

export const SIGN_OUT_USER = 'SIGN_OUT_USER';
export const AUTH_ERROR = 'AUTH_ERROR';
export const AUTH_USER = 'AUTH_USER';
export const NEW_ARTICLE = 'NEW_ARTICLE';
export const DISPLAY_ARTICLES = 'DISPLAY_ARTICLES';

const config = {
    apiKey: "AIzaSyDjmyqfb-Olrz8xpTzK6B5Ry_x29Ut7dW4",
    authDomain: "dogether-d802f.firebaseapp.com",
    databaseURL: "https://dogether-d802f.firebaseio.com",
    projectId: "dogether-d802f",
    storageBucket: "",
    messagingSenderId: "375326882369"
  };

  Firebase.initializeApp(config);

  const artDatabase = Firebase.database().ref('newArticle');

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

  export function createNewArticle(article) {
    const userUid = Firebase.auth().currentUser.uid;
    return function(dispatch) {
      artDatabase.push({
        user: userUid,
        title: article.title,
        content: article.content
      })
      .then(response =>{
        dispatch({
          type: NEW_ARTICLE,
          payload: article
        })
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
