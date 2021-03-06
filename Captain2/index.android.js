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
  TouchableNativeFeedback,
  Image,
  BackAndroid
} from 'react-native';
import {
  Container,
  Header,
  Title,
  Button,
  Content,
  H2,
  List,
  ListItem,
  Thumbnail
} from 'native-base';
import ScrollableTabView, {DefaultTabBar, } from 'react-native-scrollable-tab-view';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import Home from './Home';
import AddExpense from './AddExpense';
import AddIncome from './AddIncome';
import ViewIncome from './ViewIncome';
import Tabs from './Tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import EditFixed from './EditFixed';
import AddObjective from './AddObjective';
import AddFromSavings from './AddFromSavings';
import DetailExpenses from './DetailExpenses';
import History from './History';
import Login from './Login';
import SignUp from './SignUp';
import Realm from 'realm';

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


BackAndroid.addEventListener('hardwareBackPress', () => {
  if (_navigator.getCurrentRoutes().length === 1  ) {
    return false;
  }
  return true;
});

export default class Captain2 extends Component {
  constructor() {
    super();
    this.addOneExpense = this.addOneExpense.bind(this);
    this.addOneIncome = this.addOneIncome.bind(this);
    this.navigatorRenderScene = this.navigatorRenderScene.bind(this);
    this.openDrawer = this.openDrawer.bind(this);
    this.closeDrawer = this.closeDrawer.bind(this);
    this.state = {
      isLogged: false,
      username: "",
      password: "",
      incomes: 100,
      expenses: 8,
      categories: ['General', 'Comida', 'Salidas'],
      incomesList: [ {amount:20, description: 'Prueba', category: 'General'}, {amount:80, description: 'Prueba 2', category: 'Comida'}],
      incomeDetail: {},
    };

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
    switch (route.id) {
      case 'tabs':
      return  <Tabs navigator={navigator} openDrawer={this.openDrawer} initialPage={route.initialPage} />
      case 'addExpense':
      return <AddExpense navigator={navigator} />
      case 'addIncome':
      return <AddIncome navigator={navigator} />
      case 'editFixed':
      return <EditFixed navigator={navigator} item={route.data} previousWindow={route.previousWindow} />
      case 'addObjective':
      return <AddObjective navigator={navigator} />
      case 'addFromSavings':
      return <AddFromSavings navigator={navigator} item={route.data}/>
      case 'fixed':
      return <DetailExpenses navigator={navigator} openDrawer={this.openDrawer} />
      case 'signUp':
      return <SignUp navigator={navigator}/>
      case 'history':
      return <History navigator={navigator} openDrawer={this.openDrawer} />
      case 'login':
      return <Login navigator={navigator} />
      case 'prueba':
      return <PruebaRealm />
    }
  }

  goToOption(id) {
    if(id == 'closeSession'){
      let realm = new Realm({
        schema: [{name: 'User', properties: {name: 'string', id: 'string'}}]
      });
      realm.write(() => {
        realm.delete(realm.objects('User'));
      })
      this.refs['DRAWER'].closeDrawer();
      this.refs['NAVIGATOR'].immediatelyResetRouteStack([{id:'login'}]);

  } else {
    this.refs['DRAWER'].closeDrawer();
    var routes = this.refs['NAVIGATOR'].getCurrentRoutes(0);
    if(routes[routes.length - 1].id === id){
      return false
    }
    var goTo = -1;
    routes.map(function(route, index){
      if(route.id === id){
        goTo = index;
      }
    })

    if(goTo > -1){
      this.refs['NAVIGATOR'].popN(routes.length - (goTo + 1));
    } else {
      this.refs['NAVIGATOR'].push({id: id});
    }
  }

}

componentWillMount() {
  let realm = new Realm({
    schema: [{name: 'User', properties: {name: 'string', id: 'string'}}]
  });
  if(realm.objects('User').length != 0) {
    this.setState({isLogged: true});
  }
}

render() {
  var items = [{name:'Home', icon:'home', id:'tabs'}, {name:'Savings History', icon:'history', id:'history'},{name:'Fixed', icon:'money', id:'fixed'}, {name:'Close session', icon:'power-off', id:'closeSession'}]
  var navigationView = (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <View>
        <Image source={require('./sideBarTop.jpg')}  style={{height:Style.DRAWER_IMAGE_HEIGHT, width:Style.DRAWER_WIDTH}}>
        <View style={{marginTop:30, marginLeft: 10}}>
          <Text style={{marginTop:5, fontSize:Style.DRAWER_FONT_SIZE}}>Jhon Smith</Text>
        </View>
      </Image>
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
                <Text style={{fontSize:Style.DRAWER_FONT_SIZE}}>{item.name}</Text>
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
    drawerWidth={Style.DRAWER_WIDTH}
    drawerPosition={DrawerLayoutAndroid.positions.Left}
    drawerLockMode={'locked-closed'}
    renderNavigationView={() => navigationView}>
    <Navigator
      ref='NAVIGATOR'
      initialRoute={this.state.isLogged ? {id:'tabs', initialPage:1} : {id:'login'}}
      renderScene={this.navigatorRenderScene}
      configureScene={(route, routeStack) =>
        Navigator.SceneConfigs.FadeAndroid}
      />
    </DrawerLayoutAndroid>


  );
}

}






AppRegistry.registerComponent('Captain2', () => Captain2);
