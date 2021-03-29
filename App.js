/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  SafeAreaView,
  View,
  
  useColorScheme,
} from 'react-native';

import {
  Colors,
  Header
} from 'react-native/Libraries/NewAppScreen';
import { LayoutList } from './src/components/MainPage';


const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <View
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <LayoutList />
      </View>
    </SafeAreaView>
  );
};


export default App;
