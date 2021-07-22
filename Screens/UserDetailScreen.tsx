import React, {useEffect, useState, useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Alert,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import MyButton from '../Components/MyButton';
import Post from '../Components/Post';
import axios from 'axios';
import UserListContext from '../Components/user-list-context';

const UserDetailScreen: React.FC<{
  route: any;
  navigation: any;
}> = props => {
  const context = useContext(UserListContext);
  const user = props.route.params.user;
  const [postArray, setPostArray] = useState(null);

  const URL = 'https://jsonplaceholder.typicode.com/posts';

  useEffect(() => {
    axios.get(URL).then(response => {
      const fetchUserArray = response.data;
      const tempPostArray = fetchUserArray.filter(
        (post: {body: string; title: string; id: number; userId: number}) =>
          post.userId === user.id,
      );
      setPostArray(tempPostArray);
    });
  }, []);

  const deletUserHandler = () => {
    Alert.alert(
      'Hey There!',
      'Are you sure?',
      [
        {
          text: 'Yes',
          onPress: () => {
            context.onDeletUser(user.id);
            props.navigation.goBack();
          },
        },
        {
          text: 'No',
          onPress: () => '',
        },
      ],
      {
        cancelable: true,
      },
    );
  };

  return (
    <View style={styles.screen}>
      <MyButton onPress={deletUserHandler}>DELETE</MyButton>
      <View style={styles.userContainer}>
        <Text>{user.name}</Text>
        <Text>{user.phone}</Text>
        <Text>20 Years</Text>
        <Text>{`${user.address.street}, ${user.address.city}`}</Text>
      </View>
      {!postArray ? (
        <ActivityIndicator size={100} color="#000" />
      ) : 
        <FlatList
          keyExtractor={(item, index) => item.id}
          data={postArray}
          renderItem={post => (
            <Post title={post.item.title} body={post.item.body} />
          )}
        />
      }
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  userContainer: {
    backgroundColor: '#e4e6eb',
    width: '90%',
    alignSelf: 'center',
    borderRadius: 10,
    marginVertical: 10,
    paddingHorizontal: 10,
  },
});

export default UserDetailScreen;
