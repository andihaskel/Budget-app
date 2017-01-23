/**
* Sample React Native App
* https://github.com/facebook/react-native
* @flow
*/

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableHighlight,
  TextInput,
  Alert,
  ToastAndroid,
  Navigator,
  ToolbarAndroid,
  Button,
} from 'react-native';
import Dialogo from './Dialogo';
import Page2 from './Page2';
import ScrollableTabView, {DefaultTabBar, } from 'react-native-scrollable-tab-view';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import Home from './Home';
import AddExpense from './AddExpense';
import Login from './Login';
import AddIncome from './AddIncome';
import IncomeList from './IncomeList';
import ListViewDemo from './ListViewDemo';
import ViewIncome from './ViewIncome';
import Tabs from './Tabs';


var t = require('tcomb-form-native');
var Form = t.form.Form;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
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
  login: {
    position: 'absolute',
    top: 150,
    padding: 100,
    margin: 30,
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  }
});
var Person = t.struct({
  username: t.String,
  password: t.String,
});
var options = {}; // optional rendering options (see documentation)

export default class Captain2 extends Component {
  constructor() {
    super();
    this.setLogin = this.setLogin.bind(this);
    this.setLogout = this.setLogout.bind(this);
    this.setUserData= this.setUserData.bind(this);
    this.showScreenExpense = this.showScreenExpense.bind(this);
    this.showScreenIncome = this.showScreenIncome.bind(this);
    this.hideScreenExpense = this.hideScreenExpense.bind(this);
    this.hideScreenIncome = this.hideScreenIncome.bind(this);
    this.addOneExpense = this.addOneExpense.bind(this);
    this.addOneIncome = this.addOneIncome.bind(this);
    this.showIncomeView = this.showIncomeView.bind(this);
    this.hideIncomeView = this.hideIncomeView.bind(this);
    this.setIncomeDetail = this.setIncomeDetail.bind(this);
    this.navigatorRenderScene = this.navigatorRenderScene.bind(this);
    this.state = {isLogged: true,
      username: "",
      password: "",
      showScreenExpense: false,
      showScreenIncome:false,
      incomes: 100,
      expenses: 8,
      categories: ['General', 'Comida', 'Salidas'],
      incomesList: [ {amount:20, description: 'Prueba', category: 'General'}, {amount:80, description: 'Prueba 2', category: 'Comida'}],
      showScreenViewIncome: false,
      incomeDetail: {}
    };
  }
  setLogin() {
    this.setState({ isLogged: true });
  }

  setLogout() {
    this.setState({ isLogged: false });
  }
  setUserData() {
    this.setState({ username: Person.username,
      password: Person.password,
      isLogged: true,
    });
  }
  setIncomeDetail(desc, price) {
    var obj = {description: desc, price: price};
    this.setState({incomeDetail: obj})
    this.showIncomeView();
  }
  showScreenExpense() {
    this.setState({showScreenExpense: true});
  }
  hideScreenExpense() {
    this.setState({showScreenExpense: false});
  }
  showScreenIncome() {
    this.setState({showScreenIncome: true});
  }
  hideScreenIncome() {
    this.setState({showScreenIncome: false});
  }
  showIncomeView() {
    this.setState({showScreenViewIncome: true})
  }
  hideIncomeView() {
    this.setState({showScreenViewIncome: false})
  }
  addOneExpense(val) {
    var exp = this.state.expenses;
    var total = exp + parseInt(val);
    this.setState({expenses: total});
    ToastAndroid.show('Expense ingressed correctly', ToastAndroid.LONG);
    this.setState({showScreenExpense: false});
  }

  addOneIncome(val, desc, cat) {
    var inc = this.state.incomes;
    var total = inc + parseInt(val);
    this.setState({incomes: total});
    ToastAndroid.show('Income ingressed correctly', ToastAndroid.LONG);
    this.setState({showScreenIncome: false});
    var list = this.state.incomesList;
    var newList = list.push({amount: val, description: desc, category: cat});
    this.setState({list});
  }


  navigatorRenderScene(route, navigator) {
    _navigator = navigator;
    switch (route.id) {
      case 'tabs':
      return <Tabs navigator={navigator} />
      case 'addExpense':
      return <AddExpense navigator={navigator} />
      case 'addIncome':
      return <AddIncome navigator={navigator} />
    }
  }


  render() {
    return (
        <Navigator
          initialRoute={{id:'tabs'}}
          renderScene={this.navigatorRenderScene}
        />
    );
  }

}






AppRegistry.registerComponent('Captain2', () => Captain2);
