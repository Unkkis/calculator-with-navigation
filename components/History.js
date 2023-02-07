import {Text, View, FlatList } from 'react-native';
import React from 'react';
import Styles from '../Styles';

export default function History({ route }) {
    const results = route.params.results;
    console.log(results)

    return (
        <View style={Styles.container}>
            <Text style={Styles.header}> All your past calculations here: </Text>
            <FlatList
            data={results}
            keyExtractor={ (item, index) => index}
            renderItem={({ item }) => {
            return <Text>{item}</Text>
            }
            }
            />
        </View>
  );
  
}
