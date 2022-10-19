import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

const NextButton = ({text}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.crm}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom:80,
    alignItems: 'center',
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width:350,
    height:40,
    borderRadius: 8,
    backgroundColor: '#A020F0',
  },
  crm: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default NextButton;
