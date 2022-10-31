import React from 'react'
import { View,Text } from 'react-native'
import NextButton from './NextButton'


const ScreenTwo = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>Manage your leads</Text>
      <Text style={styles.subText}>
        View all your leads and tasks in one oplace and take actions to close your leads faster
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

export default ScreenTwo