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
} from 'react-native';

import BotonAndi from './BotonAndi';
import Dialogo from './Dialogo';
import Page1 from './Page1';
import Page2 from './Page2';
import ScrollableTabView, {DefaultTabBar, } from 'react-native-scrollable-tab-view';

export default class Captain2 extends Component {

  render() {

    return (
     <ScrollableTabView>
     <Text tabLabel='Tab #1'>My</Text>
     <Text tabLabel='Tab #2 word word'>favorite</Text>
     <Text tabLabel='Tab #3 word word word'>project</Text>
     <Text tabLabel='Tab #4 word word word word'>favorite</Text>
     <Text tabLabel='Tab #5'>project</Text>
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
