import React, { Component } from 'react';
import { AppRegistry,
	Button,
	Text,
	View,
	Form,
	TouchableHighlight,
} from 'react-native';
class Login extends Component {

	render () {
		console.log('Render de login');
		return  (
			<View style={styles.container}>
			<Form
			ref="form"
			type={Person}
			options={options}
			/>
			<TouchableHighlight style={styles.button} onPress={this.onPress} underlayColor='#99d9f4'>
			<Text></Text>
			</TouchableHighlight>
			<Button title= "login" onPress = {this.setUserData}/>
			</View>
			);	}
	}
	module.exports = Login;
