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
  View
} from 'react-native';
import Dialogo from './Dialogo';
import BotonAndi from './BotonAndi';

export default class Captain2 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Dialogo nombre='Gabi' apellido='Bursztein' />
         <BotonAndi />
      </View>
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
