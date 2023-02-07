import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, Button } from 'react-native';
import React, { useState } from 'react';
import Styles from '../Styles';

export default function Calculator( {navigation } ) {


  const [first, setFirst] = useState('');
  const [second, setSecond] = useState('');
  const [result, setResult] = useState('');
  const [results, setResults] = useState([]);



  const calculate = operator => {
    
    const number1 = Number(first);
    const number2 = Number(second);

    if (isNaN(number1) || isNaN(number2)) {
      setResult(0);
    } else {
      let result = 0;
      switch (operator) {
        case '+':
          result = number1 + number2;
          break;
        case '-':
          result = number1 - number2;
          break;
      }
      setResult(result);

      const text = `${number1} ${operator} ${number2} = ${result}`;
      setResults([...results, text]);
    }

    setFirst('');
    setSecond('');
    console.log(results)

  }

  return (
    <View style={Styles.container}>

        <Text style={Styles.header}> Result: {result}</Text>

        <TextInput style={Styles.textbox} 
          inputmode='numeric' keyboardType='number-pad' 
          onChangeText={text=> setFirst(text)} 
          value={first} />
        <TextInput style={Styles.textbox} inputmode='numeric' keyboardType='number-pad' onChangeText={text=> setSecond(text)} value={second} />
        
        <View style= {Styles.buttons}>
          <Button title="+" onPress={() => calculate('+')} />
          <Button title="-" onPress={() => calculate('-')} />
        </View>

        <Button
            title="History"
            onPress={ () => navigation.navigate('History', {results: results})}
        /> 
      <StatusBar style="auto" />
    </View>
  );
}
