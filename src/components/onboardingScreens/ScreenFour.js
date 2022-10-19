import React from 'react'
import { View,Text } from 'react-native'
import NextButton from './NextButton'


const ScreenFour = () => {
  return (
    <View style={styles.container}><Text>ScreenOne</Text>
    <NextButton text={'Get Startded'} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ScreenFour