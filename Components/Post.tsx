import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const Post: React.FC<{
  title: string;
  body: string;
}> = props => {
  return (
    <View style={styles.post}>
      <Text style={styles.titleStyle}>{props.title}</Text>
      <Text>{props.body}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  post: {
    borderWidth: 2,
    marginVertical: 10,
    borderRadius: 10,
    padding: 3,
    width: '90%',
    alignSelf: 'center',
  },
  titleStyle: {
    fontWeight: 'bold',
  },
});

export default Post;
