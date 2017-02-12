import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  Picker,
  ToolbarAndroid,
  Switch
} from 'react-native'
import {
  Container,
  Content,
  Button,
  Tabs,
  Header,
  Title,
  List,
  ListItem,
  Badge,
  H1,
  H2
} from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";

import TextField from 'react-native-md-textinput';
import NavigationBar from 'react-native-navbar';
import Icon from 'react-native-vector-icons/FontAwesome';

class EditFixed extends Component {
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
    this.editFixed = this.editFixed.bind(this);
    this.state = {edit: false, price: '0',  categories: [{name:'General'}, {name:'Comida'}, {name:'Bebida'}], categorySelected: 'General', object:{title:'Enlatados', price:'250', categorySelected:'Comida', monthly:true}};
  }
  goBack() {
    this.props.navigator.pop();
  }
  editFixed() {
    this.setState({edit: !this.state.edit})
  }
  render() {
    var fixed = {name: 'Salary', amount: '12000', income:  false};
    var leftButtonConfig = {
      title: 'Back',
      handler: this.goBack,
    };
    var rightButtonConfig = {
      title: 'Save',
      handler: this.editFixed
    }
    return (
      <Container>
        <Content style={{padding:10}}>
          <NavigationBar
            title={{title:'Add expense'}}
            leftButton={leftButtonConfig}
            rightButton={rightButtonConfig}
          />
          <Grid>
            <Row>
              <TextInput style={{width:Style.DEVICE_WIDTH, fontSize:20}} value={this.state.object.title} placeholder='Title' highlightColor={'#00BCD4'} onChangeText={(text) => this.setState({name: text})} />
            </Row>

            <Row style={{alignItems: 'center'}}>
              <Col size={1}>
                <Text style={{fontSize:30, marginVertical:10}}>$</Text>
              </Col>
              <Col size={6}>
                <TextInput value={this.state.object.price}  style={{fontSize:20, height:50}} keyboardType='phone-pad' placeholder='Price' highlightColor={'#00BCD4'} onChangeText={(amount) => this.setState({amount: amount})} />
              </Col>
              <Col size={17}>
                <Picker
                  mode='dropdown'
                  selectedValue={this.state.object.categorySelected}
                  onValueChange={(cat) => this.setState({categorySelected: cat})}>
                  { this.state.categories.map((s,i) => {
                    return <Picker.Item
                      key = {i}
                      value={s.name}
                      label={s.name} />
                    }) }
                  </Picker>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Text style={{fontSize:15}}>Monthly expense</Text>
                </Col>
                <Col>
                  <Switch
                    onValueChange={(value) => this.setState({monthly: value})}
                    onTintColor="#00ff00"
                    thumbTintColor="#0000ff"
                    tintColor="#ff0000"
                    style={{marginBottom: 10}}
                    value={this.state.object.monthly} />

                  </Col>
                </Row>
              </Grid>
            </Content>
          </Container>

    )
  }


}


module.exports = EditFixed;
