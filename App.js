import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import React, { useState } from 'react';

export default function App() {

 

  const [first, setFirst] = useState(0);
  const [second, setSecond] = useState(0);
  const [result, setResult] = useState();
  const [results, setResults] = useState([]);
  const [text, setText] = useState('');

  const plusButton = () => {
    setResult(parseInt(first) + parseInt(second));
    setText(first + " + " + second + " = " + result)
    setSecond('');
    setFirst('');
    setResults([...results, { key: text }]);
  }
  const minusButton = () => {
    setResult(parseInt(first) - parseInt(second));
    setText(first + " - " + second + " = " + result)
    setSecond('');
    setFirst('');
    setResults([...results, { key: text }]);
  }
  

  return (
    <View style={styles.container}>

        <Text> Result: {result}</Text>
        <TextInput inputmode='numeric' keyboardType='number-pad' style={styles.input} onChangeText={text=> setFirst(text)} value={first} />
        <TextInput inputmode='numeric' keyboardType='number-pad' style={styles.input} onChangeText={text=> setSecond(text)} value={second} />
        
        <View style= {styles.operators}>
          <Button style={styles.button} title="+" onPress={plusButton} />
          <Button style={styles.button} title="-" onPress={minusButton} />
        </View>

      <Text> History</Text>
      <FlatList 
        data={results}
        renderItem={({ item }) =>
          <Text>{item.key}</Text>
        }
      />
      

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  input : {
    marginTop: 5,
    marginBottom: 5,
    padding: 5,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1
  },
  operators : {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  buttons: {
    width: '20%',
    borderColor: 'black',
    borderWith: 1,
    margin: 10, 
  }
});
