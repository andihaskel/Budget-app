import React, {Component} from 'react';
import {
	View,
	StyleSheet,
	ScrollView,
	ListView,
	Text
} from 'react-native'
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import AddExpense from './AddExpense';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
	Button,
	List,
	ListItem,
	Thumbnail
} from 'native-base'

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

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {fill:70};
		this.editFixed = this.editFixed.bind(this);
	}
	componentWillMount() {
	}
	componentDidMount() {
	}
	editFixed(item){
		this.props.navigator.push({id: 'editFixed', data: item.value});
	}



	render() {
		var items = [{name: 'Simon Mignolet', price: 200},{name: 'Simon Mignolet', price: 5000},{name: 'Carlos Mignolet', price: 55},{name: 'Simon Mignolet', price: 200},{name: 'Simon Mignolet', price: 200},{name: 'Simon Mignolet', price: 200},{name: 'Simon Mignolet', price: 200},{name: 'Simon Mignolet', price: 200},{name: 'Simon Mignolet', price: 200},{name: 'Simon Mignolet', price: 200},];
		return(
			<View style={{alignItems:'center', height:500}}>
				<Text style={styles.welcome}>Budget</Text>
				<AnimatedCircularProgress
					size={200}
					width={7}
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
				<ScrollView style={{height:300, width:400}}>
					<List dataArray={items}
						renderRow={(item) =>
							<ListItem button onPress={() => {this.editFixed(item)}}>
								<Thumbnail size={35} source={require('./cutlery.png')} />
								<Text>{item.name}</Text>
								<Text>{item.price}</Text>
							</ListItem>
						}>
					</List>
				</ScrollView>
			</View>
		)

	}
}




module.exports = Home;
