import React from 'react';
import { Colors } from '../styles/colors';
import {
  createStackNavigator,
  createAppContainer,
  createDrawerNavigator,
} from 'react-navigation';


import Signin from '../screens/signin/container/signin';
import Store from '../screens/store/container/store'
import UploadPhoto from '../screens/uploadphoto/container/UploadPhoto'
const Navigation = createStackNavigator(
  {

    signin: {
      screen: Signin,
      navigationOptions: () => ({
        headerStyle: {
          height: 0,
          backgroundColor: Colors.item,
          elevation: 0,
          borderBottomWidth: 0,
        },
        headerTintColor: Colors.NewBackgroundColor,
      }),
    },
    store: {
      screen: Store,
      navigationOptions: () => ({
        header: null,

        headerStyle: {
          backgroundColor: Colors.item,

          borderBottomWidth: 0,
        },

        headerTintColor: Colors.backgroundColor,
      }),
    },
    UploadPhoto: {
      screen: UploadPhoto,
      navigationOptions: () => ({
        header: null,

        headerStyle: {
          backgroundColor: Colors.item,

          borderBottomWidth: 0,
        },

        headerTintColor: Colors.backgroundColor,
      }),
    },

  },
  {
    initialRouteName: 'signin',
  },
);
export default createAppContainer(Navigation);
