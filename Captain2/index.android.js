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
  Button
} from 'react-native';

import BotonAndi from './BotonAndi';
import Dialogo from './Dialogo';
import Page1 from './Page1';
import Page2 from './Page2';
import ScrollableTabView, {DefaultTabBar, } from 'react-native-scrollable-tab-view';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import Home from './Home';
import AddExpense from './AddExpense';

export default class Captain2 extends Component {
  constructor() {
    super();
    this.state = {expenses: []}
  }
  
  render() {
    return (
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
     );
  }
}


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
});





AppRegistry.registerComponent('Captain2', () => Captain2);
