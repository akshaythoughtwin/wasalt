import React from 'react'
import { View,Text } from 'react-native'
import NextButton from './NextButton'


const ScreenFour = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>Download borchure and share with your prospect</Text>
      <Text style={styles.subText}>
        Make a beautiful pdf for your listings and share that with your clients
      </Text>
      <NextButton text={'Next'} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  mainText: {flex: 1},
  subText: {flex: 1},
});

export default ScreenFour