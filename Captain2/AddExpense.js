import React, {Component} from 'react';
import {
  View, 
  Text,
  Button,
  TextInput,
  Picker,
  ToolbarAndroid
} from 'react-native'
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import TextField from 'react-native-md-textinput';
import NavigationBar from 'react-native-navbar';

class AddExpense extends Component {
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
    this.state={price: '0', category: 'General', coin: 'shk'};
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
    handler: this.goBack
  }
  return (
    <View>
    <NavigationBar
    title={{title:'Add expense'}}
    leftButton={leftButtonConfig}
    />
    <Picker
    selectedValue={this.state.category}
    onValueChange={(cat) => this.setState({category: cat})}>
    <Picker.Item label="Shekel" value="sjk" />
    <Picker.Item label="Dolar" value="dol" />
    </Picker>
    <TextInput placeholder='Price' keyboardType='phone-pad' highlightColor={'#00BCD4'} onChangeText={(price) => this.setState({price})}/>
    <Picker
    selectedValue={this.state.category}
    onValueChange={(cat) => this.setState({category: cat})}>
    <Picker.Item label="General" value="General" />
    <Picker.Item label="Comida" value="Comida" />
    </Picker>
    <Button title='Add' onPress={this.sendExpense.bind(this)} />
    </View>
    )
}


}


module.exports = AddExpense;


