import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  Picker,
  PickerItem,
  ToolbarAndroid
} from 'react-native'
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import TextField from 'react-native-md-textinput';
import NavigationBar from 'react-native-navbar';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  Header,
  Title,
  Button
} from 'native-base';

class Configuration extends Component {
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
    this.state={price: '0', category: [], categorySelected: {}, coin: 'shk'};
  }
  sendExpense() {
    this.props.navigator.pop();
  }
  goBack() {
    this.props.navigator.pop();
  }


  render() {
    var leftButtonConfig = {
      title: 'Back',
      handler: this.goBack,
    }
    return (
      <View>
        <Header>
					<Button block transparent onPress={this.props.openDrawer}>
						<Icon name='bars' size={30} />
					</Button>
					<Title>Configuration</Title>
				</Header>


      </View>
    )
  }


}


module.exports = Configuration;
