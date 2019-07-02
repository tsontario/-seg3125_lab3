import React from 'react';
import { Text, Icon, Container, Header, Left, Button, Body, Title, Right, Form, Item, Input, Picker } from 'native-base';
import { SectionList, View, StyleSheet, Button as NativeButton } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';




export default class Checkout extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          tableHead: ['Item', 'Quantity', 'Price'],
          tableData: [
            ['The Breakfast Club', '1', '$17.49'],
            ['BBQ Bacon Burger', '1', '$17.999'],
            ['Subtotal', '', '$35.48'],
            ['Taxes','','$4.61'],
            ['Total','','$40.09']
          ]
        
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
                <Title>Checkout</Title>
              </Body>
              <Right></Right>
            </Header>
          )
        }
      }
    render(){
        
        const state = this.state;
        return (
            <View style={styles.container}>
            <Text style={{fontSize: 24, textAlign: 'center'}}>Order Summary</Text>
            <Text style={{fontSize: 18, textAlign: 'center', marginBottom:15}}>Burgermeister</Text>
            
            <Table>
            <Row data={state.tableHead} flexArr={[3, 1, 2]} style={styles.head} textStyle={styles.text}/>
            <TableWrapper style={styles.wrapper}>
                <Col data={state.tableTitle} style={styles.title} heightArr={[28,28]} textStyle={styles.text}/>
                <Rows data={state.tableData} flexArr={[3, 1, 2]} style={styles.row} textStyle={styles.text}/>
            </TableWrapper>
            
            </Table>
            <Form>
            <Text style={{marginTop:30, fontSize:24}}>Payment Details</Text>
            <Item picker>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={{ width: undefined }}
                placeholder="Payment Method"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
              >
                <Picker.Item label="Credit Card" value="key0" />
                <Picker.Item label="Debit Card" value="key1" />
                <Picker.Item label="Cash" value="key2" />
              </Picker>
            </Item>
            <Item last>
              <Input placeholder="Card Number" />
            </Item>
            <Text>Expiry Date</Text>
            <Item picker style={{marginTop: 10}}>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={{ width: undefined }}
                placeholder="Month"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
              >
                <Picker.Item label="January" value="key0" />
                <Picker.Item label="Febuary" value="key1" />
                <Picker.Item label="March" value="key2" />
                <Picker.Item label="April" value="key3" />
                <Picker.Item label="May" value="key4" />
                <Picker.Item label="June" value="key5" />
                <Picker.Item label="July" value="key6" />
                <Picker.Item label="August" value="key7" />
                <Picker.Item label="September" value="key8" />
                <Picker.Item label="October" value="key9" />
                <Picker.Item label="November" value="key10" />
                <Picker.Item label="December" value="key11" />
              </Picker>
            </Item>
            <Item>
                <Input placeholder="Year"/>
            </Item>
          </Form>
          <Button full><Text>Checkout</Text></Button>
        </View>
        )
    }
}
const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    head: {  height: 40,  backgroundColor: '#f1f8ff'  },
    wrapper: { flexDirection: 'row' },
    title: { flex: 1, backgroundColor: '#f6f8fa' },
    row: {  height: 28  },
    text: { textAlign: 'center' }
  });