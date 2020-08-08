import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './app/Screens/HomeScreen'
import LoadingScreen from './app/Screens/LoadingScreen'
import LoginScreen from './app/Screens/LoginScreen'
import RegisterScreen from './app/Screens/RegisterScreen'
import * as firebase from 'firebase';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwf6IBO0aHgZx9kt40sKzG_3AVhENt8qE",
  authDomain: "socialapp-871e2.firebaseapp.com",
  databaseURL: "https://socialapp-871e2.firebaseio.com",
  projectId: "socialapp-871e2",
  storageBucket: "socialapp-871e2.appspot.com",
  messagingSenderId: "912005946514",
  appId: "1:912005946514:web:a3dcd3351803e08c565a4b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Navigation

const AppStack = createStackNavigator({
  Home:HomeScreen
})

const AuthStack = createStackNavigator({
  Login:LoginScreen,
  Register:RegisterScreen
})
export default createAppContainer(
  createSwitchNavigator(
    {
      Loading:LoadingScreen,
      App:AppStack,
      Auth:AuthStack 
    },
    {
      initialRouteName:"Loading"
    }
  )
)