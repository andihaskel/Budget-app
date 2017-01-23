import React, { Component } from 'react';
import {
  Container,
  Content,
  Button } from 'native-base';
  import Icon from 'react-native-vector-icons/FontAwesome';
  class Page1 extends Component {
    render() {
      return (
        <Container>
          <Content>
            <Button small primary> Primary </Button>
            <Icon name="rocket" size={30} color="#900" />
            <Button success> Success </Button>

            <Button large info> Info </Button>
          </Content>
        </Container>
      );
    }
  }

  module.exports = Page1;
