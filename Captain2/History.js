import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  Picker,
  PickerItem,
  ToolbarAndroid,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native'
import {
  Header,
  Title,
  Button,
  List,
  ListItem,
  Thumbnail
} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import Style from './Styles';
import { Col, Row, Grid } from "react-native-easy-grid";



class History extends Component {
  constructor(props){
    super(props);
    this.editFixed = this.editFixed.bind(this);
    this.updateMonth = this.updateMonth.bind(this);
    this.state = {
      months: [{month:'January', year: 2017},{month:'February', year:2017}],
      paymentsHistory: [{name:'Gasto 1', amount: 150}],
      selectedValue: 'January-2017',
    };
  }

  editFixed(item){
    this.props.navigator.push({id: 'editFixed', data: item.value});
  }

  updateMonth(item) {
    console.log('Entra a updateMonth');
    console.log(item);
    this.setState({paymentsHistory: [{name:'Gasto 2', amount: 200, isIncome:true}],
    selectedValue: item});
  }

  render() {
    console.log('En render');
    console.log('Selected value = ' + this.state.selectedValue);
    return (
      <View>
        <Header>
          <Button block transparent onPress={this.props.openDrawer}>
            <Icon name='bars' size={30} />
          </Button>
          <Title>History</Title>
        </Header>
        <Picker
          mode='dropdown'
          style={{height:70}}
          selectedValue={this.state.selectedValue}
          onValueChange={(month) => this.updateMonth(month)}>

          { this.state.months.map((s,i) => {
            return (<Picker.Item
              key = {i}
              value={s.month + '-' + s.year}
              label={s.month + ' ' + s.year} />)
            }) }
          </Picker>
          <ScrollView>
            <List dataArray={this.state.paymentsHistory}
              renderRow= {(item) =>
                <ListItem button onPress={(item) => {this.editFixed(item)}}>
                  <View style={{flex:1, flexDirection:'row', justifyContent:'space-between'}}>
                    <Grid>
                      <Row>
                        <Col style={{width:50}}>
                          <Thumbnail size={Style.THUMBNAIL_SIZE} source={require('./cutlery.png')} />
                        </Col>
                        <Col style={{width:Style.TEXTLIST_WIDTH, paddingLeft:10, paddingRight:10}}>
                          <Text style={{fontSize:20}}>{item.name}</Text>
                        </Col>
                        <Col style={{width:60}}>
                          <Text style={{fontSize:15}}>{'$' + item.amount}</Text>
                        </Col>
                        <Col style={{width:40}}>
                          {item.isIncome ?
                            <Icon  size={30} name="angle-double-up"  color='rgb(20,255,20)'/>
                            :<Icon size={30} name="angle-double-down"  color='rgb(255,0,0)'/>
                          }
                        </Col>
                      </Row>
                    </Grid>
                  </View>
                </ListItem>
              }>
            </List>
          </ScrollView>
        </View>
      )
    }
  }




  module.exports = History;
