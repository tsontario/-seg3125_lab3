import React from 'react';
import { Text, Icon, Container, Header, Left, Button, Body, Title, Right, ListItem, Badge } from 'native-base';
import { SectionList, View, StyleSheet, Button as NativeButton } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';




export default class Checkout extends React.Component {

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
                <Title>Checkout</Title>
              </Body>
              <Right></Right>
            </Header>
          )
        }
      }
    render(){
        return (
            <Text>TODO</Text>
        )
    }
}