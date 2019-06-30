import React from 'react';
import { View, Text } from 'native-base';

export default class MenuScreen extends React.Component {
  constructor(props) {
    super(props)
    this.params = this.props.navigation.state.params
  }
  render() {
    return (
      <View>
        <Text>{this.params.restaurant}</Text>
      </View>
    )
  }
}
