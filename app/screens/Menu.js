import React from 'react';
import { SectionList, View, StyleSheet, Button as NativeButton } from 'react-native';
import { Text, Container, Header, Left, Button, Icon, Body, Title, Right, ListItem, Badge } from 'native-base';
import Modal from 'react-native-modal';
import Hero from 'react-native-hero';
import Images from '../images/images';
import Menu from '../components/menu_fake';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class MenuScreen extends React.Component {

  
  constructor(props) {
    super(props)
    this.params = this.props.navigation.state.params
    this.addItemsToCart = this.addItemsToCart.bind(this);
    this.state = {
      itemsInCart: 0
    }
  }

  addItemsToCart(items){
    this.setState({itemsInCart: this.state.itemsInCart + items});
    console.log(this.state.itemsInCart);
  }

  
  componentDidMount() {
    this.props.navigation.setParams({ getItemsInCart: this.state.itemsInCart });
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
            <TouchableOpacity
              onPress={ () => navigation.navigate("Cart")}
              style={{flexDirection: "row"}}
            >
              <Icon name="cart" />
              <Badge success><Text>{navigation.getParam('getItemsInCart')}</Text></Badge>
            </TouchableOpacity>
          </Right>
        </Header>
      )
    }
  }

  FlatListItemSeparator = () => {
    return (
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
            <MenuListItem item={item} addItemsToCart={this.addItemsToCart}/>
          )}
          keyExtractor={(item, index) => index}
        />
      </Container>
    )
  }
}

class QuantityModal extends React.Component {
  constructor(props) {
    super(props)
    this.props.state = props.state;
  }

  state = {
    isModalVisible: false,
    amount: 0
  };

  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };

  onValueChange(value) {
    this.setState({
      selected: value
    });
  }

  minusOne() {
    if (this.state.amount === 0) {
      return;
    } else {
      this.setState({amount: this.state.amount - 1})
    }
  }

  clearOrder() {
    this.setState({amount: 0, isModalVisible: false})
  }

  plusOne() {
    this.setState({amount: this.state.amount + 1})
  }

  orderItem(){
    this.setState({ isModalVisible: false });
    this.props.addItemsToCart(this.state.amount);
  }

  render() {
    return (
        <Modal
          isVisible={this.state.isModalVisible}
        >
          <View style={styles.content}>
            <Text style={{paddingBottom: 10}}>{this.props.item.name}</Text>
            <View style={{paddingBottom: 10, flexDirection: "row"}}>
              <Icon
                name="remove-circle-outline"
                style={{paddingRight: 10, color: "#3F51B5"}}
                onPress={() => this.minusOne()}
              />
              <Text style={{minWidth: 100, textAlign: "center"}}>{this.state.amount}</Text>
              <Icon
                name="add-circle"
                style={{paddingLeft: 10, color: "#3F51B5"}}
                onPress={() => this.plusOne()}
              />
            </View>
            <View style={{paddingBottom: 10, flexDirection: "row"}}>
              <Button
                style={{marginRight: 10}}
                danger
                onPress={() => this.clearOrder()}
              ><Text>Cancel</Text></Button>
              <Button
                primary
                onPress={() => this.orderItem()}
              ><Text>Order item</Text></Button>
            </View>
          </View>
        </Modal>
    )
  }
}

class MenuListItem extends React.Component {
  constructor(props) {
    super(props);
    this.modalRef = React.createRef();
    this.props.item = props.item;
    this.props.addItemsToCart = props.addItemsToCart;
  }

  render() {
    return (
      <ListItem
        style={{display: "flex", flexDirection: "row"}}
        onPress={() => this.modalRef.current.toggleModal()}
      >
        <Text style={[styles.sectionListItem, {flex: 2}]}>{this.props.item.name}</Text>
        <Text style={[styles.sectionListItem, {textAlign: "right", flex: 1}]}>${this.props.item.price}</Text>
        <QuantityModal ref={this.modalRef} item={this.props.item} addItemsToCart={this.props.addItemsToCart}/>
      </ListItem>
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
