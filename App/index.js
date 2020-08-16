import { StatusBar } from '../node_modules/expo-status-bar';
import React from '../node_modules/react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './components/Home/Home.component';

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text style={styles.welcome}>
    //     Open up App.js to start working on your app! Got the Android Emulater working!</Text>
    //   <StatusBar style="auto" />
    // </View>
    <Home/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcome: {
    fontSize: 20,
    margin: 10,
    textAlign: 'center',
    borderColor: 'black',
    borderWidth: 1,
  },
});
