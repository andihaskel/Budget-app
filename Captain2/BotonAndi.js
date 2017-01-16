import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Button,
  Alert,
  View
} from 'react-native';

class BotonAndi extends Component {
  onPressLearnMore() {
  		Alert.alert('Button has been pressed!');
  }

  render() {
  	return (
  		<Button
          title= "Click Here"
          onPress = {this.onPressLearnMore}
      />

  		);


  }
}
module.exports = BotonAndi;

