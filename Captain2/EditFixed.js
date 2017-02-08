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
  Badge,
  H1,
  H2
} from 'native-base';
import TextField from 'react-native-md-textinput';
import NavigationBar from 'react-native-navbar';
import Icon from 'react-native-vector-icons/FontAwesome';

class EditFixed extends Component {
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
    this.editFixed = this.editFixed.bind(this);
    this.state = {edit: false, price: '0'};
  }
  goBack() {
    this.props.navigator.pop();
  }
  editFixed() {
    this.setState({edit: !this.state.edit})
  }
  render() {
    var fixed = {name: 'Salary', amount: '12000', income:  false};
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
        {this.state.edit ?
          <View style={{alignItems:'center', margin: 20}}>
            <Text style={{fontSize:40}}>
              {fixed.name}
            </Text>
            <TextInput style={{marginTop:30, fontSize:30, width: 200 ,color: fixed.income ? 'rgb(0,255,0)' : 'rgb(255,0,0)'}} placeholder={fixed.amount} keyboardType='phone-pad' highlightColor={'#00BCD4'} onChangeText={(price) => this.setState({price})}/>
            <Button block warning style={{margin:30}} onPress={this.editFixed}>Done</Button>

          </View>
          :
          <View style={{alignItems:'center', margin: 20}}>
            <Text style={{fontSize:40}}>
              {fixed.name}
            </Text>
            <Text style={{marginTop:30, fontSize:30, color: fixed.income ? 'rgb(0,255,0)' : 'rgb(255,0,0)'}}>{'$' + fixed.amount}</Text>
            <Button block warning style={{margin:30}} onPress={this.editFixed}>Edit</Button>
          </View>
        }
      </View>

    )
  }


}


module.exports = EditFixed;
