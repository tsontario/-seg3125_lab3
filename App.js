import LoginScreen from './app/screens/Login';
import RestaurantsListScreen from './app/screens/RestaurantsList';
import MenuScreen from './app/screens/Menu'
import CartScreen from './app/screens/Cart';
import Checkout from './app/screens/Checkout';
import { createStackNavigator, createAppContainer } from 'react-navigation';

type Props = {};

const appNavigator = createStackNavigator(
  {
    Home: { screen: LoginScreen },
    RestaurantsList: { screen: RestaurantsListScreen },
    Menu: { screen: MenuScreen },
    Cart: { screen: CartScreen },
    Checkout: {screen: Checkout}
  }
)

export default createAppContainer(appNavigator);
