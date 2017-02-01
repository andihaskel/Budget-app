import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  Picker,
  ToolbarAndroid,
  Slider
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
  Badge,
  H1
} from 'native-base';
import TextField from 'react-native-md-textinput';
import NavigationBar from 'react-native-navbar';
import Icon from 'react-native-vector-icons/FontAwesome';

class AddFromSavings extends Component {
  constructor(props) {
    super(props);
    console.log('En el constructor de AddFromSavings');
    this.goBack = this.goBack.bind(this);
    this.state={savings: 1000, value:0};
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
          title={{title:'Add from savings'}}
          leftButton={leftButtonConfig}
        />
        <View style={{alignItems:'center', padding:10}}>
          <Text style={{fontSize:30}}>
            {this.props.item}
          </Text>
          <Slider
            maximumValue={this.state.savings}
            style={{width:300}}
            onValueChange={(value) => this.setState({value: Math.round(value)})} />
            <Text style={{fontSize:25}}>{'$' + this.state.value}</Text>
            <Button block> Add </Button>
          </View>
        </View>
      )
    }


  }


  module.exports = AddFromSavings;
