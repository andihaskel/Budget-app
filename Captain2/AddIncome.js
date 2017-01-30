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
    this.addIncome = this.addIncome.bind(this);
    this.goBack = this.goBack.bind(this);
    this.componentWillMount = this.componentWillMount.bind(this);
    this.state={price: '', description: '', category: [], categorySelected: {}, coin: 'shk'}
  }

  componentWillMount() {
       fetch('http://10.0.2.2:3000/categories')
       .then((response) => response.json())
       .then((responseData) => {

            this.setState({category: responseData});

      })
      .catch(function(err) {  
         console.log('Fetch Error', err);  

      });



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
   
   console.log('esto!!!!', this.state.category)
 
  return (
    <View>
    <NavigationBar
    title={{title:'Add income', }}
    leftButton={leftButtonConfig}
    />
    <Picker
    selectedValue={this.state.coin}
    onValueChange={(coinVal) => this.setState({coin: coinVal})}>
    <Picker.Item label="Currency" value="shk" />
    <Picker.Item label="Dolar" value="dol" />
    </Picker>
  
    <Picker
    selectedValue={this.state.category[0]}
    onValueChange={(cat) => this.setState({categorySelected: cat})}>
    
    { this.state.category.map((s,i) => {
                        return <PickerItem
                                 key = {i}
                                 value={s}
                                 label={s.name} /> 
                                }) }

 
    </Picker>
    <TextInput  placeholder='Detail' highlightColor={'#00BCD4'} onChangeText={(text) => this.setState({description: text})} />
    <TextInput keyboardType='phone-pad' placeholder='Price' highlightColor={'#00BCD4'} onChangeText={(num) => this.setState({price: num})} />
    <Button title='Agregar' onPress={this.addIncome} />
    </View>
    )
}


}


module.exports = AddIncome;
