import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Crm = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.crm}>CRM</Text>
      <Text style={styles.powerby}>Powerd by wasalt</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#A020F0',
  },
  crm: {
    color: 'white',
    fontSize:30,
    fontWeight: 'bold'  },
  powerby: {
    color: 'white',

  },
});

export default Crm;
