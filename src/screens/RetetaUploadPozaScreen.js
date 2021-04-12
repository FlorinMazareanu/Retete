//Importuri generale pentru React Native
import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Button, TouchableOpacity, Platform, Image } from 'react-native';
import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';

//Importuri pentru navigare
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { urlRetete } from '../../urlRetete';

//importuri din file:


//aici definesc ecranul RetetaUploadPozaScreen
export default function RetetaUploadPozaScreen( {route, navigation} ){

    //fac variabile din ce a fost pasat din RetetaCameraScreen
    const idReteta = route.params.id;
    const numeReteta = route.params.numeReteta;
    const descriereReteta = route.params.descriereReteta;
    const ingredienteReteta = route.params.ingrediente;
    const pasiReteta = route.params.pasi;
    const pozaReteta = route.params.poza;

    let retetaDeInvatat = {
        id: idReteta,
        numeReteta: numeReteta,
        descriereReteta: descriereReteta,
        ingrediente: ingredienteReteta,
        pasi: pasiReteta,
        poza: pozaReteta
    };

    const [poza, setPoza] = useState(null);

    let urlReteteUpdate = urlRetete + idReteta;

    useEffect(() => {
      (async () => {
        if (Platform.OS !== 'web') {
          const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
          if (status !== 'granted') {
            alert('Trebuie activata permisiunea ca sa poti uploada poze!');
          }
        }
      })();
    }, []);

    const punePoza = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
  
      if (!result.cancelled) {
        setPoza(result.uri);  
        //retetaDeInvatat.poza = result.uri;   
      }
    };

    function confirmaPoza() {

      let retetaDeModificat = {
        id: idReteta,
        numeReteta: numeReteta,
        descriereReteta: descriereReteta,
        ingrediente: ingredienteReteta,
        pasi: pasiReteta,
        poza: poza
      };
      
      fetch(urlReteteUpdate, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(retetaDeModificat),
      })
      .then((data) => data.json())
      .then(console.log(poza))
      .then(navigation.navigate("HomeScreen"))

    }

    return (
      <View style={styles.container}>
        <Button title="Upload poza" onPress={punePoza} />
        {poza && <Image source={{ uri: poza }} style={{ width: 200, height: 200}} />}
        <Button title="Confirma poza" onPress={confirmaPoza} />
      </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    camera: {
      flex: 1,
    },
  });