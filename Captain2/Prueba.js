import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { TabViewAnimated, TabBar } from 'react-native-tab-view';
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  page: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default class Prueba extends Component {
  state = {
    index: 0,
    routes: [
      { key: '1', icon:'trophy' },
      { key: '2', icon:'home' },
    ],
  };



  _handleChangeTab = (index) => {
    console.log('Handle changeTab');
    this.setState({ index });
  };

  _renderIcon = ({ route }: any) => {
    return (
      <Icon
        name={route.icon}
        size={24}
        color='white'/>
      );
    };

    _renderHeader = (props) => {
      console.log('RenderHeader');
      return <TabBar {...props} renderIcon={this._renderIcon} />;
    };

    _renderScene = ({ route }) => {
      console.log('Render scene');
      switch (route.key) {
        case '1':
        return <View style={[ styles.page, { backgroundColor: '#ff4081' } ]} />;
        case '2':
        return <View style={[ styles.page, { backgroundColor: '#673ab7' } ]} />;
        default:
        return null;
      }
    };

    render() {
      console.log('En render ');
      return (
        <TabViewAnimated
          style={styles.container}
          navigationState={this.state}
          renderScene={this._renderScene}
          renderHeader={this._renderHeader}
          onRequestChangeTab={this._handleChangeTab}
        />
      );
    }
  }
