/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React, { Component } from 'react';
 import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  TouchableHighlight,
  TextInput,
  Alert,
} from 'react-native';

import BotonAndi from './BotonAndi';
import Dialogo from './Dialogo';
import Page1 from './Page1';
import Page2 from './Page2';
import ScrollableTabView, {DefaultTabBar, } from 'react-native-scrollable-tab-view';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import Home from './Home';
import AddExpense from './AddExpense';
import Login from './Login';

var t = require('tcomb-form-native');
var Form = t.form.Form;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  login: {
    position: 'absolute',
    top: 150,
    padding: 100,
    margin: 30,
  }
});
var Person = t.struct({
  username: t.String,        
  password: t.String,        
});
var options = {}; // optional rendering options (see documentation)

export default class Captain2 extends Component {
 constructor() {
  super();
  this.setLogin = this.setLogin.bind(this);
  this.setLogout = this.setLogout.bind(this);
  this.setUserData= this.setUserData.bind(this);
  this.state = {isLogged: false, username: "", password: ""};
}
setLogin() {
  this.setState({ isLogged: true });
}

setLogout() {
  this.setState({ isLogged: false });
}
setUserData() {
  this.setState({ username: Person.username,
    password: Person.password,
    isLogged: true, 
  });
}
render() {
  if(!this.state.isLogged){
    return  (
      <View style={styles.container}>
      <Form
      ref="form"
      type={Person}
      options={options}
      />
      <TouchableHighlight style={styles.button} onPress={this.onPress} underlayColor='#99d9f4'>
      <Text></Text>
      </TouchableHighlight>
      <Button title= "login" onPress = {this.setUserData}/>
      </View>
      );
    }else{
      return(
      <ScrollableTabView>
      <ScrollView tabLabel='Datos'>
      <Home />
      </ScrollView>
      <ScrollView tabLabel='Home'> 
      <AddExpense />
      </ScrollView>
      <ScrollView tabLabel='Cuenta'> 
      </ScrollView>
      </ScrollableTabView>
      )
    }
  }
}






AppRegistry.registerComponent('Captain2', () => Captain2);





