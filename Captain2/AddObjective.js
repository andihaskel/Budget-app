import React, {Component} from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  Picker,
  ToastAndroid,
  StyleSheet,
  PickerItem
} from 'react-native'
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import TextField from 'react-native-md-textinput';
import NavigationBar from 'react-native-navbar';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  H1,
  Container,
  Content
} from 'native-base'
import { Col, Row, Grid } from "react-native-easy-grid";


const styles = StyleSheet.create({
  description: {
    fontWeight:'normal',
    fontStyle:'italic',
    fontSize:16,
    textAlign:'left',
    fontFamily:'arial'
  }
});


class AddObjective extends Component {
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
    this.calculateDate = this.calculateDate.bind(this);
    this.state={price: 0, currentAmount: 0, isAchived:false, coin: 'shk', name: '', savePerMonth: 0, achivedIn: this.calculateDate}
  }

  goBack() {
    this.props.navigator.pop();
  }

  calculateDate() {
    var ret = 0;
    if(this.state.price !== '0' && this.state.savePerMonth !== '0'){
      var aux = parseInt(this.state.price) / parseInt(this.state.savePerMonth);
      ret = aux;
    }
    return ret;
  }


  sendExpense() {
    if(this.state.name == ''){
      ToastAndroid.show('Must ingress title', ToastAndroid.SHORT);
    }else
    if(this.state.price == 0){
      ToastAndroid.show('Must ingress price', ToastAndroid.SHORT);
    }
    else{
      console.log(this.state.achivedIn);
      var objective ={
        name: this.state.name,
        amountToSavePerMonth: this.state.savePerMonth,
        amountToSave: this.state.price,
        currentAmount: this.state.currentAmount,
        isAchived: this.state.isAchived,
        achiveIn: this.state.achivedIn,

      }

      fetch("http://10.0.2.2:3000/589af71dd65dfe0b102b164e/objective",
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(objective)

      });
      ToastAndroid.show('Correctly ingressed', ToastAndroid.SHORT);
      this.props.navigator.immediatelyResetRouteStack([{id:'tabs', initialPage:0}]);
    }
  }

  render() {
    var leftButtonConfig = {
      title: 'Back',
      handler: this.goBack,
    }
    var rightButtonConfig = {
      title: 'Save',
      handler: this.sendExpense.bind(this)
    }
    return (
      <Container>
        <Content>
          <NavigationBar
            title={{title:'Add expense'}}
            leftButton={leftButtonConfig}
            rightButton={rightButtonConfig}
          />
          <Grid style={{padding:10}}>
            <Row>
              <TextInput autoFocus={true} style={{width:Style.DEVICE_WIDTH, fontSize:20}}  placeholder='Title' highlightColor={'#00BCD4'} onChangeText={(text) => this.setState({name: text})} />
            </Row>

            <Row style={{alignItems: 'center'}}>
              <Col size={1}>
                <Text style={{fontSize:30, marginVertical:10}}>$</Text>
              </Col>
              <Col size={9}>
                <TextInput style={{width:(Style.DEVICE_WIDTH/4), fontSize:20, height:50}} keyboardType='phone-pad' placeholder='Total' highlightColor={'#00BCD4'} onChangeText={(num) => this.setState({price: num})} />
              </Col>
              <Col size={1}>
                <Text style={{fontSize:30, marginVertical:10}}>$</Text>
              </Col>
              <Col size={9}>
                <TextInput style={{width:(Style.DEVICE_WIDTH/3), fontSize:20, height:50}} keyboardType='phone-pad' placeholder='Per month' highlightColor={'#00BCD4'} onChangeText={(num) => this.setState({savePerMonth: num})} />
              </Col>
            </Row>

            <Row style={{alignItems:'center'}}>
              <Col>
                <H1>Achived in {this.state.price !== '0' && this.state.savePerMonth !== '0'
                  && this.state.price && this.state.savePerMonth && !isNaN(this.state.price) && !isNaN(this.state.savePerMonth)
                  ? (Math.ceil((parseInt(this.state.price) / parseInt(this.state.savePerMonth))) + ' month') : '0 month' } </H1>
                </Col>
              </Row>
            </Grid>
          </Content>
        </Container>
      )
    }


  }


  module.exports = AddObjective;
