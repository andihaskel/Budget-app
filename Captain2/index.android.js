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
  DrawerLayoutAndroid,
  ToolbarAndroid
} from 'react-native';
import {
  Container,
  Header,
  Title,
  Button,
  Content
} from 'native-base';
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
import Icon from 'react-native-vector-icons/FontAwesome';
import EditFixed from './EditFixed';


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
    this.addOneExpense = this.addOneExpense.bind(this);
    this.addOneIncome = this.addOneIncome.bind(this);
    this.navigatorRenderScene = this.navigatorRenderScene.bind(this);
    this.openDrawer = this.openDrawer.bind(this);
    this.state = {isLogged: true,
      username: "",
      password: "",
      incomes: 100,
      expenses: 8,
      categories: ['General', 'Comida', 'Salidas'],
      incomesList: [ {amount:20, description: 'Prueba', category: 'General'}, {amount:80, description: 'Prueba 2', category: 'Comida'}],
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
  openDrawer() {
		this.refs['DRAWER'].openDrawer();
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
    var show = null;
    switch (route.id) {
      case 'tabs':
      return <Tabs navigator={navigator} drawer={this.openDrawer} />
      case 'addExpense':
      return <AddExpense navigator={navigator} />
      case 'addIncome':
      return <AddIncome navigator={navigator} />
      case 'editFixed':
      return <EditFixed navigator={navigator} item={route.data} />
    }
  }

  render() {
    var navigationView = (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>I'm in the Drawer!</Text>
      </View>
    );
    return (
      <DrawerLayoutAndroid
        ref='DRAWER'
        drawerWidth={300}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => navigationView}>
        <Header>
          <Button transparent onPress={this.openDrawer}>
            <Icon name='bars' size={30} />
          </Button>
          <Title>Aplicacion</Title>
          <Button transparent>
            <Icon name='cog' size={30}/>
          </Button>
        </Header>
      <Navigator
        initialRoute={{id:'tabs'}}
        renderScene={this.navigatorRenderScene}
      />
    </DrawerLayoutAndroid>


    );
  }

}






AppRegistry.registerComponent('Captain2', () => Captain2);
