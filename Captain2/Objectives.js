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
    this.props.navigator.getCurrentRoutes(0).map((s) => console.log(s.id));
    this.onActionSelected = this.onActionSelected.bind(this);
    this.deleteObjective = this.deleteObjective.bind(this);
    this.state={objectives:[], show: false, itemSelected: {}};
  }

  onActionSelected(position, item) {
    this.setState({itemSelected: item});
    if(position === 0){
      this.props.navigator.push({id:'addFromSavings', data: item._id})
    }else {
      Alert.alert(
        'Delete objective',
        'Are you sure?',
        [
          {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
          {text: 'OK', onPress: () => this.deleteObjective()},
        ]
      )
    }
  }

  deleteObjective(item) {
    return fetch('http://10.0.2.2:3000/objective/' + this.state.itemSelected._id, {
      method: 'delete'
    }).then(response =>
      response.json().then(json => {
        return json;
      })
    );
  }

  componentWillMount() {
    fetch('http://10.0.2.2:3000/5891e76d1f3d5d7aefb2e830/objectives')
    .then((response) => response.json())
    .then((responseData) => {
      this.setState({objectives: responseData.reverse(), show: true});

    })
    .catch(function(err) {
      console.log('Fetch Error', err);
    });
  }

  render() {
    var date = new Date();
    return (
      <ScrollView alignItems='center'>
        <List width={Style.DEVICE_WIDTH} dataArray={this.state.objectives}
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
                          onActionSelected={(position) => {  this.onActionSelected(position,item) }}>
                          <View>
                            <Text style={{fontSize:Style.CARD_TOOLBAR_FONT_SIZE}}>{item.name}</Text>
                          </View>
                        </ToolbarAndroid>
                      </Row>
                      <Row>
                        <View style={{alignItems:'center'}}>
                          <Progress.Bar progress={item.currentAmount /item.amountToSave} width={Style.CARD_PROGRESS_WIDTH} height={8} />
                        </View>
                      </Row>
                    </Col>
                  </Grid>
                </CardItem>

                <CardItem style={{alignItems:'center'}}>
                  <Grid>
                    <Col>
                      <Text  style={{fontSize:Style.CARD_FONT_SIZE}}>{(Math.ceil((item.currentAmount * 100)/item.amountToSave)) + '%'} {'\n'}founded</Text>
                    </Col>
                    <Col>
                      <Text  style={{fontSize:Style.CARD_FONT_SIZE}}>{'$' + item.currentAmount} {'\n'}pledged</Text>
                    </Col>
                    <Col>
                      <Text style={{fontSize:Style.CARD_FONT_SIZE}}> {parseInt((Date.parse(item.dateToAchive) - date)/86400000)} {'\n'}days to go</Text>
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
