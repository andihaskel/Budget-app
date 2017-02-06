import React, { Component } from 'react';
import {
  List,
  ListItem,
  Title,
  H2,
  Card,
  CardItem,
  Thumbnail,
  Button
} from 'native-base';
import {
  StyleSheet,
  Text,
  Image,
  View,
  ScrollView,
  Alert,
  ToolbarAndroid,
} from 'react-native'
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Progress from 'react-native-progress';
import { Col, Row, Grid } from "react-native-easy-grid";


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
    super(props);
    this.onActionSelected = this.onActionSelected.bind(this);
  }

  onActionSelected(position, item) {
    console.log('entro a actionSelected');
    console.log('Position: ' + position);
    if(position === 0){
      console.log('Voy a mandar el item');
      this.props.navigator.push({id:'addFromSavings', data: item.name})
    }else {
      Alert.alert(
        'Delete objective',
      'Are you sure?',
        [
          {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ]
      )
    }
  }

  render() {
    var objectives = [{name:'Comprarme una impresora', price:1000, pledged:300, days:48},{name:'Comprarme un auto', price:90000, pledged:8000, days:12}]
    return (
      <ScrollView alignItems='center' height={550} >
        <List width={411} dataArray={objectives}
          renderRow={(item) =>
            <ListItem >
              <Card>
                <CardItem>
                  <Grid>
                    <Col style={{width: 60, alignItems:'center'}}>
                      <Thumbnail cardBody source={require('./badge.png')}  size={100} style={{alignItems:'center'}} />
                    </Col>
                    <Col style={{alignItems:'center'}}>
                      <Row>
                          <ToolbarAndroid
                            style={{height: 50, width: 300}}
                            contentInsetEnd={22}
                            title={item.name}
                            actions={[{title: 'Add from savings', show: 'never'}, {title: 'Delete', show: 'never'}]}
                            onActionSelected={(position) => { this.onActionSelected(position,item) }} />
                        </Row>
                        <Row>
                          <View style={{width: 260, alignItems:'center'}}>
                            <Progress.Bar progress={item.pledged /item.price} width={209} height={8} />
                          </View>
                        </Row>
                      </Col>
                    </Grid>
                  </CardItem>

                  <CardItem style={{alignItems:'center'}}>
                    <Grid>
                      <Col>
                        <Text  style={{fontSize:18}}>{(Math.ceil((item.pledged * 100)/item.price)) + '%'} {'\n'}founded</Text>
                      </Col>
                      <Col>
                        <Text  style={{fontSize:18}}>{'$' + item.pledged} {'\n'}pledged</Text>
                      </Col>
                      <Col>
                        <Text style={{fontSize:18}}>{item.days} {'\n'}days to go</Text>
                      </Col>
                    </Grid>

                  </CardItem>
                </Card>
              </ListItem>
            }>
          </List>
        </ScrollView>
      );
    }
  }

  module.exports = Objectives;
