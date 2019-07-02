import React from 'react';
import { Text, Icon, Container, Header, Left, Button, Body, Title, Right, ListItem, Badge } from 'native-base';
import { SectionList, View, StyleSheet, Button as NativeButton } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';




export default class Cart extends React.Component {

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
            <Title>Cart</Title>
          </Body>
          <Right></Right>
        </Header>
      )
    }
  }
  render() {
    const { navigation } = this.props;
    total = 0.0;
    const items = navigation.getParam('items', []);
    items.forEach(item => {
      total= item.price + total;
    });
    console.log(items);
    return (
      
      <View style={{height: "100%"}}>
      <FlatList data ={ items }
      renderItem={({item}) => 
      <ListItem
        style={{display: "flex", flexDirection: "row"}}>
        <Text style={[styles.sectionListItem, {flex: 1}]}>{item.quantity}</Text>
        <Text style={[styles.sectionListItem, {flex: 2}]}>{item.name}</Text>
        <Text style={[styles.sectionListItem, {textAlign: "right", flex: 1}]}>${item.price}</Text>
        <Icon name="trash" />
      </ListItem>
      }
       keyExtractor={(item, index) => index.toString()}/>
       <Text style={{position: 'relative', fontSize: 25, color: '#ff0000'}}>Total = {total}</Text>
       <Button full danger style={{position: 'absolute', left: 0, bottom:0, right: 0}}><Text> Checkout </Text></Button>
       </View>
    )
  }
}

const styles = StyleSheet.create({
  sectionHeaderStyle: {
    backgroundColor: '#3F51B5',
    fontSize: 20,
    padding: 20,
    color: '#fff',
  },
  sectionListItem: {
    fontSize: 18,
    padding: 10,
  },
  content: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  }
})  
