import React, {Component} from 'react';
import {
	View,
	Text,
	StyleSheet,
} from 'react-native';
import {
	Container,
	Content,
	Button,
	Tabs,
	Header,
	Title,
	List,
	ListItem,
	Badge
} from 'native-base';
import details from './demoData';
import Icon from 'react-native-vector-icons/FontAwesome';


const incomes = [{detail:'Sueldo', value:'20000'}];
const expenses = [{detail:'Comida', value:'500'}];

class DetailExpenses extends Component {
	constructor(props) {
		super(props);
		this.editFixed = this.editFixed.bind(this);
	}

	editFixed(item){
		this.props.navigator.push({id: 'editFixed', data: item.value});
	}

	render() {
		console.log('Render de Details');
		return(
			<View>
					<List dataArray={incomes}
						renderRow={(item) =>
							<ListItem button  onPress={() => {this.editFixed(item)}}>
								<Text>{item.detail}</Text>
								<Text>{item.value}</Text>
							</ListItem>
						}
						renderHeader={() =>
							<ListItem itemDivider>
								<Text>Incomes</Text>
							</ListItem>
						}
						>
						</List>
						<List dataArray={expenses}
							renderRow={(item) =>
								<ListItem button onPress={() => {this.editFixed(item)}}>
									<Text>{item.detail}</Text>
									<Text>{item.value}</Text>
								</ListItem>
							}
							renderHeader={() =>
								<ListItem itemDivider>
									<Text>Expenses</Text>
								</ListItem>
							}
							>

							</List>
					</View>
				);
			}
		}

		module.exports = DetailExpenses;
