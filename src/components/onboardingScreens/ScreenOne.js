import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import LeftIcon from './LeftIcon';
import NextButton from './NextButton';
import Skip from './Skip';

const ScreenOne = () => {
  return (
    <View style={styles.maindiv}>
      <View style={styles.topicon}>
        <LeftIcon />
        <Skip />
      </View>
    <View style={styles.container}>
      <Image source={require('../../utils/download.jpeg')} />
      <View style={styles.middleview}>
        <View>
          <Text style={styles.mainText}>Manage properties</Text>
        </View>
        <View>
          <Text style={styles.subText}>
            Add your inventory on CRM and track your performance
          </Text>
          
        </View>
      </View>
      <NextButton text={'Next'} />
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  maindiv:{
    flex:1
  },
  topicon:{
    marginTop:"12%",
    marginLeft:"2%",
    marginRight:"2%",
    flexDirection:"row",
    justifyContent:"space-between"
  },
  container: {
    flex: 1,
    top: '2%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  skipContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  middleview: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainText: {fontSize: 23, fontWeight: 'bold'},
  subText: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    marginTop:"8%"
  },
});

export default ScreenOne;
