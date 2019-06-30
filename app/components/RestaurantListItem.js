import React from 'react';
import { View } from 'react-native';
import { ListItem, Thumbnail, Text, Left, Body, Right, Button, Icon } from 'native-base';

export default class RestaurantListItem extends React.Component {
  render() {
    return (
      <ListItem 
        thumbnail 
        onPress={() => this.props.navigation.navigate("Menu", {
          restaurant: this.props.item.restaurantName
        })}
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
            <Text style={{color: "#555"}}>
              {this.props.item.price}
            </Text>
          </View>
        </Body>
        <Right style={{paddingLeft: 30}}>
          <Icon name="arrow-forward" />
        </Right>
      </ListItem>
    )
  }
}
