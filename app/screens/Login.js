import React from 'react';
import { View, Text } from 'react-native';
import Hero from 'react-native-hero';
import Images from '../images/images';
import { Container, Header, Body, Title, Left, Right } from 'native-base';
import LoginForm from '../components/LoginForm';

export default class Login extends React.Component {
  render() {
    return (
      <Container>
        <Header>
          <Left></Left>
          <Body>
            <Title>Get Forked</Title>
          </Body>
          <Right></Right>
        </Header>
        <Hero
          minHeight={200}
          source={Images.veganPasta}
          colorOverlay="#333"
          colorOpacity={0.5}
          renderOverlay={() => (
            <View>
                <Text style={{
                  fontSize: 25,
                  color: "#fff",
                  paddingTop: 75,
                  marginHorizontal: 23,
                  textAlign: "center"
                }}>Stop waiting and start eating today!</Text>
            </View>
          )}
        />
        <LoginForm />
      </Container>
    )
  }
}
