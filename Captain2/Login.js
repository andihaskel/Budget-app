import React, { Component } from 'react';
import { AppRegistry,
	Text,
	TextInput,
	View,
	Form,
	TouchableOpacity,
	StyleSheet,
	Image,
	ToastAndroid
} from 'react-native';
import {
	Container,
	Content,
	Button
} from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome';
import Style from './Styles';
import { Col, Row, Grid } from "react-native-easy-grid";
import TextField from 'react-native-md-textinput';

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

class FirstPage extends Component {
	constructor (props) {
		super(props);
		this.input={email:'', password:''};
	}

	signUp() {
		this.props.navigator.push({id:'signUp'});
	}
	login() {
		let realm = new Realm({
			schema: [{name: 'User', properties: {name: 'string', id: 'string'}}]
		});
		if(this.input.email == 'gabi' && this.input.password == 'gabi') {
			realm.write(() => {
	      realm.create('User', {name: 'Gabriel', id:'589af71dd65dfe0b102b164e'});
	    });
			this.props.navigator.push({id:'tabs', initialPage:1});
		}else{
			ToastAndroid.show('Incorrect email or password', ToastAndroid.SHORT);
		}
	}

	render () {
		return  (
			<Image style={{flex: 1, width: null, height: null}} source={require('./FirstPageImage.jpg')}>
			<Container style={{alignItems:'center'}}>
				<Content>
					<View style={{marginTop:Style.MARGIN_TOP_LOGIN}}>
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
							secureTextEntry={true}
							onChangeText={(pass) => this.input.password = pass}
							inputStyle={{fontSize:20, height:45}}
						/>
					</View>
					<View style={{marginTop:20}}>
						<Icon.Button width={Style.LOGIN_WIDTH} name="envelope-o" borderRadius={15} size={30} paddingLeft={20} backgroundColor="#3F7874" onPress={this.login.bind(this)}>
							<Text style={{fontSize:20, color:'#FFF', paddingLeft:20}}>Log in</Text>
						</Icon.Button>
					</View>
					<Grid>
						<Row style={{alignItems:'center', height:40}}>
							<Col style={{width:170}}>
								<Text style={{fontSize:15, color:'#FFF', textAlign:'center'}}>Dont have an account?</Text>
							</Col>
							<Col>
								<TouchableOpacity  onPress={this.signUp.bind(this)}>
									<Text style={{fontSize:15, fontWeight:'bold', color:'#FFF'}}>Sign Up</Text>
								</TouchableOpacity>
							</Col>
						</Row>
					</Grid>
					<View style={{marginTop:20, alignItems:'center'}}>
						<Text style={{fontSize:25, color:'#FFF'}}>Or</Text>
					</View>
					<View style={{marginTop:20}}>
						<Icon.Button width={Style.LOGIN_WIDTH} name="facebook" borderRadius={15} size={30} paddingLeft={20} backgroundColor="#3b5998" onPress={() => console.log('Prueba')}>
							<Text style={{fontSize:20, color:'#FFF', paddingLeft:20}}>Login with Facebook</Text>
						</Icon.Button>
					</View>
				</Content>
			</Container>
		</Image>
	);
}
}








module.exports = FirstPage;
