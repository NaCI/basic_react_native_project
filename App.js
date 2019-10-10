/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './src/screens/Home'
import ProfileScreen from './src/screens/Profile'
import ListPersonScreen from './src/screens/ListPerson'
import AddEditPersonScreen from './src/screens/AddEditPerson'
import CalendarScreen from "./src/screens/Calendar";

const MainNavigator = createStackNavigator({
    Profile: {screen: ProfileScreen},
    Home: {screen: HomeScreen},
    ListPerson: {screen: ListPersonScreen},
    AddEditPerson: {screen: AddEditPersonScreen},
    Calendar: {screen: CalendarScreen}

}, {initialRouteName: 'ListPerson'});

const App = createAppContainer(MainNavigator);

export default App;