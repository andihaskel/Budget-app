import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Alert,
  ToastAndroid,
  Navigator,
  DrawerLayoutAndroid,
  ToolbarAndroid,
  TouchableNativeFeedback
} from 'react-native';
import {
  Container,
  Header,
  Title,
  Button,
  Content,
  H2
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
import AddObjective from './AddObjective';
import {
  List,
  ListItem,
  Thumbnail
} from 'native-base'
import Configuration from './Configuration';
import AddFromSavings from './AddFromSavings';
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
    this.closeDrawer = this.closeDrawer.bind(this);

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
  closeDrawer() {
    this.refs['DRAWER'].closeDrawer();
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
    console.log('En el switch');
    switch (route.id) {
      case 'tabs':
      return <Tabs navigator={navigator} openDrawer={this.openDrawer} />
      case 'addExpense':
      return <AddExpense navigator={navigator} />
      case 'addIncome':
      return <AddIncome navigator={navigator} />
      case 'editFixed':
      return <EditFixed navigator={navigator} item={route.data} />
      case 'addObjective':
      return <AddObjective navigator={navigator} />
      case 'configuration':
      return <Configuration openDrawer={this.openDrawer} />
      case 'addFromSavings':
      return <AddFromSavings navigator={navigator} item={route.data}/>
    }
  }

  goToOption(id) {
    console.log('ENTRO A CAMBIAR DE OPCION');
    this.refs['DRAWER'].closeDrawer();
    var routes = this.refs['NAVIGATOR'].getCurrentRoutes(0);
    if(routes[routes.length - 1].id === id){
      return false
    }
    console.log('No toque la misma');
    var goTo = -1;
    console.log('Routes length = ' + routes.length);
    routes.map(function(route, index){
      if(route.id === id){
        console.log('Ya existe la ruta seleccionada');
        goTo = index;
      }
    })

    if(goTo > -1){
      this.refs['NAVIGATOR'].popN(routes.length - (goTo + 1));
    } else {
      this.refs['NAVIGATOR'].push({id: id});
    }
  }

  render() {
    var items = [{name:'Home', icon:'home', id:'tabs'}, {name: 'Configuracion', icon:'cog', id:'configuration'}, {name:'Fijos', icon:'money', id:'fixed'}, {name:'Cerrar sesion', icon:'power-off', id:'closeSession'}]
    var navigationView = (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <View style={{height:100}}>
          <Text>HOla</Text>
        </View>
        <View>
          <List dataArray={items}
            renderRow={(item) =>
              <ListItem button onPress={() => {this.goToOption(item.id)}}>
                <View style={{
                  flex: 1,
                  flexDirection: 'row'}}>
                  <View style={{width: 50}} >
                    <Icon name={item.icon} size={30}/>
                  </View>
                  <View>
                    <H2>{item.name}</H2>
                  </View>
                </View>
              </ListItem>
            }>
          </List>
        </View>
      </View>
    );
    return (
      <DrawerLayoutAndroid
        ref='DRAWER'
        drawerWidth={300}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => navigationView}>
        <Navigator
          initialRoute={{id:'tabs'}}
          ref='NAVIGATOR'
          renderScene={this.navigatorRenderScene}
          configureScene={(route, routeStack) =>
            Navigator.SceneConfigs.FadeAndroid}
          />
        </DrawerLayoutAndroid>


      );
    }

  }






  AppRegistry.registerComponent('Captain2', () => Captain2);
