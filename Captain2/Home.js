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
		this.state = {fill:70, excomes: []}
		this.editFixed = this.editFixed.bind(this);
	}
	imprimir() {
		console.log('Hola');
	}
	editFixed(item){
		this.props.navigator.push({id: 'editFixed', data: item.value});
	}

	 componentWillMount() {
       console.log("entro");
       fetch('http://10.0.2.2:3000/payments/lastMonthPayments')
       .then((response) => response.json())
       .then((responseData) => {
            this.setState({excomes: responseData});
			console.log("as",responseData);

      })
      .catch(function(err) {  
         console.log('Fetch Error', err);  

      });


      
  }

	render() {
		var items = [{name: 'Simon Mignolet', price: 200},{name: 'Simon Mignolet', price: 5000},{name: 'Carlos Mignolet', price: 55},{name: 'Simon Mignolet', price: 200},{name: 'Simon Mignolet', price: 200},{name: 'Simon Mignolet', price: 200},{name: 'Simon Mignolet', price: 200},{name: 'Simon Mignolet', price: 200},{name: 'Simon Mignolet', price: 200},{name: 'Simon Mignolet', price: 200},];
		console.log(this.state.excomes);
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

							<List dataArray={this.state.excomes}
						<ScrollView style={{height:300}}>
							<List dataArray={items}
								renderRow={(item) =>
									<ListItem button  onPress={() => {this.editFixed(item)}}>
										<Thumbnail size={40} source={require('./cutlery.png')} />
										<Text>{excome.name}</Text>
										<Text note>{excome.amount}</Text>
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
