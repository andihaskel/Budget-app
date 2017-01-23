import React, {Component} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native'
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import AddExpense from './AddExpense';
const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
		paddingTop: 20,
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
});

class Home extends Component {
	constructor(props) {
		super(props);
		this.imprimir = this.imprimir.bind(this);
	}
	imprimir() {
		console.log('Hola');
	}
	addExpense() {
		this.props.navigator.push({id:'addExpense'});
	}
	addIncome() {
		this.props.navigator.push({id:'addIncome'});
	}
	render() {
		return(
			<View style={styles.container}>
			<Text style={styles.welcome}>Budget</Text>
			<AnimatedCircularProgress
			size={200}
			width={10}
			fill={70}
			tintColor="#00e0ff"
			rotation={0}
			linecap='round'
			backgroundColor="#3d5875">
			</AnimatedCircularProgress>
			<Button title='Add Expense' onPress={this.addExpense.bind(this)} />
			<Button title='Add Income' onPress={this.addIncome.bind(this)} />
			<Button title='Prueba' onPress={this.imprimir} />
			</View>
			)

	}
}




module.exports = Home;