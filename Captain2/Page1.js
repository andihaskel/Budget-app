import React, { Component } from 'react';
import {
  Container,
  Content,
  Button } from 'native-base';
class Page1 extends Component {
    render() {
        return (
            <Container>
                <Content>
                    //Small size button
                    <Button small primary> Primary </Button>

                    //Regular size button
                    <Button success> Success </Button>

                    //Large size button
                    <Button large info> Info </Button>
                </Content>
            </Container>
        );
    }
}

module.exports = Page1;
