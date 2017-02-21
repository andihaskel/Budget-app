import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  Picker,
  PickerItem,
  ToolbarAndroid,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native'
import {
  Header,
  Title,
  Button,
  List,
  ListItem,
  Thumbnail,
  H1
} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import Style from './Styles';
import { Col, Row, Grid } from "react-native-easy-grid";



class History extends Component {
  constructor(props){
    super(props);
    this.editFixed = this.editFixed.bind(this);
    this.updateMonth = this.updateMonth.bind(this);
    this.loadPayments = this.loadPayments.bind(this);
   
    this.state = {
      months: [],
      selectedValue: '',
       paymentsHistory: [],
       savingsAccount: {}
    };
  }

  editFixed(item){
    this.props.navigator.push({id: 'editFixed', data: item._id});
  }

  updateMonth(item) {
    this.setState({selectedValue: item});
    this.loadPayments(item);
  }

  loadPayments(month) {
    fetch('http://10.0.2.2:3000/5891e76d1f3d5d7aefb2e830/payments/' + month)
    .then((response) => response.json())
    .then((responseData) => {
      this.setState({paymentsHistory: responseData});

    })
    .catch(function(err) {
      console.log('Fetch Error', err);
    });

  }
  componentWillMount() {
    fetch('http://10.0.2.2:3000/5891e76d1f3d5d7aefb2e830/monthsActive')
    .then((response) => response.json())
    .then((responseData) => {
      this.setState({months: responseData});
      this.setState({selectedValue: this.state.months[0]});
      this.loadPayments(this.state.selectedValue);

    })
    .catch(function(err) {
      console.log('Fetch Error', err);

    });

    fetch('http://10.0.2.2:3000/5891e76d1f3d5d7aefb2e830/savings')
    .then((response) => response.json())
    .then((responseData) => {
      this.setState({savingsAccount: responseData});
    })
    .catch(function(err) {
      console.log('Fetch Error', err);
    });
  }
 
  render() {
    console.log(this.state.selectedValue);
    return (
      <View>
        <Header>
          <Button block transparent onPress={this.props.openDrawer}>
            <Icon name='bars' size={30} />
          </Button>
          <Title>Savings history</Title>
        </Header>
        <View style={{alignItems:'center', width:Style.DEVICE_WIDTH}}>
        <Text style={{marginTop:10, fontSize:35}}>Savings</Text>
        <Text  style={{marginTop:10, fontSize:30}}>$ {this.state.savingsAccount.balance}</Text>
        <Text style={{marginTop:10, fontSize:25}}>History</Text>
      </View>
        <Picker
          mode='dropdown'
          style={{height:70}}
          selectedValue={this.state.selectedValue}
          onValueChange={(month) => this.updateMonth(month)}>

          { this.state.months.map((s,i) => {
            return (<Picker.Item
              key = {i}
              value={s}
              label={s} />)
            }) }
          </Picker>
          <ScrollView>
            <List dataArray={this.state.paymentsHistory}
              renderRow= {(item) =>
                <ListItem button onPress={() => {this.editFixed(item)}}>
                  <View style={{flex:1, flexDirection:'row', justifyContent:'space-between'}}>
                    <Grid>
                      <Row>
                        <Col style={{width:50}}>
                          <Thumbnail size={Style.THUMBNAIL_SIZE} source={require('./cutlery.png')} />
                        </Col>
                        <Col style={{width:Style.TEXTLIST_WIDTH, paddingLeft:10, paddingRight:10}}>
                          <Text style={{fontSize:20}}>{item.name}</Text>
                        </Col>
                        <Col style={{width:60}}>
                          <Text style={{fontSize:15}}>{'$' + item.amount}</Text>
                        </Col>
                        <Col style={{width:40}}>
                          {item.isIncome ?
                            <Icon  size={30} name="angle-double-up"  color='rgb(20,255,20)'/>
                            :<Icon size={30} name="angle-double-down"  color='rgb(255,0,0)'/>
                          }
                        </Col>
                      </Row>
                    </Grid>
                  </View>
                </ListItem>
              }>
            </List>
          </ScrollView>
        </View>
      )
    }
  }




  module.exports = History;
