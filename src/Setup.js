

import firebase from '@react-native-firebase/app';
import Auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import dynamicLinks from '@react-native-firebase/dynamic-links';
import messaging from '@react-native-firebase/messaging';

// const firebaseConfig = {
//   apiKey: "AIzaSyBi1lUgtUraRBxa0s2P5iYzS0HHIbUhaUQ",
//   authDomain: "flincsapplication-896f0.firebaseapp.com",
//   databaseURL: "https://flincsapplication-896f0.firebaseio.com",
//   projectId: "flincsapplication-896f0",
//   storageBucket: "flincsapplication-896f0.appspot.com",
//   messagingSenderId: "852494159031",
//   appId: "1:852494159031:web:8fb25743aa1f37ef359132",
//   measurementId: "G-5WTRSP2ZZ7"
// };

const firebaseConfig = {
  apiKey: "AIzaSyA39P65gS72XRe0a5uybUPQ9oqzvQjfto4",
  authDomain: "flincs-e2279.firebaseapp.com",
  databaseURL:"https://flincs-e2279-default-rtdb.firebaseio.com/",
  projectId: "flincs-e2279",
  storageBucket: "flincs-e2279.appspot.com",
  messagingSenderId: "459346702407",
  appId: "1:459346702407:web:b6fc04cb26f30e16b78162",
  measurementId: "G-1HT9PN1K3X"
};


if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export {
  firebase,
  Auth,
  database,
  dynamicLinks,
  messaging

};


// const Setup = () => {
 
//   return <App />;
// };

// export default Setup;