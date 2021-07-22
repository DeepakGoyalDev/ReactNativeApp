import React, {useState, useEffect, useContext} from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  ActivityIndicator,
  TouchableWithoutFeedback,
  Keyboard,
  Text,
} from 'react-native';
import MyButton from '../Components/MyButton';
import User from '../Components/User';
import UserListContext from '../Components/user-list-context';

const UserListScreen: React.FC<{
  navigation: any;
  route: any;
}> = props => {
  const context = useContext(UserListContext);
  const [listToDisplay, setListToDisplay] = useState<any>([]);
  const [listStart, setListStart] = useState<number>(0);
  let offset = 5;

  useEffect(() => {
    if (context.filteredUsersList) {
      setListToDisplay(context.filteredUsersList.slice(0, offset));
      setListStart(offset);
    }
  }, [context.filteredUsersList]);

  const loadMoreData = () => {
    console.log('CAll TO LOAD MORE DATA');
    let newListToDisplay = listToDisplay.concat(context.filteredUsersList.slice(listStart, listStart + offset));
    setListToDisplay(newListToDisplay);
    setListStart(listStart + offset);
  };


  console.log('list to display length---', listToDisplay.length);
  return (
    <View style={styles.screen}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <MyButton
            onPress={() => props.navigation.navigate('AddUser')}
            style={styles.buttonStyle}>
            ADD USER
          </MyButton>

          <FlatList
            onEndReached={loadMoreData}
            onEndReachedThreshold={0}
            ListFooterComponent={
              listToDisplay?.length !== context.filteredUsersList?.length ? (
                <ActivityIndicator size={60} color="#000" />
              ) : (
                <Text style={styles.listEndText}>No More User</Text>
              )
            }
            ListFooterComponentStyle={{paddingVertical: 10}}
            keyExtractor={(item, index) => item.id}
            data={listToDisplay}
            renderItem={user => (<User user={user.item} navigation={props.navigation} />)}
          />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  userContainer: {
    margin: 10,
    borderRadius: 10,
    padding: 10,
    backgroundColor: 'red',
  },
  buttonStyle: {
    height: 50,
  },
  listEndText: {
    textAlign: 'center',
  },
});

export default UserListScreen;
