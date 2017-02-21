import React, { Component } from 'react';
import {
  View,
} from 'react-native';
import Realm from 'realm';
import { Container, Content, Tab, Tabs, TabHeading, Icon, Text, Header, Button, Title } from 'native-base';
import Home from './Home';
import Stats from './Stats';
import Objectives from './Objectives';


class PruebaRealm extends Component {
  render() {
    return (
      <Container>
        <Header hasTabs />
        <Tabs>
          <Tab heading="Tab1">
            <Objectives navigator={this.props.navigator} />
          </Tab>
          <Tab heading={ <TabHeading><Icon name="apps" /></TabHeading>}>
            <Home navigator={this.props.navigator} />
          </Tab>
          <Tab heading="Tab3">
            <Stats />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

module.exports = PruebaRealm;
