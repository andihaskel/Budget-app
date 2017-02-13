import React, {Component} from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  Picker,
  PickerItem,
  ToastAndroid,
  ToolbarAndroid
} from 'react-native'
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import TextField from 'react-native-md-textinput';
import NavigationBar from 'react-native-navbar';
import Icon from 'react-native-vector-icons/FontAwesome';





class AddExpense extends Component {
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
    this.state={name: '', amount: 0, categories: [], paymentId: '', categorySelected: {}, coin: 'shk'};
  }
  sendExpense() {
    if(this.state.name == ''){
      ToastAndroid.show('Must ingress name', ToastAndroid.SHORT);
    }else if(this.state.amount == 0){
      ToastAndroid.show('Must ingress price', ToastAndroid.SHORT);
    }else{
      var expense ={
        name: this.state.name,
        amount: this.state.amount,
        categoryId: this.state.categorySelected._id,
        isIncome: false

    }

     fetch("http://10.0.2.2:3000/5891e76d1f3d5d7aefb2e830/payment",
    {
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify(expense)

  });
   ToastAndroid.show('Correctly ingressed', ToastAndroid.SHORT);
    this.props.navigator.pop();
}
 
  }
  goBack() {
    this.props.navigator.pop();
  }

   componentWillMount() {

       fetch('http://10.0.2.2:3000/categories')
        .then((response) => response.json())
        .then((responseData) => {
            this.setState({categories: responseData});
            this.setState({categorySelected: this.state.categories[0]})


      })
      .catch(function(err) {  
         console.log('Fetch Error', err);  

      });
    }



  render() {
    var leftButtonConfig = {
      title: 'Back',
      handler: this.goBack,
    }
    return (
      <View>
        <NavigationBar
          title={{title:'Add expense'}}
          leftButton={leftButtonConfig}
        />
        <Picker
          selectedValue='dol'
          onValueChange={(cat) => {}}>
          <Picker.Item label="Shekel" value="shk" />
          <Picker.Item label="Dolar" value="dol" />
        </Picker>
        <TextInput placeholder='Name' keyboardType='phone-pad' highlightColor={'#00BCD4'} onChangeText={(name) => this.setState({name})}/>
        <TextInput placeholder='Amount' keyboardType='phone-pad' highlightColor={'#00BCD4'} onChangeText={(amount) => this.setState({amount})}/>
        <Picker
           selectedValue={this.state.categories[0]}
           onValueChange={(cat) => this.setState({categorySelected: cat})}>

          { this.state.categories.map((s,i) => {
                        return <PickerItem
                                 key = {i}
                                 value={s}
                                 label={s.name} />
                                })}
     </Picker>

        <Button title='Add' onPress={this.sendExpense.bind(this)} />
      </View>
    )
  }


}


module.exports = AddExpense;
