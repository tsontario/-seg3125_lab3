import React from 'react';
import { StyleSheet } from 'react-native';
import { Item, Form, Input, Button, Label, Picker } from 'native-base';
import { Text as NBText } from 'native-base';

export default class LoginForm extends React.Component {
  render() {
    return (
    <Form style={{marginTop: 20}}>
      <CityPicker />
      <FoodPicker />
      <Item stackedLabel regular>
        <Input
          placeholder="(optional) Search for restaurants..."
          placeholderTextColor="#999"
        />
      </Item>
      <Button primary block>
        <NBText>Find restaurants!</NBText>
      </Button>
    </Form>
  )}
}

class CityPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected2: "ottawa"
    };
  }

  onValueChange2(value: string) {
    this.setState({
      selected2: value
    });
  }

  render() {
    return(
      <Item fixedLabel picker>
        <Label style={styles.labels}>My location</Label>
        <Picker
          mode="dropdown"
          style={{ width: undefined }}
          selectedValue={this.state.selected2}
          onValueChange={this.onValueChange2.bind(this)}
        >
          <Picker.Item label="Ottawa" value="ottawa" />
          <Picker.Item label="Montreal" value="montreal" />
          <Picker.Item label="Waterloo" value="waterloo" />
          <Picker.Item label="Toronto" value="toronto" />
          </Picker>
      </Item>
  )};
}

class FoodPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected2: "ottawa"
    };
  }

  onValueChange2(value: string) {
    this.setState({
      selected2: value
    });
  }

  render() {
    return(
      <Item fixedLabel picker>
      <Label style={styles.labels}>I'm hungry for...</Label>
      <Picker
        mode="dropdown"
        style={{ width: undefined }}
        selectedValue={this.state.selected2}
        onValueChange={this.onValueChange2.bind(this)}
      >
        <Picker.Item label="Breakfast" value="breakfast" />
        <Picker.Item label="Lunch" value="lunch" />
        <Picker.Item label="Dinner" value="dinner" />
        <Picker.Item label="Dessert" value="dessert" />
      </Picker>
    </Item>
  )};
}

const styles = StyleSheet.create({
  labels: {
    marginLeft: 5
  }
});