import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native'
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import AddExpense from './AddExpense';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
	points: {
		fontFamily: 'Helvetica',
		backgroundColor: 'transparent',
		position: 'absolute',
		top: 70,
		left: 50,
		width: 90,
		textAlign: 'center',
		color: '#7591af',
		fontSize: 35,
		fontWeight: "100"
	},
	container: {
		flex: 1,
		height: 600,
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
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
	actionButtonIcon: {
		fontSize: 30,
		height: 30,
		color: 'white',
	}
});

class Home extends Component {
	constructor(props) {
		super(props);
		this.imprimir = this.imprimir.bind(this);
		this.state = {fill:70}
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
					fill={this.state.fill}
					tintColor="#00e0ff"
					rotation={0}
					linecap='round'
					backgroundColor="#3d5875">
					{
						(fill) => (
							<Text style={styles.points}>
								$150
							</Text>
						)
					}
				</AnimatedCircularProgress>
				<ActionButton buttonColor="#2BB0FF" >
					<ActionButton.Item buttonColor='#C51428' title="Add expense" onPress={this.addExpense.bind(this)}>
						<Icon name="usd" style={styles.actionButtonIcon} />
					</ActionButton.Item>
					<ActionButton.Item buttonColor='#00CF5F' title="Add income" onPress={this.addIncome.bind(this)}>
						<Icon name="usd" style={styles.actionButtonIcon} />
					</ActionButton.Item>
				</ActionButton>
			</View>
		)

	}
}




module.exports = Home;
