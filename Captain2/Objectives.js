import React, { Component } from 'react';
import {
  Container,
  Content,
  Button,
  Fab,
  List,
  ListItem,
  Title,
  H2,
  Card,
  CardItem,
  Thumbnail
} from 'native-base';
import {
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native'
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Progress from 'react-native-progress';
import EffectsView from 'react-native-effects-view';


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

class Objectives extends Component {
  constructor(props) {
    super(props)
  }



  render() {
    return (
      <Container>
        <Content alignItems='center'>
          <Card style={{width:380}}>
            <CardItem cardBody>

              <View style={{flex: 1, flexDirection: 'row'}}>
                <View style={{width: 80}}>
                  <Thumbnail cardBody source={require('./badge.png')}  size={100} style={{alignItems:'center'}} />
                </View>
                <View style={{width: 280, marginTop:20, marginRight:50 ,alignItems:'center'}}>
                  <H2 style={{marginBottom:20}}>
                    Comprarme un auto {'\n'}
                  </H2>
                  <Progress.Bar progress={0.3} width={209} height={8} />
                </View>
              </View>

            </CardItem>


            <CardItem style={{alignItems:'center'}}>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <View style={{width: 130}}>
                  <Text  style={{fontSize:18}}>42% {'\n'}founded</Text>
                </View>
                <View style={{width: 130}}>
                  <Text  style={{fontSize:18}}>$327 {'\n'}pledged</Text>
                </View>
                <View style={{width: 130}}>
                  <Text style={{fontSize:18}}> 32{'\n'}days to go</Text>
                </View>
              </View>
            </CardItem>
          </Card>

            <Card style={{width:380}}>
              <CardItem cardBody>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <View style={{width: 80}}>
                    <Thumbnail cardBody source={require('./badge.png')}  size={100} style={{alignItems:'center'}} />
                  </View>
                  <View style={{width: 280, marginTop:20, marginRight:50 ,alignItems:'center'}}>
                    <H2 style={{marginBottom:20}}>
                      Ahorrar $10000 {'\n'}
                    </H2>
                    <Progress.Bar color='#00CF5F' progress={1} width={209} height={8} />
                  </View>
                </View>
              </CardItem>
              <CardItem style={{alignItems:'center'}}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <View style={{width: 130}}>
                    <Text  style={{fontSize:18}}>100% {'\n'}founded</Text>
                  </View>
                  <View style={{width: 130}}>
                    <Text  style={{fontSize:18}}>$10000 {'\n'}pledged</Text>
                  </View>
                  <View style={{width: 130}}>
                    <Text style={{fontSize:18}}> 0{'\n'}days to go</Text>
                  </View>
                </View>
              </CardItem>
            </Card>
        </Content>
      </Container>
    );
  }
}

module.exports = Objectives;
