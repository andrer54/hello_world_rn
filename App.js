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
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (
         
    <View style={styles.container}>
      <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Welcome world! :P</Text>
              <Text style={styles.descricao}>Começando com react-native!</Text>
      </View>           
    </View>

  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems:'center',
    justifyContent: 'center',
  },
  sectionContainer: {
    margin: 25,
    padding: 25,
    
    backgroundColor: '#4365c4',
    borderRadius: 3,

    
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.white,
  },




});

export default App;
