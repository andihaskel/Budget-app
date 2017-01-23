import React, {Component} from 'react';
import { View, Text, StyleSheet, ListView} from 'react-native';
import SectionHeader from './SectionHeader';
import demoData from './demoData';
import Row from './Row';
class ListViewDemo extends Component {

  constructor(props) {
    super(props);
    this.props.handleOnPress = this.props.handleOnPress.bind(this);
    const getSectionData = (dataBlob, sectionId) => dataBlob[sectionId];
    const getRowData = (dataBlob, sectionId, rowId) => dataBlob[`${rowId}`];
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
      sectionHeaderHasChanged : (s1, s2) => s1 !== s2,
      getSectionData,
      getRowData,
    });

    const { dataBlob, sectionIds, rowIds } = this.formatData(demoData);
    this.state = {
      dataSource: ds.cloneWithRowsAndSections(dataBlob, sectionIds, rowIds),
    };
  }

  formatData(data) {
    // We're sorting by alphabetically so we need the alphabet
    var categories = 'General,Comida,Bebida'
    const catArray = categories.split(',');

    // Need somewhere to store our data
    const dataBlob = {};
    const sectionIds = [];
    const rowIds = [];

    // Each section is going to represent a letter in the alphabet so we loop over the alphabet
    for (let sectionId = 0; sectionId < catArray.length; sectionId++) {
      // Get the character we're currently looking for
      const currentCat = catArray[sectionId];

      // Get users whose first name starts with the current letter
      const incomes = data.filter((income) => income.category === currentCat);

      // If there are any users who have a first name starting with the current letter then we'll
      // add a new section otherwise we just skip over it
      if (incomes.length > 0) {
        // Add a section id to our array so the listview knows that we've got a new section
        sectionIds.push(sectionId);

        // Store any data we would want to display in the section header. In our case we want to show
        // the current character
        dataBlob[sectionId] = { category: currentCat };

        // Setup a new array that we can store the row ids for this section
        rowIds.push([]);

        // Loop over the valid users for this section
        for (let i = 0; i < incomes.length; i++) {
          // Create a unique row id for the data blob that the listview can use for reference
          const rowId = `${sectionId}:${i}`;

          // Push the row id to the row ids array. This is what listview will reference to pull
          // data from our data blob
          rowIds[rowIds.length - 1].push(rowId);

          // Store the data we care about for this row
          dataBlob[rowId] = incomes[i];
        }
      }
    }

    return { dataBlob, sectionIds, rowIds };
  }

  render() {
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        padding: 8,
        backgroundColor: '#EAEAEA',
      },
      text: {
        fontSize: 13,
      },
    });
    return (
      <ListView
      style={styles.container}
      dataSource={this.state.dataSource}
      renderRow={(data) => <Row {...data} handleOnPress={this.props.handleOnPress}  />}
      renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
      renderSectionHeader={(sectionData) => <SectionHeader {...sectionData} />}
      />
      );
  }



}

export default ListViewDemo;