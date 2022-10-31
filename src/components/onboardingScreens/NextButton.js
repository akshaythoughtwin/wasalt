import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const NextButton = ({text}) => {
  return (
      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.crm}>{text}</Text>
      </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
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
