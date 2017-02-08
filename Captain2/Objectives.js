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
  container: {
    flex: 1,
    height: 270,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

});

class Objectives extends Component {
  constructor(props) {
    super(props);
    this.onActionSelected = this.onActionSelected.bind(this);
  }

  onActionSelected(position, item) {
    if(position === 0){
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
    console.log('Card toolbar width: ' + Style.CARD_TOOLBAR_WIDTH);
console.log('Card progess width: ' + Style.CARD_PROGRESS_WIDTH);
    var objectives = [{name:'Comprarme una impresora', price:1000, pledged:300, days:48},{name:'Comprarme un auto', price:90000, pledged:8000, days:12},{name:'Comprarme una impresora', price:1000, pledged:300, days:48}]
    return (
      <ScrollView alignItems='center'>
        <List width={Style.DEVICE_WIDTH} dataArray={objectives}
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
                          style={{height: 50, width: Style.CARD_TOOLBAR_WIDTH}}
                          actions={[{title: 'Add from savings', show: 'never'}, {title: 'Delete', show: 'never'}]}
                          onActionSelected={(position) => { this.onActionSelected(position,item) }}>
                          <View>
                            <Text style={{fontSize:Style.CARD_TOOLBAR_FONT_SIZE}}>{item.name}</Text>
                          </View>
                        </ToolbarAndroid>
                      </Row>
                      <Row>
                        <View style={{alignItems:'center'}}>
                          <Progress.Bar progress={item.pledged /item.price} width={Style.CARD_PROGRESS_WIDTH} height={8} />
                        </View>
                      </Row>
                    </Col>
                  </Grid>
                </CardItem>

                <CardItem style={{alignItems:'center'}}>
                  <Grid>
                    <Col>
                      <Text  style={{fontSize:Style.CARD_FONT_SIZE}}>{(Math.ceil((item.pledged * 100)/item.price)) + '%'} {'\n'}founded</Text>
                    </Col>
                    <Col>
                      <Text  style={{fontSize:Style.CARD_FONT_SIZE}}>{'$' + item.pledged} {'\n'}pledged</Text>
                    </Col>
                    <Col>
                      <Text style={{fontSize:Style.CARD_FONT_SIZE}}>{item.days} {'\n'}days to go</Text>
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
