import React from 'react';
import { SectionList, View, StyleSheet, TouchableHighlight } from 'react-native';
import { Text, Container, Header, Left, Button, Icon, Body, Title, Right, Badge, ListItem } from 'native-base';
import Modal from 'react-native-modal';
import Hero from 'react-native-hero';
import Images from '../images/images';
import Menu from '../components/menu_fake';

class QuantityModal extends React.Component {
  state = {
    isModalVisible: false
  };

  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };

  render() {
    return (
      <View style={{marginTop: 22}}>
        <Modal
          isVisible={this.state.isModalVisible}
        >
          <View>
            <Text>Hello World!</Text>
            <TouchableHighlight
              onPress={() => {
                this.toggleModal();
              }}>
              <Text>Hide Modal</Text>
            </TouchableHighlight>
          </View>
        </Modal>
      </View>
    )
  }
}

export default class MenuScreen extends React.Component {
  constructor(props) {
    super(props)
    this.params = this.props.navigation.state.params
    this.modalRef = React.createRef();
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
            <Title>Menu</Title>
          </Body>
          <Right>
            <Icon name="cart"
            />
          </Right>
        </Header>
      )
    }
  }

  FlatListItemSeparator = () => {
    return (
      //Item Separator
      <View style={{height: 0.5, width: '100%', backgroundColor: '#C8C8C8'}}/>
    );
  };

  render() {
    return (
      <Container>
        <Hero
          style={{position: "fixed"}}
          minHeight={100}
          source={Images.veganPasta}
          colorOverlay="#333"
          colorOpacity={0.5}
          renderOverlay={() => (
            <View>
                <Text style={{
                  fontSize: 25,
                  color: "#fff",
                  paddingTop: 30,
                  marginHorizontal: 20,
                  textAlign: "center"
                }}>{this.params.restaurant}</Text>
            </View>)}
        />
        <SectionList
          sections={[
            {title: "Breakfast", data: Menu.breakfast},
            {title: "Lunch", data: Menu.lunch},
            {title: "Appetizers", data: Menu.appetizers},
            {title: "Dinner", data: Menu.dinner}
          ]}
          ItemSeparatorComponent={this.FlatListItemSeparator}
          renderSectionHeader={ ({section}) => (
            <Text style={styles.sectionHeaderStyle}>{section.title}</Text>
          )}
          renderItem={ ({item}) => (
            <ListItem
              style={{display: "flex", flexDirection: "row"}}
              onPress={() => this.modalRef.current.toggleModal()}
            >
              <Text style={[styles.sectionListItem, {flex: 2}]}>{item.name}</Text>
              <Text style={[styles.sectionListItem, {textAlign: "right", flex: 1}]}>${item.price}</Text>
              <QuantityModal ref={this.modalRef} />
            </ListItem>
          )}
          keyExtractor={(item, index) => index}
        />
        
      </Container>
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
  }
})