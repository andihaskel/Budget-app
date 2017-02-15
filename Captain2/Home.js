import React, {Component} from 'react';
import {
	View,
	StyleSheet,
	ScrollView,
	Text
} from 'react-native'
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
	List,
	ListItem,
	Thumbnail
} from 'native-base'
import Style from './Styles';
import { Col, Row, Grid } from "react-native-easy-grid";


const styles = StyleSheet.create({
	pointsView: {
		backgroundColor: 'transparent',
		position: 'absolute',
		top: Style.TEXT_POINTS,
		alignItems: 'center',
		width: Style.DEVICE_WIDTH
	},
	points: {
		color: '#7591af',
		fontSize: Style.TEXT_POINTS_SIZE,
	},
	container: {
		height: Style.VIEW_HEIGHT,
		alignItems: 'center'
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
	textImportado: {
		fontSize: Style.FONT_SIZE,
		textAlign: 'center',
		margin: 10,
	}
});

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {fill: 0, monthlyPayments:[]}
		this.editFixed = this.editFixed.bind(this);

	}

	editFixed(item){
		this.props.navigator.push({id: 'editFixed', data: item._id});
	}


	componentWillMount() {
		//Esta linea hace el reverse de la lista

		fetch('http://10.0.2.2:3000/5891e76d1f3d5d7aefb2e830/payments/monthlyPayments')
		.then((response) => response.json())
		.then((responseData) => {
			this.setState({monthlyPayments: responseData.reverse()});
		})
		.catch(function(err) {
			console.log('Fetch Error', err);

		});

		fetch('http://10.0.2.2:3000/5891e76d1f3d5d7aefb2e830/payments/balance')
		.then((response) => response.json())
		.then((responseData) => {
			this.setState({fill: responseData.fill, balance: responseData.balance});
		})
		.catch(function(err) {
			console.log('Fetch Error', err);

		});


	}

	render() {
		console.log(this.state.monthlyPayments);
		return(
			<View style={styles.container}>
				<Text style={styles.textImportado}>Budget</Text>
				<AnimatedCircularProgress
					size={Style.CIRCLE_SIZE}
					width={7}
					fill={this.state.fill}
					tintColor="#00e0ff"
					rotation={0}
					linecap='round'
					backgroundColor="#3d5875">
				</AnimatedCircularProgress>

				<View style={styles.pointsView}>
					<Text style={styles.points}>{'$' + this.state.balance}</Text>
				</View>



					<List dataArray={this.state.monthlyPayments}
						style={{width:Style.DEVICE_WIDTH, marginTop:10}}
						renderRow={(item) =>
							<ListItem button onPress={() => {this.editFixed(item)}}>
								<View style={{flex:1, flexDirection:'row', justifyContent:'space-between'}}>
									<Grid>
										<Row>
											<Col style={{width:50}}>
												<Thumbnail size={Style.THUMBNAIL_SIZE} source={require('./cutlery.png')} />
											</Col>
											<Col style={{width:Style.TEXTLIST_WIDTH, paddingLeft:10, paddingRight:10}}>
												<Text style={{fontSize:20}}>{item.name}</Text>
											</Col>
											<Col style={{width:60}}>
												<Text style={{fontSize:15}}>{'$' + item.amount}</Text>
											</Col>
											<Col style={{width:40}}>
												{item.isIncome ?
													<Icon  size={30} name="angle-double-up"  color='rgb(20,255,20)'/>
													:<Icon size={30} name="angle-double-down"  color='rgb(255,0,0)'/>
												}
											</Col>
										</Row>
									</Grid>
								</View>
							</ListItem>
						}>
					</List>
			</View>
		)


	}

}





module.exports = Home;
