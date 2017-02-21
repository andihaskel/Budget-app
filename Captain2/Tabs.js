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
import Style from './Styles';
import IconTabBar from './IconTabBar';
import { TabViewAnimated, TabBar } from 'react-native-tab-view';


class TabsComponent extends Component {
	constructor(props) {
		super(props);
		this.renderButton = this.renderButton.bind(this);
		UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
		this.state={isVisibleHome:true,
			isVisibleObj: false,
			index: 1,
			routes: [
				{ key: '0', icon:'trophy' },
				{ key: '1', icon:'home' },
				{ key: '2', icon:'pie-chart'},
			],
		}
	}

	//ACA EMPIEZA LO NUEVO
	_handleChangeTab = (index) => {
		const CustomLayoutLinear = {
			duration: 100,
			update: { type: LayoutAnimation.Types.linear, property: LayoutAnimation.Properties.opacity },
			delete: { type: LayoutAnimation.Types.linear, property: LayoutAnimation.Properties.opacity }
		}
		LayoutAnimation.configureNext(CustomLayoutLinear);
		console.log('Afuera del swith Tabs');
		switch (index) {
			case 0:
			this.setState({index: index, isVisibleObj: true, isVisibleHome:false});
			break;
			case 1:
			this.setState({index: index, isVisibleObj: false, isVisibleHome:true});
			break;
			default:
			this.setState({index: index, isVisibleObj: false, isVisibleHome:false});

		}
	};

	_renderIcon = ({ route }: any) => {
		return (
			<Icon
				name={route.icon}
				size={24}
				color='white'/>
			);
		};

		_renderHeader = (props) => {
			return <TabBar {...props} renderIcon={this._renderIcon} />;
		};

		_renderScene = ({ route }) => {
			switch (route.key) {
				case '0':
				return 	<Objectives navigator={this.props.navigator} tabLabel='trophy' />;
				case '1':
				return 	<Home navigator={this.props.navigator} tabLabel='home' />;
				case '2':
				return <Stats tabLabel='pie-chart' />;
				default:
				return null;
			}
		};

		//ACA TERMINA LO NUEVO

		addExpense() {
			this.props.navigator.push({id:'addExpense'});
		}
		addIncome() {
			this.props.navigator.push({id:'addIncome'});
		}
		addObjective() {
			this.props.navigator.push({id:'addObjective'});
		}

		componentWillMount() {
			if(this.props.initialPage !== null){
				this.setState({index:this.props.initialPage});
			}
		}

		renderButton() {
			console.log('Render button');
			if (this.state.isVisibleHome) {
				return (<ActionButton  buttonColor="#2BB0FF" bgColor='rgba(50,50,50,0.8)' icon={<Icon name="pencil" style={styles.actionButtonIcon} />}>
				<ActionButton.Item buttonColor='#C51428' title="Add expense" onPress={this.addExpense.bind(this)}>
					<Icon name="usd" style={styles.actionButtonIcon} />
				</ActionButton.Item>
				<ActionButton.Item buttonColor='#00CF5F' title="Add income" onPress={this.addIncome.bind(this)}>
					<Icon name="usd" style={styles.actionButtonIcon} />
				</ActionButton.Item>
			</ActionButton>)

		} else if (this.state.isVisibleObj) {
			return (<ActionButton buttonColor="#ADFF2F" bgColor='rgba(50,50,50,0.8)' icon={<Icon name="trophy" style={styles.actionButtonIcon} />}
			onPress={this.addObjective.bind(this)}>
		</ActionButton>)

	}
	return null;
}

render() {
	return (
		<View style={styles.container}>
			<Header noShadow={true}>
				<Button block transparent onPress={this.props.openDrawer}>
					<Icon name='bars' size={30} />
				</Button>
				<Title>Aplication</Title>
			</Header>
			<TabViewAnimated
				style={styles.container}
				navigationState={this.state}
				renderScene={this._renderScene}
				renderHeader={this._renderHeader}
				onRequestChangeTab={this._handleChangeTab}
			/>
			{this.renderButton.call()}
		</View>
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
		height: Style.DEVICE_HEIGHT,
		shadowOffset: {height: 0, width: 0},
		shadowOpacity: 0,
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
		color: 'white'
	}
});
module.exports = TabsComponent;
