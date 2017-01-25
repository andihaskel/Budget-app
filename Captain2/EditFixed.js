import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  Picker,
  ToolbarAndroid
} from 'react-native'
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
import TextField from 'react-native-md-textinput';
import NavigationBar from 'react-native-navbar';
import Icon from 'react-native-vector-icons/FontAwesome';

class EditFixed extends Component {
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
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

        <NavigationBar
          title={{title:'Edit fixed'}}
          leftButton={leftButtonConfig}
        />
        <Text>
          {this.props.item}
        </Text>
      </View>
    )
  }


}


module.exports = EditFixed;
