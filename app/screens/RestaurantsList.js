import React from 'react';
import { View, Text } from 'react-native';
import { Header, Left, Right, Body, Icon, Button, Title } from 'native-base';

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
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>TODO Restaurants list screen</Text>
      </View>
    );
  }
}
