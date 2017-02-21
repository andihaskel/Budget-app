import React, { Component } from 'react';
import { AppRegistry,
	Text,
	TextInput,
	View,
	Form,
	TouchableHighlight,
	StyleSheet,
	ToastAndroid,
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
		this.state = {email: '', password: '', name: ''};
	}
	
	createUser() {
	if(this.state.name == ''){
      ToastAndroid.show('Must ingress name', ToastAndroid.SHORT);
    }else if(this.state.password == ''){
    	console.log('entra pass')
      ToastAndroid.show('Must ingress password', ToastAndroid.SHORT);
    }else if (this.state.email == ''){
      ToastAndroid.show('Must ingress email', ToastAndroid.SHORT);
    }else {
     var User = {
			userName: this.state.name,
			password: this.state.password,
			email: this.state.email
		}

		fetch("http://10.0.2.2:3000/user/newUser",
		{
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			method: "POST",
			body: JSON.stringify(User)
		});
      ToastAndroid.show('Correctly ingressed', ToastAndroid.SHORT);
      this.props.navigator.immediatelyResetRouteStack([{id:'login'}]);
  }
}

	goBack() {
		this.props.navigator.pop();
	}
	render () {
		console.log('Render de login');
		return  (

			<Image style={{ flex: 1, width: null, height: null}} source={require('./FirstPageImage.jpg')}>
			<NavigationBar
				tintColor='rgba(255,255,255,0.2)'
				title={{title:'Login'}}
				leftButton={<Icon.Button name="chevron-left" backgroundColor='transparent' color='#000' onPress={this.goBack}/>}
			/>
			<Container style={{alignItems:'center'}}>
				<Content style={{width:Style.DEVICE_WIDTH, padding:40}}>
					<TextField
						label={'Name'}
						labelColor={'#FFF'}
						textColor={'#FFF'}
						highlightColor={'#00BCD4'}
						onChangeText={(name) => this.state.name = name}
						inputStyle={{fontSize:20, height:50}}
					/>
					<TextField
						label={'Email'}
						labelColor={'#FFF'}
						textColor={'#FFF'}
						highlightColor={'#00BCD4'}
						onChangeText={(email) => this.state.email = email}
						inputStyle={{fontSize:20, height:50}}
					/>
					<TextField
						label={'Password'}
						labelColor={'#FFF'}
						textColor={'#FFF'}
						highlightColor={'#00BCD4'}
						onChangeText={(pass) => this.state.password = pass}
						secureTextEntry={true}
						inputStyle={{fontSize:20, height:50}}
					/>
					<Button  block success onPress={this.createUser.bind(this)} style={{marginTop:40, borderRadius:15}}>
						<Text style={{fontSize:20, color:'#FFF'}}>Sign in</Text>
					</Button>
				</Content>
			</Container>
		</Image>
	);
}
}
module.exports = Login;
