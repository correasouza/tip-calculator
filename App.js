import React from 'react';
import { useState  } from 'react';
import { StyleSheet, Text, View, StatusBar, TextInput, TouchableOpacity } from 'react-native';

export default function App() {

const [valor, setValor] = useState(null)
const [percentual, setPercentual] = useState(null)
const [pessoas, setPessoas] = useState(null)
const [gorjeta, setGorjeta] = useState(null)
const [totalGorjeta, setTotalGorjeta] = useState(null)

const valorNumber = parseFloat(valor)
const percentualNumber = parseInt(percentual)
const pessoasNumber = parseInt(pessoas)
const gorjetaNumber = parseFloat(gorjeta)
const totalGorjetaNumber = parseFloat(totalGorjeta)

  return (
    <View style={styles.container}>

      <Text style={styles.textTitle}>Tip Calculator</Text>

      <View style={styles.viewSecundary}>

        <TextInput
          style={styles.textInput}
          placeholder='Valor'
          placeholderTextColor={'gray'}
          value={valor}
          onChangeText={setValor}
          keyboardType='numeric'
        />
        
        <TextInput
          style={styles.textInput}
          placeholder='Percentual'
          placeholderTextColor={'gray'}
          value={percentual}
          onChangeText={setPercentual}
          keyboardType='numeric'
        />

         <TextInput
          style={styles.textInput}
          placeholder='Pessoas'
          placeholderTextColor={'gray'}
          value={pessoas}
          onChangeText={setPessoas}
          keyboardType='numeric'
        />

        <Text style={styles.textResultado}>Valor da Gorjeta: R$ {gorjetaNumber ? gorjetaNumber : '...'}</Text>
        <Text style={styles.textResultado}>Valor total: R$ {totalGorjetaNumber ? totalGorjetaNumber : '...'}</Text>

      </View>
      
      <TouchableOpacity style={styles.buttonCalculator}
        onPress={() => {setGorjeta((((valorNumber * percentualNumber) / 100) / pessoasNumber).toFixed(2));
        setTotalGorjeta(((valorNumber * percentualNumber) / 100).toFixed(2))}}
      >
        <Text style={styles.textButton}>Calcular</Text>
      </TouchableOpacity> 

      <Text style={{color:'white', fontSize: 10, textAlign: 'center', marginTop: 40}}>v1 by igor</Text>

      <StatusBar barStyle='light-content' backgroundColor={'#101021'}/>
    </View>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#101021',
  },
  viewSecundary: {
    paddingTop: 100
  },
  textTitle: {
    color: 'white',
    fontSize: 18, 
    textAlign: 'center',
    paddingTop: 40,
    fontWeight: 'bold'
  },
  textInput: {
    color: '#e9e9e9',
    textAlign: 'left',
    paddingLeft: 15,
    width: 330,
    height: 60,
    left: '4%',
    borderRadius: 10,
    borderColor: 'white',
    borderWidth: 0.3,
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
  textResultado: {
    color: 'white',
    fontWeight: 'bold',
    textAlign:'center',
    fontSize: 16,
    paddingTop: 10
  }
});
