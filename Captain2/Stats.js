import React, {Component} from 'react';
import {
  View,
  Text,
  Button,
  Navigator,
  TextInput,
  Picker,
  ListView,
  StyleSheet,
  StatusBar
} from 'react-native'
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import TextField from 'react-native-md-textinput';
import PieChart from 'react-native-pie-chart';


class Stats extends Component {

  constructor(props) {
    super(props);

  }

  render() {
    const chart_wh = 250
    const series = [123, 321, 123, 789, 537]
    const sliceColor = ['#F44336','#2196F3','#FFEB3B', '#4CAF50', '#FF9800']

    return (
        <View style={styles.container}>
          <Text style={styles.title}>Expenses</Text>
          <PieChart
            chart_wh={chart_wh}
            series={series}
            sliceColor={sliceColor}
            doughnut={true}
            coverRadius={0.55}
            coverFill={'#FFF'}
          />
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
  }
});

module.exports = Stats;
