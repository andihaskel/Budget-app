import React, {Component} from 'react';
import {
  View,
  Text,
  Button,
  Navigator,
  TextInput,
  Picker,
  StyleSheet,
  StatusBar,
  ScrollView,
  Image,
  ListView,
} from 'react-native'
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import TextField from 'react-native-md-textinput';
import {
  Container,
  Content,
  Thumbnail
} from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";
var image = require('./price.png');
class Stats extends Component {

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([<Image source={image} style={styles.gridItem} />, <Image source={image} style={styles.gridItem} />,<Image source={image} style={styles.gridItem} />,<Image source={image} style={styles.gridItem}  />,<Image source={image} style={styles.gridItem}  />,<Image source={image} style={styles.gridItem}  />,<Image source={image} style={styles.gridItem}  />,<Image source={image} style={styles.gridItem}  />, <Image source={image} style={styles.gridItem}  />,<Image source={image} style={styles.gridItem}  />,<Image source={image} style={styles.gridItem}  />,<Image source={image} style={styles.gridItem} />,<Image source={image} style={styles.gridItem}  />,<Image source={image} style={styles.gridItem} />]),
    };
  }

  render() {
    return (
      <View style={{alignItems:'center'}}>
        <Thumbnail source={require('./avatar.png')} size={130} style={{marginTop:20}}/>

        <ScrollView style={{width:Style.DEVICE_WIDTH, marginTop:20}}>
          <ListView
            contentContainerStyle={styles.grid}
            dataSource={this.state.dataSource}
            renderRow={(rowData) => rowData}
          />
        </ScrollView>
      </View>
    );
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  title: {
    fontSize: 24,
    margin: 10
  },
  grid: {
      justifyContent: 'center',
      flexDirection: 'row',
      flexWrap: 'wrap',
      flex: 1,
  },
  gridItem: {
      margin:5,
      width: 80,
      height: 80,
      justifyContent: 'center',
      alignItems: 'center',
  }
});

module.exports = Stats;
