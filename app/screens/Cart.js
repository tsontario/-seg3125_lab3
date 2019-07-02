import React from 'react';
import { Text, Icon, Container, Header, Left, Button, Body, Title, Right, ListItem, Badge } from 'native-base';
import { SectionList, View, StyleSheet, Button as NativeButton } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { TouchableOpacity } from 'react-native-gesture-handler';



export default class Cart extends React.Component {
  constructor(props) {
    super(props);
    console.log("in constructor")
    this.state = {
      items: this.props.navigation.getParam('items', [])
    }
  }

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

  removeItem(item) {
    console.log(this.state.items)
    console.log(item)
    // Get items, remove by name
    items = this.state.items
    console.log(items.indexOf(item))
    this.setState({items: items.splice(items, items.indexOf(item))})
  }

  render() {
    total = 0.0;
    items = this.state.items
    items.forEach(item => {
      total= item.price + total;
    });
    console.log(items);
    return (
      
      <View style={{height: "100%", display: "flex"}}>
        <FlatList data ={ items }
          style={{flex: 1}}
          renderItem={({item}) => (
            <ListItem
              style={{display: "flex", flexDirection: "row"}}>
              <Text style={[styles.sectionListItem, {flex: 1}]}>{item.quantity}</Text>
              <Text style={[styles.sectionListItem, {flex: 2}]}>{item.name}</Text>
              <Text style={[styles.sectionListItem, {textAlign: "right", flex: 1}]}>${item.price}</Text>
              <TouchableOpacity
                onPress={ () => (this.removeItem(item))}
                style={{flexDirection: "row"}}
              >
               <Icon name="trash" />
              </TouchableOpacity>
            </ListItem>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
        <Text style={{marginBottom: 60, paddingRight: 20, fontSize: 25, textAlign: "right"}}>Total = ${total}</Text>
        <Button full danger style={{position: 'absolute', left: 0, bottom:0, right: 0, height: 50}}><Text>Proceed to Checkout </Text></Button>
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
