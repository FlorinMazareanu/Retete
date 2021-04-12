//Importuri generale pentru React Native
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView, Button, TouchableOpacity, TextInput } from 'react-native';

//Importuri pentru navigare
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

//Importuri din alte file
//import { arrayRetete } from '../../dbHardcodat';
import { urlRetete } from '../../urlRetete';
import { placeholderPozaReteta } from '../../urlRetete';

const retetaNoua = {
  id: "",
  numeReteta: "",
  descriereReteta: "",
  ingrediente: [],
  pasi: [],
  poza: placeholderPozaReteta
};
export { retetaNoua };


//aici definesc ecranul AdaugaNumeScreen
export default function AdaugaNumeScreen( {route, navigation} ){

    //Aici numar retetele ca sa stiu ce id sa-i pun la reteta noua
    const [reteteDeNumarat, setReteteDeNumarat] = useState([]);
    let idRetetaNoua = 0;
    const [text, onChangeText] = React.useState("Nume reteta");

    //Functii onlick:

    function navigheazaSpreDescriere(){
      retetaNoua.numeReteta = text;
      navigation.navigate("AdaugaDescriereScreen", retetaNoua);
    }

    useEffect(() => {
      fetch(urlRetete)
      .then((response) => response.json())
      .then((json) => setReteteDeNumarat(json))
      .then(idRetetaNoua = reteteDeNumarat.length + 1)
      .then(retetaNoua.id = idRetetaNoua)
      .catch((error) => alert(error))
    });

    //aici randez ce imi arata in AdaugaNumeScreen
    return ( 
        <View style={styles.container}>
          <View style={styles.containerTitluNume}>
            <Text>Ce invatam sa gatim azi?</Text>
          </View>
          <View style={styles.containerInput}>
            <TextInput
              onChangeText={onChangeText}
              value={text}
            />
          </View>
          <View style={styles.containerButon}>
            <TouchableOpacity onPress={navigheazaSpreDescriere}>
              <Text>Confirma numele</Text>    
            </TouchableOpacity>
          </View>
        </View>
    )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
  },
  containerTitluNume: {
      flex: 2,
      backgroundColor: 'lime',
      alignItems: 'center',
      justifyContent: 'center',
  },
  containerInput: {
      flex: 1,
      justifyContent: 'center',
      flexDirection: 'row',
  },
  containerButon: {
      flex: 2,
      backgroundColor: 'lime',
      alignItems: 'center',
      justifyContent: 'center',
  }
});