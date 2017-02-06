import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  Picker,
  PickerItem,
  ToolbarAndroid
} from 'react-native'
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import TextField from 'react-native-md-textinput';
import NavigationBar from 'react-native-navbar';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  Header,
  Title,
  Button
} from 'native-base';

class Configuration extends Component {
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
    this.edit = this.edit.bind(this);
    this.finishEdition = this.finishEdition.bind(this);
    this.state = {edition: false};
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


  render() {
    var leftButtonConfig = {
      title: 'Back',
      handler: this.goBack,
    }
    return (
      <View>
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
          (<View style={{margin:10}}>
            <Text style={{fontSize: 20}}>Full name</Text>
            <Text style={{fontSize: 17}}>Gabriel Bursztein</Text>
            <Text style={{fontSize: 20}}>Email</Text>
            <Text style={{fontSize: 17}}>gabibur@gmail.com</Text>
            <Button block warning style={{position:'absolute', top:200, left:20, width:340, height:35}} onPress={this.edit}>Edit</Button>
          </View>)

        }



      </View>
    )
  }


}


module.exports = Configuration;
