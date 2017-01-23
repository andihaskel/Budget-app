import React, {Component} from 'react';

import { 
  View, 
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
  Button
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginLeft: 12,
    fontSize: 16,
  },
  photo: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
});

class ViewIncome extends Component {
  constructor(props){
    super(props);

  }
  render() {
    return(
      <View>
      <Text>{this.props.description} {this.props.price}</Text>
      <Button onPress={this.props.handleBack} title='Back' />
      </View>
      )
  }
}

export default ViewIncome;