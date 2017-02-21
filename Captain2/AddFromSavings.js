import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  Picker,
  ToolbarAndroid,
  ToastAndroid,
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
    this.goBack = this.goBack.bind(this);
    this.state={savings: 5, value:0, objective: {}, savingsAccount: {}, maximumValue: 0};
  }
  goBack() {
    this.props.navigator.pop();
  }

  addMoneyFromSavings(){

    fetch("http://10.0.2.2:3000/" + this.state.objective._id + "/addMoney",
    {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "PUT",
      body: JSON.stringify({
        savings: this.state.savingsAccount._id,
        amountForObjective: this.state.value,
      })

    });
    ToastAndroid.show('Correctly ingressed', ToastAndroid.SHORT);
    this.props.navigator.immediatelyResetRouteStack([{id:'tabs', initialPage:0}]);
  }

  componentWillMount() {
    fetch('http://10.0.2.2:3000/' + this.props.item)
    .then((response) => response.json())
    .then((responseData) => {
      this.setState({objective: responseData});


      fetch('http://10.0.2.2:3000/' + this.state.objective.userId + '/savings')
      .then((response) =>  response.json())
      .then((responseData) => {
        this.setState({savingsAccount: responseData});
        this.setState({savings: this.state.savingsAccount.balance});


        if((this.state.objective.amountToSave - this.state.objective.currentAmount) > this.state.savings){
          this.setState({maximumValue: this.state.savings});

        } else{
          this.setState({maximumValue: this.state.objective.amountToSave - this.state.objective.currentAmount});
        }


      })
      .catch(function(err) {
        console.log('Fetch Error', err);
      });


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
          title={{title:'Add from savings'}}
          leftButton={leftButtonConfig}
        />
        <View style={{alignItems:'center', padding:10}}>
          <Text style={{fontSize:30}}>
            {this.state.objective.name}
          </Text>
          <Slider
            maximumValue={this.state.maximumValue}
            style={{width:300}}
            onValueChange={(value) => this.setState({value: Math.round(value)})} />
            <Text style={{fontSize:25}}>{'$' + this.state.value}</Text>
            <Button block onPress={this.addMoneyFromSavings.bind(this)}  style={{marginTop:40, margin:20, borderRadius:15}}>
  						<Text style={{fontSize:20, color:'#FFF'}}>Add</Text>
  					</Button>
          </View>
        </View>
      )
    }


  }


  module.exports = AddFromSavings;
