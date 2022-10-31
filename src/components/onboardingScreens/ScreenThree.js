import React from 'react'
import { View,Text } from 'react-native'
import NextButton from './NextButton'


const ScreenThree = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>Invite user and manage your team</Text>
      <Text style={styles.subText}>
        Bring your entire team here and track how everyone is performing every month.
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

export default ScreenThree