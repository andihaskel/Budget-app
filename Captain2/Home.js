import React, {Component} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native'
import { AnimatedCircularProgress } from 'react-native-circular-progress';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
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
});

class Home extends Component {

	render() {

		return(
			<View style={styles.container}>
			<AnimatedCircularProgress
			size={200}
			width={30}
			fill={70}
			tintColor="#00e0ff"
			backgroundColor="#3d5875">
			</AnimatedCircularProgress>
			<Button title='Add Income' />
			<Button title='Add Expense' />
			</View>
			)
	}
}




module.exports = Home;