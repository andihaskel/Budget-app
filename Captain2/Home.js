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
import Dimensions from 'Dimensions';
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
		this.state = {fill:70};
		this.editFixed = this.editFixed.bind(this);
		console.log('Widht: ' + Style.DEVICE_WIDTH);
		console.log('Height: ' + Style.DEVICE_HEIGHT);
		console.log('CIRCLE_SIZE: ' + Style.CIRCLE_SIZE);
		console.log('VIEW_HEIGHT: ' + Style.VIEW_HEIGHT);
		console.log('TEXT_POINTS: ' + Style.TEXT_POINTS);
	}

	editFixed(item){
		this.props.navigator.push({id: 'editFixed', data: item.value});
	}

	render() {
		var items = [{name: 'Gasto', price: 200, income: false},{name: 'Simon Mignolet', price: 5000, income: true},{name: 'Carlos Mignolet', price: 55, income: false},{name: 'Simon Mignolet', price: 200, income: false},{name: 'Simon Mignolet', price: 200, income: false},{name: 'Simon Mignolet', price: 200, income: false},{name: 'Simon Mignolet', price: 200, income: false},{name: 'Simon Mignolet', price: 200, income: true},{name: 'Simon Mignolet', price: 200, income: false},{name: 'Simon Mignolet', price: 200, income: false},];
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
					backgroundColor="#3d5875" />

					<View style={styles.pointsView}>
						<Text style={styles.points}>{'$' + (this.state.fill * 100)}</Text>
					</View>
				<ScrollView style={{width:Style.DEVICE_WIDTH, marginTop:10}}>
					<List dataArray={items}
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
												<Text style={{fontSize:15}}>{'$' + item.price}</Text>
											</Col>
											<Col style={{width:40}}>
												{item.income ?
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
				</ScrollView>
			</View>
		)

	}
}




module.exports = Home;
