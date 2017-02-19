import React, { Component } from 'react';
import { AppRegistry,
	Text,
	TextInput,
	View,
	Form,
	TouchableHighlight,
	StyleSheet,
	Image
} from 'react-native';
import NavigationBar from 'react-native-navbar';
import {
	Button,
	Container,
	Content
} from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome';
import TextField from 'react-native-md-textinput';
import Style from './Styles';


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
		this.goBack = this.goBack.bind(this);
		this.input = {email: '', password: '', name: ''};
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

	goBack() {
		this.props.navigator.pop();
	}
	render () {
		var rightButtonConfig = {
			title: 'Sign in',
			tintColor: '#000',
			handler: this.login
		}
		return  (

			<Image style={{ flex: 1, width: null, height: null}} source={require('./FirstPageImage.jpg')}>
			{Style.DEVICE_HEIGHT<580 ? (
				<NavigationBar
					tintColor='rgba(255,255,255,0.2)'
					title={{title:'Login'}}
					leftButton={<Icon.Button name="chevron-left" backgroundColor='transparent' color='#000' onPress={this.goBack}/>}
					rightButton={rightButtonConfig}
				/>)
				:(<NavigationBar
					tintColor='rgba(255,255,255,0.2)'
					title={{title:'Login'}}
					leftButton={<Icon.Button name="chevron-left" backgroundColor='transparent' color='#000' onPress={this.goBack}/>}
				/>) }
			<Container style={{alignItems:'center'}}>
				<Content style={{width:Style.DEVICE_WIDTH, paddingLeft:40, paddingRight:40}}>
					<TextField
						label={'Name'}
						labelColor={'#FFF'}
						textColor={'#FFF'}
						highlightColor={'#00BCD4'}
						onChangeText={(name) => this.input.name = name}
						inputStyle={{fontSize:20, height:45}}
					/>
					<TextField
						label={'Email'}
						labelColor={'#FFF'}
						textColor={'#FFF'}
						highlightColor={'#00BCD4'}
						onChangeText={(email) => this.input.email = email}
						inputStyle={{fontSize:20, height:45}}
					/>
					<TextField
						label={'Password'}
						labelColor={'#FFF'}
						textColor={'#FFF'}
						highlightColor={'#00BCD4'}
						onChangeText={(pass) => this.input.email = pass}
						secureTextEntry={true}
						inputStyle={{fontSize:20, height:45}}
					/>
					<Button  block success onPress={this.login.bind(this)} style={{marginTop:40, borderRadius:15}}>
						<Text style={{fontSize:20, color:'#FFF'}}>Sign in</Text>
					</Button>
				</Content>
			</Container>
		</Image>
	);
}
}
module.exports = Login;
