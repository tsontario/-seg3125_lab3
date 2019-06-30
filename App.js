import LoginScreen from './app/screens/Login';
import RestaurantsListScreen from './app/screens/RestaurantsList';
import MenuScreen from './app/screens/Menu'
import { createStackNavigator, createAppContainer } from 'react-navigation';

type Props = {};

const appNavigator = createStackNavigator(
  {
    Home: { screen: LoginScreen },
    RestaurantsList: { screen: RestaurantsListScreen },
    Menu: { screen: MenuScreen }
  }
)

export default createAppContainer(appNavigator);
