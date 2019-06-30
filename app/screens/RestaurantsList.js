import React from 'react';
import { FlatList } from 'react-native';
import { Header, Left, Right, Body, Icon, Button, Title, Container } from 'native-base';
import Restaurants from '../components/resturants';
import RestaurantListItem from '../components/RestaurantListItem'

export default class RestaurantsListScreen extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      header: (
        <Header>
          <Left>
            <Button transparent>
              <Icon name='arrow-back' onPress={() => navigation.goBack()} />
            </Button>
          </Left>
          <Body>
            <Title>Select Restaurant</Title>
          </Body>
          <Right></Right>
        </Header>
      )
    }
  }

  render() {
    return (
      <Container>
        <FlatList
          data={Restaurants}
          renderItem={ ({item}) => (<RestaurantListItem item={item}/>)}
          keyExtractor={ (item, index) => index.toString() }
        >

        </FlatList>
      </Container>
    );
  }
}
