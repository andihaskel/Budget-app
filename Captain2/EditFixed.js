import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  Picker,
  ToolbarAndroid,
  Switch,
  ToastAndroid,
  Alert
} from 'react-native'
import {
  Container,
  Content,
  Button,
  Tabs,
  Header,
  Title,
  List,
  ListItem,
  Badge,
  H1,
  H2
} from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";

import TextField from 'react-native-md-textinput';
import NavigationBar from 'react-native-navbar';
import Icon from 'react-native-vector-icons/FontAwesome';

class EditFixed extends Component {
  constructor(props) {
    console.log('estoy en edit fixed')
    super(props);
    this.goBack = this.goBack.bind(this);
    this.editFixed = this.editFixed.bind(this);
    this.deletePayment = this.deletePayment.bind(this);
    this.state = {edit: false, categories: [], price: 0, categorySelected: '', title:'', payment: {}, monthly:true};
  }
  goBack() {
    this.props.navigator.pop();
  }
  editFixed() {
      var payment ={
        name: this.state.title,
        amount: this.state.price, 
        isMonthly: this.state.monthly,
        categoryId: this.state.categorySelected
      }
      fetch("http://10.0.2.2:3000/payment/" + this.props.item,
     {
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "PUT",
    body: JSON.stringify({
                  name: this.state.title,
                  amount: Number.parseInt(this.state.price,10),
                  isMonthly: this.state.monthly
                })

     });
    ToastAndroid.show('Correctly edited', ToastAndroid.SHORT);
    this.props.navigator.pop(); 
    this.setState({edit: !this.state.edit})
  }

  componentWillMount() {

    console.log('http://10.0.2.2:3000/payment/' + this.props.item);
    fetch('http://10.0.2.2:3000/payment/' + this.props.item)
    .then((response) => response.json())
    .then((responseData) => {

        fetch('http://10.0.2.2:3000/categories')
          .then((response) => response.json())
          .then((responseData) => {
               this.setState({categories: responseData});

          })
            .catch(function(err) {
            console.log('Fetch Error', err);
}); 

this.setState({ title: responseData.name, price: responseData.amount, monthly: responseData.isMonthly,
             categorySelected: responseData.categoryId});

          })
      
    .catch(function(err) {
      console.log('Fetch Error', err);

    });
  }
  deletePayment() {
     ToastAndroid.show('Deleted correctly', ToastAndroid.SHORT);
     this.props.navigator.pop(); 
     fetch('http://10.0.2.2:3000/payment/' + this.props.item, {
      method: 'delete'
    }).then(response =>
      response.json().then(json => {
        console.log(json);
        return json;
      })
    );

        

  }

  showDelete() {
    return (
      Alert.alert(
        'Delete expense',
        'Are you sure?',
        [
          {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
          {text: 'OK', onPress: () => this.deletePayment()},
        ]
      )
    )
  }

  render() {
    var fixed = {name: 'Salary', amount: '12000', income:  false};
    var leftButtonConfig = {
      title: 'Back',
      handler: this.goBack,
    };
    var rightButtonConfig = {
      title: 'Save',
      handler: this.editFixed
    }
    console.log(this.state.price);
    return (
      <Container>
        <Content style={{padding:10}}>
          <NavigationBar
            title={{title:'Edit'}}
            leftButton={leftButtonConfig}
            rightButton={rightButtonConfig}
          />
          <Grid>
            <Row>
              <TextInput style={{width:Style.DEVICE_WIDTH, fontSize:20}} defaultValue={this.state.title} placeholder='Title' highlightColor={'#00BCD4'} onChangeText={(text) => this.setState({title: text})} />
            </Row>

            <Row style={{alignItems: 'center'}}>
              <Col size={1}>
                <Text style={{fontSize:30, marginVertical:10}}>$</Text>
              </Col>
              <Col size={5}>
                <TextInput defaultValue={this.state.price + ''}  style={{fontSize:20, height:50}} keyboardType='phone-pad' placeholder='Price' highlightColor={'#00BCD4'} onChangeText={(amount) => this.setState({price: amount})} />
              </Col>
              <Col size={12}>
                <Picker
                  mode='dropdown'
                  selectedValue={this.state.categorySelected}
                  onValueChange={(cat) => this.setState({categorySelected: cat})}>
                  { this.state.categories.map((s,i) => {
                    return <Picker.Item
                      key = {i}
                      value={s._id}
                      label={s.name} 
                      />
                    }) }
                  </Picker>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Text style={{fontSize:15}}>Monthly expense</Text>
                </Col>
                <Col>
                  <Switch
                    onValueChange={(value) => this.setState({monthly: value})}
                    onTintColor="#00ff00"
                    thumbTintColor="#0000ff"
                    tintColor="#ff0000"
                    style={{marginBottom: 10}}
                    value={this.state.monthly} />

                  </Col>
                </Row>
              </Grid>
              <Button block rounded danger style={{marginTop:20}} onPress={this.showDelete.bind(this)}> Delete </Button>

            </Content>
          </Container>

    )
  }


}


module.exports = EditFixed;
