/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Onboard from './components/Onboard';
import OnboardContext from './components/OnboardContext';
import OnboardButton from './components/OnboardButton';
import MainScreen from './components/MainScreen';
import {
  SafeAreaView,
  View,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageView}>
        <Onboard />
      </View>
      <View style={styles.button}>
        <OnboardButton />
      </View>
      {/* <MainScreen /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create(
  {
    container: {
      backgroundColor: '#FFFFFF',
      width: '100%',
      height: '100%',
    },

    imageView: {
      padding: 30,
      height: '50%',
      width: '100%',
    },
    button: {
      alignItems: 'center',
      top: '30%'
    }
  }
)
export default App;
