import React, {useState, FC, useContext} from 'react';
import {TextInput, Text, View, StyleSheet, Keyboard} from 'react-native';
import MyButton from './MyButton';
import UserListContext from './user-list-context';

const Header = () => {
  const context = useContext(UserListContext);
  const [enteredText, setEnteredText] = useState('');

  const inputChangeHandler = (enteredText: string) => {
    setEnteredText(enteredText);
  };
  return (
    <View style={styles.header}>
      <View style={styles.searchBar}>
        <TextInput
          placeholder="Search By Name"
          style={styles.textInput}
          onChangeText={inputChangeHandler}
          value={enteredText}
        />
      </View>
      <MyButton
        onPress={() => {
          context.onSearch(enteredText);
          Keyboard.dismiss();
        }}
        style={styles.buttonStyle}>
        Search
      </MyButton>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  searchBar: {
    width: '75%',
    height: 40,
    padding: 0,
  },
  textInput: {
    fontWeight: 'bold',
    color: '#000',
    padding: 2,
    borderBottomWidth: 2,
    borderBottomColor: 'black',
  },
  buttonStyle: {
    borderRadius: 50,
  },
});

export default Header;
