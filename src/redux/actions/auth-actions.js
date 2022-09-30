import firebaseConfig from "../../firebase-config";
import { authActions } from "../slices/auth-slice";

export const logInUser = (email, password) => {
  const apiKey = firebaseConfig.apiKey;
  // 
  //not using
  //
  // return  (dispatch) => {
  //   console.log('here')
  //   try {
  //     fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`, {
  //       method: 'POST',
  //       body: JSON.stringify({
  //           email,
  //           password,
  //           returnSecureToken: true
  //       }),
  //       headers: {
  //           'Content-Type': 'application/json'
  //       }
  //     })
  //     .then(res => res.json())
  //     .then(data => {
  //           //save token to local storage
  //           //localStorage.setItem('token', data.token)
  //           console.log('res data ', data)
  //           //console.log('token? ', data.token)
  //           //dispatch(authActions.logIn())
  //       })
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
};
