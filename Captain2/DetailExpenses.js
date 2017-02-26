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
import Icon from 'react-native-vector-icons/FontAwesome';


const incomes = [{detail:'Sueldo', value:'20000'}];
const expenses = [{detail:'Comida', value:'500'}];

class DetailExpenses extends Component {
	constructor(props) {
		super(props);
		this.editFixed = this.editFixed.bind(this);
		this.state = {incomes:[], expenses: []};
	}

	editFixed(item){
		this.props.navigator.push({id: 'editFixed', data: item._id, previousWindow:'fixed'});
	}

	componentWillMount() {
	var incomes= [];
	var expenses = [];

	var userId = '';
	let realm = new Realm({
			schema: [{name: 'User', properties: {name: 'string', id: 'string'}}]
		});
		if(realm.objects('User').length>0){
			userId = realm.objects('User')[0].id;
		}

	fetch('http://10.0.2.2:3000/'+ userId+'/payments/fixedPayments')
    .then((response) => response.json())
    .then((responseData) => {

      responseData.map((obj,i) => {
      		if(obj.isIncome){
      			incomes.push(obj);
      		} else {
      			expenses.push(obj);
      		}
      });
      this.setState({incomes: incomes, expenses: expenses});



    })
    .catch(function(err) {
      console.log('Fetch Error', err);
    });
	}

	render() {
		return(
			<View>
				<Header>
          <Button block transparent onPress={this.props.openDrawer}>
            <Icon name='bars' size={30} />
          </Button>
          <Title>Fixed</Title>
        </Header>
					<List dataArray={this.state.incomes}
						renderRow={(item) =>
							<ListItem button  onPress={() => {this.editFixed(item)}}>
								<Text>{item.name}</Text>
								<Text>{item.amount}</Text>
							</ListItem>
						}
						renderHeader={() =>
							<ListItem itemDivider>
								<Text style={{fontSize:25}}>Monthly Incomes</Text>
							</ListItem>
						}
						>
						</List>
						<List dataArray={this.state.expenses}
							renderRow={(item) =>
								<ListItem button onPress={() => {this.editFixed(item)}}>
									<Text>{item.name}</Text>
									<Text>{item.amount}</Text>
								</ListItem>
							}
							renderHeader={() =>
								<ListItem itemDivider>
									<Text style={{fontSize:25}}>Monthly Expenses</Text>
								</ListItem>
							}
							>

							</List>
					</View>
				);
			}
		}

		module.exports = DetailExpenses;
