import React, {useContext} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import UserListContext from './user-list-context';

const User: React.FC<{
  user: any;
  navigation: any;
}> = props => {
  const context = useContext(UserListContext);
  const user = props.user;

  const deletUserHandler = () => {
    Alert.alert(
      'Hey There!',
      'Are you sure?',
      [
        // PENDING
        {text: 'Yes', onPress: () => context.onDeletUser(user.id)},
        {text: 'No', onPress: () => ''},
      ],
      {
        cancelable: true,
      },
    );
  };

  return (
    <TouchableOpacity
      onPress={() => props.navigation.navigate('UserDetail', {user: user})}
      onLongPress={deletUserHandler}>
      <View style={styles.userContainer}>
        <View style={styles.firstRow}>
          <View>
            <Text>{user.id}</Text>
            <Text>{user.name}</Text>
          </View>
        </View>

        <View style={styles.secondRow}>
          <View style={styles.number}>
            <Text>{user.phone}</Text>
          </View>
          <View style={styles.age}>
            <Text>20 Years</Text>
          </View>
        </View>

        <View style={styles.thirdRow}>
          <View>
            <Text>{`${user.address.street}, ${user.address.city}`}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  userContainer: {
    backgroundColor: '#e4e6eb',
    width: '90%',
    alignSelf: 'center',
    borderRadius: 10,
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  firstRow: {
    padding: 7,
    flexDirection: 'row',
  },
  secondRow: {
    padding: 6,
    flexDirection: 'row',
  },
  thirdRow: {
    padding: 7,
    flexDirection: 'row',
  },
  number: {
    flex: 5,
    flexDirection: 'row',
  },
  age: {
    flex: 2,
    flexDirection: 'row',
  },
  icon: {
    fontSize: 18,
    marginHorizontal: 17,
    color: '#4C4C6D',
  },
});

export default User;
