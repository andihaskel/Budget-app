import React, {Component} from 'react';
import {
  View,
  Text,
  Button,
  Navigator,
  TextInput,
  Picker,
  ListView
} from 'react-native'
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import TextField from 'react-native-md-textinput';


class IncomeList extends Component {

  constructor(props) {
    super(props);

    }



    render() {
      console.log('Render de Income list');
      return (
        <View style={{flex: 1, paddingTop: 22}}>
        <ListView
        dataSource={this.state.dataSource}
        renderRow={(rowData) => <Text>{rowData.description} {rowData.amount}</Text>}
        renderSectionHeader={(sectionData, category) => <Text>{category}</Text>}
        />
        </View>
        );
    }


  }


  module.exports = IncomeList;
