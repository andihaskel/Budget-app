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
import Style from './Styles';


const styles = StyleSheet.create({
	points: {
		backgroundColor: 'transparent',
		position: 'absolute',
		top: 70,
		left: 70,
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
	},
	importado: {
		height: Style.DEVICE_HEIGHT,
	}
});

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {fill:70, randomPayments:[], balance: 0}
		this.editFixed = this.editFixed.bind(this);
	}

	editFixed(item){
		this.props.navigator.push({id: 'editFixed', data: item.value});
	}

	//usuario por defecto
	componentWillMount() {

       fetch('http://10.0.2.2:3000/5891e76d1f3d5d7aefb2e830/payments/randomPayments')
       	.then((response) => response.json())
      	.then((responseData) => {
            this.setState({randomPayments: responseData});
            console.log('ex',this.state.randomPayments[0].name);
            console.log('as', this.state.randomPayments[0].isIncome);

      })
      .catch(function(err) {  
         console.log('Fetch Error', err);  

      });

      fetch('http://10.0.2.2:3000/5891e76d1f3d5d7aefb2e830/payments/balance')
       	.then((response) => response.json())
      	.then((responseData) => {
            this.setState({balance: responseData});

      })
      .catch(function(err) {  
         console.log('Fetch Error', err);  

      });


  }

	render() {
		console.log('total heigth: ' + Style.getViewHeight );
		//var items = [{name: 'Simon Mignolet', price: 200, income: false},{name: 'Simon Mignolet', price: 5000, income: true},{name: 'Carlos Mignolet', price: 55, income: false},{name: 'Simon Mignolet', price: 200, income: false},{name: 'Simon Mignolet', price: 200, income: false},{name: 'Simon Mignolet', price: 200, income: false},{name: 'Simon Mignolet', price: 200, income: false},{name: 'Simon Mignolet', price: 200, income: true},{name: 'Simon Mignolet', price: 200, income: false},{name: 'Simon Mignolet', price: 200, income: false},];
		return(
			<View style={{alignItems:'center', height:553}}>
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
								$ {this.state.balance}
							</Text>
						)
					}
				</AnimatedCircularProgress>
				<ScrollView style={{width:250, marginTop:10}}>
					<List dataArray={this.state.randomPayments}
						renderRow={(payment) =>
							<ListItem button onPress={() => {this.editFixed(payment)}}>
								<View style={{flex:1, flexDirection:'row', justifyContent:'space-between'}}>
								<Thumbnail size={35} source={require('./cutlery.png')} />
								<Text>{payment.name}</Text>
								<Text>{'$' + payment.amount}</Text>
								{payment.isIncome ?
									<Icon  size={30} name="angle-double-up"  color='rgb(20,255,20)'/>
									:<Icon size={30} name="angle-double-down"  color='rgb(255,0,0)'/>
								}
							</View>
							</ListItem>
						}>
					</List>
				</ScrollView>
			</View>
		)
			

		}

	}





module.exports = Home;
