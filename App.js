/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import {StyleSheet } from 'react-native';
import LoginScreen from './app/screens/Login';
import RestaurantsListScreen from './app/screens/RestaurantsList';
import { createStackNavigator, createAppContainer } from 'react-navigation';

type Props = {};

const appNavigator = createStackNavigator(
  {
    Home: { screen: LoginScreen },
    RestaurantsList: { screen: RestaurantsListScreen }
  }
)

export default createAppContainer(appNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
