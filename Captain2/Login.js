import React, { Component } from 'react';
import { AppRegistry, Button, Text, View } from 'react-native';
class Login extends Component {
	
	render () {
		
		return <Button title = {this.props.title} onPress = {this.props.handleClickLogin}/>  
	}
}
module.exports = Login;