import React, { Component } from 'react';
import { AppRegistry,
	Button,
	Text,
	View,
	Form,
	TouchableHighlight,
	ScrollView
} from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import DetailExpenses from './DetailExpenses';
import Home from './Home';
import Page1 from './Page1';

class Tabs extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<ScrollableTabView >
			<ScrollView tabLabel='Datos'>
			<Home navigator={this.props.navigator} />
			</ScrollView>
			<ScrollView tabLabel='Home'>
			<DetailExpenses navigator={navigator}/>
			</ScrollView>
			<ScrollView tabLabel='Cuenta'>
			</ScrollView>
			</ScrollableTabView>
			);
	}
}

module.exports = Tabs;
