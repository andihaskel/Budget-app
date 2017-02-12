import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  Picker,
  PickerItem,
  ToastAndroid,
  ToolbarAndroid,
  Switch
} from 'react-native'
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import TextField from 'react-native-md-textinput';
import NavigationBar from 'react-native-navbar';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  Button,
  FooterTab,
  Footer,
  Badge,
  Container,
  Content,
  Item
} from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";





class AddExpense extends Component {
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
    this.state={name: '', amount: 0, categories: [{name:'General'}, {name:'Comida'}, {name:'Bebida'}], categorySelected: {}, coin: 'shk', monthly: false};
  }
  sendExpense() {
    if(this.state.name == ''){
      ToastAndroid.show('Must ingress name', ToastAndroid.SHORT);
    }else if(this.state.amount == 0){
      ToastAndroid.show('Must ingress price', ToastAndroid.SHORT);
    }else{
      var expense ={
        name: this.state.name,
        amount: this.state.amount,
        categoryId: this.state.categorySelected._id,
        isIncome: false
      }

      fetch("http://10.0.2.2:3000/5891e76d1f3d5d7aefb2e830/payment",
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(expense)

      });
      ToastAndroid.show('Correctly ingressed', ToastAndroid.SHORT);
      this.props.navigator.pop();
    }

  }
  goBack() {
    this.props.navigator.pop();
  }

  componentWillMount() {

    fetch('http://10.0.2.2:3000/categories')
    .then((response) => response.json())
    .then((responseData) => {
      this.setState({categories: responseData});
      this.setState({categorySelected: this.state.categories[0]})


    })
    .catch(function(err) {
      console.log('Fetch Error', err);

    });
  }



  render() {
    var leftButtonConfig = {
      title: 'Back',
      handler: this.goBack
    }
    var rightButtonConfig = {
      title: 'Save',
      handler: this.addIncome
    }

    return (
      <Container>
        <Content style={{padding:10}}>
          <NavigationBar
            title={{title:'Add expense'}}
            leftButton={leftButtonConfig}
            rightButton={rightButtonConfig}
          />
          <Grid>
            <Row>
              <TextInput autoFocus={true} style={{width:Style.DEVICE_WIDTH, fontSize:20}}  placeholder='Title' highlightColor={'#00BCD4'} onChangeText={(text) => this.setState({name: text})} />
            </Row>

            <Row style={{alignItems: 'center'}}>
              <Col size={1}>
                <Text style={{fontSize:30, marginVertical:10}}>$</Text>
              </Col>
              <Col size={6}>
                <TextInput style={{width:(Style.DEVICE_WIDTH/5), fontSize:20, height:50}} keyboardType='phone-pad' placeholder='Price' highlightColor={'#00BCD4'} onChangeText={(amount) => this.setState({amount: amount})} />
              </Col>
              <Col size={17}>
                <Picker
                  mode='dropdown'
                  selectedValue={this.state.categorySelected}
                  onValueChange={(cat) => this.setState({categorySelected: cat})}>
                  { this.state.categories.map((s,i) => {
                    return <Picker.Item
                      key = {i}
                      value={s}
                      label={s.name} />
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
            </Content>
          </Container>
        )
      }

    }


    module.exports = AddExpense;
