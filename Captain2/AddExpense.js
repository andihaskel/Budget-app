import React, {Component} from 'react';
import {
  View, 
  Text,
  Button,
  Navigator,
  TextInput
} from 'react-native'
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import TextField from 'react-native-md-textinput';

class AddExpense extends Component {
  render() {
    return (
      <View>
      <TextField label={'Detail'} highlightColor={'#00BCD4'} />
      <TextField label={'Price'} highlightColor={'#00BCD4'} />
      <Button title='Agregar' />
      </View>
      )
    }


  }


  module.exports = AddExpense;


