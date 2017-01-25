import React, { Component } from 'react';
import {
  Container,
  Content,
  Button,
  Fab,
  List,
  ListItem,
  Title,
  H1
} from 'native-base';
import {
  StyleSheet,
  Text
} from 'react-native'
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
  points: {
    fontFamily: 'Helvetica',
    backgroundColor: 'transparent',
    position: 'absolute',
    top: 70,
    left: 50,
    width: 90,
    textAlign: 'center',
    color: '#7591af',
    fontSize: 35,
    fontWeight: "100"
  },
  container: {
    flex: 1,
    height: 270,
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
  actionButtonIcon: {
    fontSize: 30,
    height: 30,
    color: 'white',
  }
});

class Page1 extends Component {
  constructor(props) {
    super(props)
  }



  render() {
    return (
      <Container>
        <Content>
          <List>
            <ListItem>
              <H1>Ahorrar $1000</H1>
              <Text>Progreso = 50 </Text>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}

module.exports = Page1;
