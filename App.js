import React from 'react';
import { useState  } from 'react';
import { StyleSheet, Text, View, StatusBar, TextInput, TouchableOpacity } from 'react-native';

export default function App() {

const [valor, setValor] = useState('')
const [percentual, setPercentual] = useState('')
const [pessoas, setPessoas] = useState('')

  return (
    <View style={styles.container}>

      <Text style={styles.textTitle}>Tip Calculator</Text>

      <View style={styles.viewSecundary}>

        <Text style={styles.textSubTitles}>Valor</Text>

        <TextInput
          style={styles.textInput}
          placeholder='Valor'
          placeholderTextColor={'gray'}
          value={valor}
          onChangeText={setValor}
          
        />
        
        <TextInput
          style={styles.textInput}
          placeholder='Percentual'
          placeholderTextColor={'gray'}
          value={percentual}
          onChangeText={setPercentual}
          
        />

         <TextInput
          style={styles.textInput}
          placeholder='Pessoas'
          placeholderTextColor={'gray'}
          value={pessoas}
          onChangeText={setPessoas}
          
        />

      

      </View>
      
      <TouchableOpacity style={styles.buttonCalculator}>
        <Text style={styles.textButton}>Calcular</Text>
      </TouchableOpacity>

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
    color: 'white',
    fontSize: 18, 
    textAlign: 'center',
    paddingTop: 40
  },
  textInput: {
    color: '#e9e9e9',
    textAlign: 'left',
    paddingLeft: 15,
    width: 330,
    height: 60,
    left: '4%',
    borderRadius: 10,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    fontWeight:'bold'
  },
  textButton: {
    color: 'white',
    textAlign: 'center',
    padding: 15
  },
  buttonCalculator: {
    backgroundColor: 'blue',
    textAlign: 'center',
    justifyContent: 'center',
    width: 100,
    height: 50,
    left: 130,
    borderRadius: 30,
    marginTop: 200
  },
});
