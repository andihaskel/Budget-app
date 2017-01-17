import React, {Component} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native'
import { AnimatedCircularProgress } from 'react-native-circular-progress';

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
	constructor() {
		super();
		this.state= {fill: 70};
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
				<Text>
				{ this.state.fill }
				</Text>
				)
			}
			</AnimatedCircularProgress>
			<View style={styles.container}>
			<Button title='Add Income' />
			<Button title='Add Expense' />
			</View>
			</View>
			)
	}
}




module.exports = Home;