import React, {Component} from 'react';
import {
  View,
  Text,
  Button,
  Navigator,
  TextInput,
  Picker,
  PickerItem,
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
    console.log('constructor')
    this.addIncome = this.addIncome.bind(this);
    this.goBack = this.goBack.bind(this);
    this.state={amount: 0, name:'', categories: [], categorySelected: {}, coin: 'shk'}
  }


  addIncome(){
    if(this.state.name == ''){
      ToastAndroid.show('Must ingress name', ToastAndroid.SHORT);
    }else if(this.state.amount == 0){
      ToastAndroid.show('Must ingress price', ToastAndroid.SHORT);
    }else{
       var income ={
        name: this.state.name,
        amount: this.state.amount,
        categoryId: this.state.categorySelected._id,
        isIncome: true
      }

      fetch("http://10.0.2.2:3000/5891e76d1f3d5d7aefb2e830/payment",
     {
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify(income)

     });
      ToastAndroid.show('Correctly ingressed', ToastAndroid.SHORT);
      this.props.navigator.pop();
    }
  }


  goBack() {
    this.props.navigator.pop();
  }


  componentWillMount() {
      console.log('wil mount')
       fetch('http://10.0.2.2:3000/categories')
        .then((response) => response.json())
        .then((responseData) => {
            this.setState({categories: responseData});
            console.log(responseData);
            this.setState({categorySelected: this.state.categories[0]})


      })
      .catch(function(err) {  
         console.log('Fetch Error', err);  

      });
    }

  render() {
    console.log('render');
   var leftButtonConfig = {
    title: 'Back',
    handler: this.goBack
  }


  // var categories = [{name: 'General'}, {name: 'Comida'}, {name: 'Bebida'}];

  return (
    <View>
    <NavigationBar
    title={{title:'Add income', }}
    leftButton={leftButtonConfig}
    />

    <Picker
    selectedValue={this.state.categories[0]}
    onValueChange={(cat) => this.setState({categorySelected: cat})}>

    { this.state.categories.map((s,i) => {
      console.log('i:', i);
                        return <PickerItem
                                 key = {i}
                                 value={s}
                                 label={s.name} />
                                }) }


    </Picker>
    <TextInput  placeholder='Name' highlightColor={'#00BCD4'} onChangeText={(text) => this.setState({name: text})} />
    <TextInput keyboardType='phone-pad' placeholder='Price' highlightColor={'#00BCD4'} onChangeText={(num) => this.setState({amount: num})} />
    <Button title='Agregar' onPress={this.addIncome} />
    </View>
    )
}


}


module.exports = AddIncome;
