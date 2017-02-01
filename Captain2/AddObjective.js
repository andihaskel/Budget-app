import React, {Component} from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  Picker,
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
    this.state={price: '0',  coin: 'shk', title: '', perMonth: '0', achivedIn: this.calculateDate};
  }
  sendExpense() {
    this.props.navigator.pop();
  }
  goBack() {
    this.props.navigator.pop();
  }

  calculateDate() {
    console.log('entro a calculateDate');
    var ret = '0 month';
    if(this.state.price !== '0' && this.state.perMonth !== '0'){
      var aux = parseInt(this.state.price) / parseInt(this.state.perMonth);
      console.log(aux);
      ret = aux + ' month';
    }
    return ret;
  }
  render() {25
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
        <TextInput placeholder='Title' highlightColor={'#00BCD4'} onChangeText={(text) => this.setState({title: text})}/>
        <Picker
          selectedValue='dol'
          onValueChange={(cat) => {}}>
          <Picker.Item label="Shekel" value="shk" />
          <Picker.Item label="Dolar" value="dol" />
        </Picker>
        <TextInput placeholder='Amount to save' keyboardType='phone-pad' highlightColor={'#00BCD4'} onChangeText={(price) => this.setState({price})}/>
        <TextInput placeholder='Save per month' keyboardType='phone-pad' highlightColor={'#00BCD4'} onChangeText={(perMonth) => this.setState({perMonth})}/>

        <H1>Achived in {this.state.price !== '0' && this.state.perMonth !== '0'
          && this.state.price && this.state.perMonth && !isNaN(this.state.price) && !isNaN(this.state.perMonth)
          ? (Math.ceil((parseInt(this.state.price) / parseInt(this.state.perMonth))) + ' month') : '0 month' } </H1>
          <Button title='Add' onPress={this.sendExpense.bind(this)} />
        </View>
      )
    }


  }


  module.exports = AddObjective;
