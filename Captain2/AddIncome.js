import React, {Component} from 'react';
import {
  View,
  Text,
  Button,
  Navigator,
  TextInput,
  Picker,
  Alert,
  ToastAndroid,
  ToolbarAndroid,
  TouchableOpacity,
  StyleSheet
} from 'react-native'
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import TextField from 'react-native-md-textinput';
import NavigationBar from 'react-native-navbar';


class AddIncome extends Component {
  constructor(props) {
    super(props);
    this.addIncome = this.addIncome.bind(this);
    this.goBack = this.goBack.bind(this);
    this.state={price: '', description: '', category: 'General', coin: 'shk'}
  }
  addIncome(){
    if(this.state.description === ''){
      ToastAndroid.show('Must ingress detail', ToastAndroid.SHORT);
    }else if(this.state.price === ''){
      ToastAndroid.show('Must ingress price', ToastAndroid.SHORT);
    }else{
      ToastAndroid.show('Correctly ingressed', ToastAndroid.SHORT);
      this.props.navigator.pop();
    }
  }
  goBack() {
    this.props.navigator.pop();
  }

  render() {
   var leftButtonConfig = {
    title: 'Back',
    handler: this.goBack
  }


  var categories = [{name: 'General'}, {name: 'Comida'}, {name: 'Bebida'}];
  return (
    <View>
    <NavigationBar
    title={{title:'Add income', }}
    leftButton={leftButtonConfig}
    />
    <Picker
    selectedValue={this.state.coin}
    onValueChange={(coinVal) => this.setState({coin: coinVal})}>
    <Picker.Item label="Shekel" value="shk" />
    <Picker.Item label="Dolar" value="dol" />
    </Picker>

    <Picker
    selectedValue={this.state.category}
    onValueChange={(cat) => this.setState({category: cat})}>
    <Picker.Item label="General" value="general" />
    <Picker.Item label="Comida" value="comida" />
    </Picker>
    <TextInput  placeholder='Detail' highlightColor={'#00BCD4'} onChangeText={(text) => this.setState({description: text})} />
    <TextInput keyboardType='phone-pad' placeholder='Price' highlightColor={'#00BCD4'} onChangeText={(num) => this.setState({price: num})} />
    <Button title='Agregar' onPress={this.addIncome} />
    </View>
    )
}


}


module.exports = AddIncome;
