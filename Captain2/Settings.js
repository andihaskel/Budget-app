import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  Picker,
  PickerItem,
  StyleSheet,
  ToolbarAndroid
} from 'react-native'
import TextField from 'react-native-md-textinput';
import NavigationBar from 'react-native-navbar';
import { Col, Row, Grid } from "react-native-easy-grid";
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  Header,
  Title,
  Button,
  Container,
  Content
} from 'native-base';

const styles = StyleSheet.create({

  subtitles: {
    top: 20,
    left: 12,
    margin: 20,
    position: 'absolute',
    backgroundColor: 'transparent',
    alignItems: 'center',
    fontSize: 20
  },
  description: {


  }
});

class Configuration extends Component {
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
    this.edit = this.edit.bind(this);
    this.finishEdition = this.finishEdition.bind(this);
    this.state = {
      edition: false,
      userId: '',
    };
  }

  goBack() {
    this.props.navigator.pop();
  }

  edit() {
    this.setState({edition: true});
  }
  finishEdition() {
    this.setState({edition: false})
  }

  componentWillMount() {
    var userId = '';
    let realm = new Realm({
      schema: [{name: 'User', properties: {name: 'string', id: 'string'}}]
    });
    if(realm.objects('User').length>0){
      userId = realm.objects('User')[0].id;
    } else {
      console.log('ERROR, NO SE ENCONTRO UN USUARIO');
    }
    this.setState({id: userId});
  }

  render() {
    var leftButtonConfig = {
      title: 'Back',
      handler: this.goBack,
    }
    return (
      <View >
        <Header>
          <Button block transparent onPress={this.props.openDrawer}>
            <Icon name='bars' size={30} />
          </Button>
          <Title>Settings</Title>
        </Header>
        {this.state.edition ?
          (<View style={{margin:10}}>
            <Text style={{fontSize: 20}}>Full name</Text>
            <TextInput placeholder='Gabriel Bursztein' fontSize={17}/>
            <Text style={{fontSize: 20}}>Email</Text>
            <TextInput placeholder='gabibur@gmail.com' fontSize={17} />

            <Button block success style={{position:'absolute', top:200, left:20, width: 340, height:35}} onPress={this.finishEdition}>Done</Button>
          </View>)
          :
          (
            <View style={{height: 1000, width: 600}}>
              <Content style={{height: 1000, width: 600}} >
                <Grid style={{height: 500, width: 400}}>
                  <Row>
                    <Text style={{top: 20, left: 12, margin: 5, fontSize: 20}}>Full name</Text>
                  </Row>

                  <Row>
                    <Text style={{fontSize: 17, margin: 5, top: 16, left: 10}}>Gabriel Bursztein</Text>
                  </Row>
                  <Row>
                    <Text style={{fontSize: 20, margin: 5, top: 20, left: 10}}>Email</Text>
                  </Row>
                  <Text style={{fontSize: 20, margin: 5, top: 16, left: 10}}>gabibur@gmail.com</Text>
                  <Button block warning style={{position:'absolute', top:200, left:20, width:340, height:35}} onPress={this.edit}>Edit</Button>

                </Grid>
              </Content>
            </View>
          )

        }
      </View>
    )
  }


}


module.exports = Configuration;
