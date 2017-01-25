import React, {Component} from 'react';
import {
	View,
	Text,
	Button,
	StyleSheet,
	ListView
} from 'react-native';
import details from './demoData';

class DetailExpenses extends Component {
	constructor(props) {
		super(props);
		const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		this.state = {
			dataSource: ds.cloneWithRows(details)
		};
	}
	render() {
		return(
			<View style={{flex: 1, paddingTop: 22, zIndex:-1}}>
			<ListView
			dataSource={this.state.dataSource}
			renderRow={(rowData) => { return(
				<Text>{rowData.amount}</Text>
				)}}
			renderSeparator={(sectionID: number, rowID: number, adjacentRowHighlighted: bool) => {return (
				<View
				key={`${sectionID}-${rowID}`}
				style={{
					height: adjacentRowHighlighted ? 4 : 1,
					backgroundColor: adjacentRowHighlighted ? '#3B5998' : '#CCCCCC',
				}}
				/>
				);}}
			/>
			</View>
			);
	}
}

module.exports = DetailExpenses;
