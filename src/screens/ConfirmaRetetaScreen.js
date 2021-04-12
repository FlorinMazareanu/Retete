//Importuri generale pentru React Native
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView, Button, TouchableOpacity } from 'react-native';

//Importuri pentru navigare
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//Importuri din alte file
//import { arrayRetete } from '../../dbHardcodat';
import { retetaNoua } from '../screens/AdaugaNumeScreen';
import { urlRetete } from '../../urlRetete';




//aici definesc ecranul ConfirmaRetetaScreen
export default function ConfirmaRetetaScreen( {route, navigation} ){
    
  const [arrayRetete, setArrayRetete] = useState([]);

  useEffect(() => {
    fetch(urlRetete)
    .then((response) => response.json())
    .then((json) => setArrayRetete(json))
    .catch((error) => alert(error))
  });

  function confirmaReteta() {
    console.log("reteta noua:");
    console.log(retetaNoua);
    arrayRetete.push(retetaNoua);
    console.log("ACUM E ASA:");
    console.log(arrayRetete);

    fetch(urlRetete, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(retetaNoua),
    })
    .then((data) => data.json())
    .then(navigation.navigate("HomeScreen"))
  }

    //aici randez ce imi arata in ConfirmaRetetaScreen
    return (
        <View style={styles.container}>
          <View>
            <Text>{retetaNoua.numeReteta}</Text>
          </View>
          <View>
            <Text>{retetaNoua.descriereReteta}</Text>
          </View>
          <View>
            <Text>{retetaNoua.ingrediente}</Text>
          </View>
          <View></View>
            <Text>{retetaNoua.pasi}</Text>
            <Button
              title="adauga reteta"
              onPress={confirmaReteta}
            />
        </View>
    )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
  },
  containerTitlu: {
      flex: 2,
      backgroundColor: 'lime',
      alignItems: 'center',
      justifyContent: 'center',
  },
  containerNrPas: {
      flex: 0.5,
      justifyContent: 'center',
      flexDirection: 'row',
  },
  containerInputPas: {
    flex: 0.5,
    justifyContent: 'center',
    flexDirection: 'row',
},
  containerButonAdauga: {
      flex: 1,
      backgroundColor: 'lime',
      alignItems: 'center',
      justifyContent: 'center',
  },
  containerButonConfirma: {
    flex: 1,
    backgroundColor: 'lime',
    alignItems: 'center',
    justifyContent: 'center',
},
});