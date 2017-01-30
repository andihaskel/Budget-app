import React, {Component} from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  Picker,
  PickerItem,
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
    this.state={price: '0', category: [], categorySelected: {}, coin: 'shk'};
  }
  sendExpense() {
    fetch("http://10.0.2.2:3000/categories",
    {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({name: ''})
})
.then(console.log('bien'))
.then(function(res){ console.log(res) })
.catch(function(res){ console.log(res) })



    this.props.navigator.pop();
  }
  goBack() {
    this.props.navigator.pop();
  }

  componentWillMount() {
       fetch('http://10.0.2.2:3000/categories')
       .then((response) => response.json())
       .then((responseData) => {
            console.log(responseData);
            this.setState({category: responseData});

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
        <TextInput placeholder='Price' keyboardType='phone-pad' highlightColor={'#00BCD4'} onChangeText={(price) => this.setState({price})}/>
        <Picker
           selectedValue={this.state.category[0]}
           onValueChange={(cat) => this.setState({categorySelected: cat})}>
    
          { this.state.category.map((s,i) => {
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
