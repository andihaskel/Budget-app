import React, { Component } from 'react';
import { AppRegistry,
	Button,
	Text,
	TextInput,
	View,
	Form,
	TouchableHighlight,
	StyleSheet
} from 'react-native';


const styles = StyleSheet.create({
	pointsView: {
		backgroundColor: 'transparent',
		position: 'absolute',
		top: Style.TEXT_POINTS,
		alignItems: 'center',
		width: Style.DEVICE_WIDTH
	},
	points: {
		color: '#7591af',
		fontSize: Style.TEXT_POINTS_SIZE,
	},
	container: {
		height: Style.VIEW_HEIGHT,
		alignItems: 'center'
	},
	TextInput: {
		width: 100
	}

});

class Login extends Component {
	constructor (props) {
		super(props);

		this.state={name: '', password: ''};

	}

	login() {
		var User = {
		   userName: this.state.name,
           password: this.state.password
		}
	   
	   fetch("http://10.0.2.2:3000/login",
       {
       headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json'
       },
       method: "POST",
       body: JSON.stringify(User)
     });






	}


	render () {
		console.log('Render de login');

		return  (

			<View>

			<TextInput  placeholder='userName' highlightColor={'#00BCD4'} onChangeText={(text) => this.setState({name: text})} />
 		    <TextInput  placeholder='Price' secureTextEntry={true} highlightColor={'#00BCD4'} onChangeText={(pas) => this.setState({password: pas})} /> 

			<TouchableHighlight onPress={this.onPress} underlayColor='#99d9f4'>
			<Text></Text>
			</TouchableHighlight>
			<Button title= "login" onPress = {this.login.bind(this)}/>
			</View>
			);	}
	}
	module.exports = Login;
