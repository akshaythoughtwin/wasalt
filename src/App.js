import React from 'react';
import Crm from './components/Crm';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ScreenOne from './components/onboardingScreens/ScreenOne';
import AppIntroSlider from 'react-native-app-intro-slider';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <ScreenOne />
    // <NavigationContainer style={{flex: 1}}>
    //   <Stack.Navigator>
    //     <Stack.Screen name="crm" component={NextButton} />
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
};
