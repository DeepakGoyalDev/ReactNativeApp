import React from 'react';
import {TouchableOpacity, Text, StyleSheet, View} from 'react-native';

const MyButton: React.FC<{
  onPress: () => void;
  style?: any;
}> = props => {
  return (
    <TouchableOpacity onPress={() => props.onPress()}>
      <View style={{...styles.buttonStyle, ...props.style}}>
        <Text style={styles.textStyle}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  textStyle: {
    color: '#ffff',
    fontWeight: 'bold',
    fontSize: 17,
  },
});

export default MyButton;
