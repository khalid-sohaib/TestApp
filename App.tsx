import React, { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Text
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import MainScreen from './src/screens/MainScreen';

function App(): React.JSX.Element {

  return (
    <View style={styles.background}>
      <ScrollView style={styles.background}>
       <MainScreen/>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: Colors.black,
    flex: 1,
  },
});

export default App;
