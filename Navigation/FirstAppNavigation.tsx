import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import UserListScreen from '../Screens/UsersListScreen';
import AddUserScreen from '../Screens/AddUserScreen';
import UserDetailScreen from '../Screens/UserDetailScreen';
import Header from '../Components/Header';

// type RootStackParamList = {
//   UserList: undefined;
//   AddUser: undefined;
//   UserDetail: undefined;
// };

const Stack = createStackNavigator();

const FirstAppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="UserList">
        <Stack.Screen name="UserList" component={UserListScreen} options={{headerTitle: () => <Header/>}}/>
        <Stack.Screen name="AddUser" component={AddUserScreen} />
        <Stack.Screen name="UserDetail" component={UserDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default FirstAppNavigation;
