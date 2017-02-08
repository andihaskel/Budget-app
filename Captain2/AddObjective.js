import React, {Component} from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  Picker,
  ToastAndroid,
  PickerItem
} from 'react-native'
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import TextField from 'react-native-md-textinput';
import NavigationBar from 'react-native-navbar';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  H1
} from 'native-base'
class AddObjective extends Component {
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
    this.calculateDate = this.calculateDate.bind(this);
    this.state={price: 0 , currentAmount: 0, isAchived:false, coin: 'shk', name: '', savePerMonth: 0, achivedIn: this.calculateDate}
  }

  goBack() {
    this.props.navigator.pop();
  }

  calculateDate() {
    var ret = '0 month';
    if(this.state.price !== '0' && this.state.savePerMonth !== '0'){
      var aux = parseInt(this.state.price) / parseInt(this.state.savePerMonth);
      console.log(aux);
      ret = aux + ' month';
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
       var objective ={
        name: this.state.name,
        amountToSavePerMonth: this.state.savePerMonth,
        amountToSave: this.state.price,
        currentAmount: this.state.currentAmount,
        isAchived: this.state.isAchived,
        dateToAchive: this.state.achivedIn,

      }

      fetch("http://10.0.2.2:3000/5891e76d1f3d5d7aefb2e830/objective",
     {
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify(objective)

     });
      ToastAndroid.show('Correctly ingressed', ToastAndroid.SHORT);
      this.props.updateObj();
      this.props.navigator.pop();
    }
  }

  render() {
    console.log('render add objective');
    var leftButtonConfig = {
      title: 'Back',
      handler: this.goBack,
    }
    return (
      <View>
        <NavigationBar
          title={{title:'Add objective'}}
          leftButton={leftButtonConfig}
        />
        <TextInput placeholder='Title' highlightColor={'#00BCD4'} onChangeText={(name) => this.setState({name})}/>
        <Picker
          selectedValue='dol'
          onValueChange={(cat) => {}}>
          <Picker.Item label="Shekel" value="shk" />
          <Picker.Item label="Dolar" value="dol" />
        </Picker>
        <TextInput placeholder='Total to save' keyboardType='phone-pad' highlightColor={'#00BCD4'} onChangeText={(price) => this.setState({price})}/>
        <TextInput placeholder='Save per month' keyboardType='phone-pad' highlightColor={'#00BCD4'} onChangeText={(savePerMonth) => this.setState({savePerMonth})}/>

        <H1>Achived in {this.state.price !== '0' && this.state.savePerMonth !== '0'
          && this.state.price && this.state.savePerMonth && !isNaN(this.state.price) && !isNaN(this.state.savePerMonth)
          ? (Math.ceil((parseInt(this.state.price) / parseInt(this.state.savePerMonth))) + ' month') : '0 month' } </H1>
          <Button title='Add' onPress={this.sendExpense.bind(this)} />
        </View>
      )
    }


  }


  module.exports = AddObjective;
