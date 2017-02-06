import React, { Component } from 'react';
import { AppRegistry,
	Text,
	View,
	Form,
	TouchableHighlight,
	ScrollView,
	DrawerLayoutAndroid,
	StyleSheet,
	ToolbarAndroid,
	LayoutAnimation,
	UIManager
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import DetailExpenses from './DetailExpenses';
import Home from './Home';
import ActionButton from 'react-native-action-button';
import Objectives from './Objectives';
import {
	Header,
	Title,
	Button
} from 'native-base'
import Stats from './Stats';
import Dimensions from 'Dimensions';



class TabsComponent extends Component {
	constructor(props) {
		super(props);
		this.changeTab = this.changeTab.bind(this);
		UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
		this.state={isVisibleHome:false, isVisibleObj: true}
	}

	addExpense() {
		this.props.navigator.push({id:'addExpense'});
	}
	addIncome() {
		this.props.navigator.push({id:'addIncome'});
	}
	addObjective() {
		this.props.navigator.push({id:'addObjective'});
		console.log('Width:  ' + Dimensions.get('window').width);
		console.log('height:  ' + Dimensions.get('window').height);

	}

	changeTab(obj) {
		const CustomLayoutLinear = {
			duration: 300,
			//create: { type: LayoutAnimation.Types.linear, property: LayoutAnimation.Properties.opacity },
			update: { type: LayoutAnimation.Types.linear, property: LayoutAnimation.Properties.opacity },
			delete: { type: LayoutAnimation.Types.linear, property: LayoutAnimation.Properties.opacity }
		}
		LayoutAnimation.configureNext(CustomLayoutLinear);
		if(obj.i === 0){
			this.setState({isVisibleHome:false, isVisibleObj: true})
		}
		if(obj.i === 1){
			this.setState({isVisibleHome:true, isVisibleObj: false})
		}
		if(obj.i === 2){
			this.setState({isVisibleHome:false, isVisibleObj: false})
		}
	}


	render() {
		return (
			<ScrollView>
				<Header>
					<Button block transparent onPress={this.props.openDrawer}>
						<Icon name='bars' size={30} />
					</Button>
					<Title>Aplicacion</Title>
				</Header>
				{this.state.isVisibleHome ?
					(<ActionButton  buttonColor="#2BB0FF" bgColor='rgba(50,50,50,0.8)' icon={<Icon name="pencil" style={styles.actionButtonIcon} />}>
					<ActionButton.Item buttonColor='#C51428' title="Add expense" onPress={this.addExpense.bind(this)}>
						<Icon name="usd" style={styles.actionButtonIcon} />
					</ActionButton.Item>
					<ActionButton.Item buttonColor='#00CF5F' title="Add income" onPress={this.addIncome.bind(this)}>
						<Icon name="usd" style={styles.actionButtonIcon} />
					</ActionButton.Item>
				</ActionButton>) :
				(this.state.isVisibleObj ? (<ActionButton buttonColor="#ADFF2F" bgColor='rgba(50,50,50,0.8)' icon={<Icon name="trophy" style={styles.actionButtonIcon} />}
				onPress={this.addObjective.bind(this)}>
			</ActionButton>) :
			(<ActionButton buttonColor="#ADFF2F" bgColor='rgba(50,50,50,0.8)' icon={<Icon name="trophy" style={styles.actionButtonIcon} />}
			onPress={this.addObjective.bind(this)}>
		</ActionButton>))
		}
		<View style={{zIndex:-1}}>
			<ScrollableTabView onChangeTab={this.changeTab} >
				<ScrollView tabLabel='Objectives'>
					<Objectives navigator={this.props.navigator} />
				</ScrollView>
				<ScrollView tabLabel='home'>
					<Home navigator={this.props.navigator} />
				</ScrollView>
				<ScrollView tabLabel='Fijos'>
					<Stats />
				</ScrollView>
			</ScrollableTabView>
		</View>
	</ScrollView>
);
}
}


const styles = StyleSheet.create({
	points: {
		backgroundColor: 'transparent',
		position: 'absolute',
		top: 90,
		left: 170,
		textAlign: 'center',
		color: '#7591af',
		fontSize: 30
	},
	container: {
		flex: 1,
		height: 270,
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
module.exports = TabsComponent;
