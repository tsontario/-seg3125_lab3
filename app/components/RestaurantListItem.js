import React from 'react';
import { View } from 'react-native';
import { Content, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';

export default class RestaurantListItem extends React.Component {
  render() {
    return (
      <ListItem 
        thumbnail 
        onPress={() => alert("Foobar")}
    >
        <Left>
          <Thumbnail square source={this.props.item.thumbnail} />
        </Left>
        <Body style={{flex: 1, flexDirection: "row"}}>
          <View style={{flex: 0}}>
            <Text>
              {this.props.item.restaurantName}
            </Text>
            <Text style={{color: "#555", fontSize: 14}}>
              {this.props.item.hours.open}&nbsp;-
            </Text>
            <Text style={{color: "#555", fontSize: 14}}>
              {this.props.item.hours.close}
            </Text>
          </View>
          <View style={{flex: 1, alignItems: "flex-end"}}>
            <Text style={{color: "#555"}}>
              {this.props.item.style}
            </Text>
            <Text style={{color: "#555", marginTop: 50, marginBottom: 0, paddingBottom: 0}}>
              {this.props.item.price}
            </Text>
          </View>
        </Body>
        <Right>
          <Button transparent>
            <Text>Select</Text>
          </Button>
        </Right>
      </ListItem>
    )
  }
}