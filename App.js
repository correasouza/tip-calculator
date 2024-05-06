import React from 'react';
import { StyleSheet, Text, View, StatusBar, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <Text style={styles.textTitle}>Tip Calculator</Text>

      <View style={styles.viewSecundary}>
        <Text style={styles.textSubTitles}>Valor</Text>
        <TextInput style={styles.textInput}>
          <Text>Digite o valor</Text>
        </TextInput>
      </View>
      



      <StatusBar barStyle='light-content'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  viewSecundary: {
    paddingTop: 100
  },
  textTitle: {
    color: '#ded1b6',
    fontSize: 18, 
    textAlign: 'center',
    paddingTop: 40
  },
  textInput: {
    color: '#e9e9e9',
    textAlign: 'center',
    backgroundColor: '#101010',
    width: 300,
    height: 40,
    left: 30,
    borderRadius: 5

  },
  textSubTitles: {
    color: '#ded1b6',
    textAlign: 'center'
  }
});
