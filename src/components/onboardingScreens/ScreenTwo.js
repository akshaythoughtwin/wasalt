import React from 'react'
import { View,Text } from 'react-native'
import NextButton from './NextButton'


const ScreenTwo = () => {
  return (
    <View style={styles.container}><Text>ScreenOne</Text>
    <NextButton text={'Next'} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ScreenTwo