import React, {useState, FC, useContext} from 'react';
import {View, Text, StyleSheet, TextInput, Button, Alert} from 'react-native';
import UserListContext from '../Components/user-list-context';

const AddUserScreen: FC<{
  navigation: any;
}> = props => {
  const context = useContext(UserListContext);
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');

  const addUserHandler = () => {

    const newUserObj = {
      name: name,
      username: 'Bret',
      email: 'Sincere@april.biz',
      address: {
        street: street,
        suite: 'Apt. 556',
        city: city,
        zipcode: '92998-3874',
        geo: {
          lat: '-37.3159',
          lng: '81.1496',
        },
      },
      phone: phoneNumber,
      website: 'hildegard.org',
      company: {
        name: 'Romaguera-Crona',
        catchPhrase: 'Multi-layered client-server neural-net',
        bs: 'harness real-time e-markets',
      },
    };

    context.onAddUser(newUserObj);
    Alert.alert('User Added');
    props.navigation.goBack();
  };
  return (
    <View style={styles.screen}>
      <Text>Enter Name</Text>
      <View style={styles.inputField}>
        <TextInput
          placeholder="Deepak Goyal"
          value={name}
          onChangeText={name => setName(name)}
        />
      </View>

      <Text>Phone Number</Text>
      <View style={styles.inputField}>
        <TextInput
          placeholder="9079699179"
          value={phoneNumber}
          onChangeText={phoneNumber => setPhoneNumber(phoneNumber)}
        />
      </View>
      <Text>Address</Text>
      <Text>Street</Text>
      <View style={styles.inputField}>
        <TextInput
          placeholder="Mall Road"
          value={street}
          onChangeText={street => setStreet(street)}
        />
      </View>
      <Text>City</Text>
      <View style={styles.inputField}>
        <TextInput
          placeholder="Chandigarh, India"
          value={city}
          onChangeText={city => setCity(city)}
        />
      </View>
      <View style={styles.buttons}>
        <Button title="Confirm" onPress={addUserHandler} />
        <Button title="Cancel" onPress={() => props.navigation.goBack()} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 15,
  },
  inputField: {
    borderWidth: 3,
    padding: 0,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});

export default AddUserScreen;
