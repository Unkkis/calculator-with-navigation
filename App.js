import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import React, { useState } from 'react';

export default function App() {

  const [first, setFirst] = useState(0);
  const [second, setSecond] = useState(0);
  const [result, setResult] = useState();
  
  const plusButton = () => {
    setResult(parseInt(first) + parseInt(second));

  }
  const minusButton = () => {
    setResult(parseInt(first) - parseInt(second));
  }


  return (
    <View style={styles.container}>
      <View style={{flex:1, justifyContent: 'flex-end'}}>
        <Text> Result: {result}</Text>
        <TextInput inputmode='numeric' keyboardType='number-pad' style={styles.input} onChangeText={text=> setFirst(text)} value={first} />
        <TextInput inputmode='numeric' keyboardType='number-pad' style={styles.input} onChangeText={text=> setSecond(text)} value={second} />
      </View>
      <View style={{flex:1, flexDirection: 'row', alignItems: 'baseline' }}>
        <Button title="+" onPress={plusButton} />
        <Button title="-" onPress={minusButton} />
      
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    
  },
  input : {
    marginTop: 5,
    marginBottom: 5,
    padding: 5,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1
  }
});
