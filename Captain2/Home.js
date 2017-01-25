import React, {Component} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native'
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import AddExpense from './AddExpense';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
	Container,
	Header,
	Title,
	Button,
	Content,
	List,
	ListItem,
	Fab,
	Thumbnail,
	Text
} from 'native-base';


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
		this.imprimir = this.imprimir.bind(this);
		this.state = {fill:70}
	}
	imprimir() {
		console.log('Hola');
	}

	render() {
		var items = [{name: 'Simon Mignolet', price: 200},{name: 'Simon Mignolet', price: 5000},{name: 'Carlos Mignolet', price: 55},{name: 'Simon Mignolet', price: 200},{name: 'Simon Mignolet', price: 200},{name: 'Simon Mignolet', price: 200},{name: 'Simon Mignolet', price: 200},{name: 'Simon Mignolet', price: 200},{name: 'Simon Mignolet', price: 200},{name: 'Simon Mignolet', price: 200},];

		return(
			<Container>
				<Content>
					<Text style={styles.welcome}>Budget</Text>
					<AnimatedCircularProgress
						size={200}
						width={7}
						fill={this.state.fill}
						tintColor="#00e0ff"
						rotation={0}
						linecap='round'
						backgroundColor="#3d5875"
						style={{alignItems:'center'}}
						>
						{
							(fill) => (
								<Text style={styles.points}>
									$150
								</Text>
							)
						}
					</AnimatedCircularProgress>


					<ScrollView style={{height:300}}>
							<List dataArray={items}
								renderRow={(item) =>
									<ListItem>
										<Thumbnail size={40} source={require('./cutlery.png')} />
										<Text>{item.name}</Text>
										<Text note>{item.price}</Text>
									</ListItem>
								}>
							</List>
					</ScrollView>
				</Content>

			</Container>
		)

	}
}




module.exports = Home;
