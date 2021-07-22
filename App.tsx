import 'react-native-gesture-handler';
import React, {useContext} from 'react';
import FirstAppNavigation from './Navigation/FirstAppNavigation';
import UserListContext, {UserListContextProvider} from './Components/user-list-context';
import { ActivityIndicator} from 'react-native';

const App = () => {
  const context = useContext(UserListContext);
  return (
    <UserListContextProvider>
      {context.filteredUsersList ? <FirstAppNavigation /> :  <ActivityIndicator size={100} color="blue" /> }
    </UserListContextProvider>
  );
};

export default App;
