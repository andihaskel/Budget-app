import React, {Component} from 'react';
import { 
  View, 
  Text,
  StyleSheet,
  Image,
  TouchableHighlight } from 'react-native';

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


  class Row extends Component{
    constructor(props) {
      super(props);
      this.handlePress = this.handlePress.bind(this);
    }

    handlePress() {
      return this.props.handleOnPress(`${this.props.description}`, `${this.props.amount}`);
    }
    render() {
      return(
        <View style={styles.container}>
        <TouchableHighlight onPress={this.handlePress}>
        <Text style={styles.text}>
        {`${this.props.description} ${this.props.amount}`}
        </Text>
        </TouchableHighlight>
        </View>
        )
    }
  }


  export default Row;