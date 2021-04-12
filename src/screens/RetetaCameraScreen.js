//Importuri generale pentru React Native
import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Button, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';

//Importuri pentru navigare
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//importuri din file:


//aici definesc ecranul RetetaScreen
export default function RetetaCameraScreen( {route, navigation} ){

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

    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [type, setType] = useState(Camera.Constants.Type.back);
  
    useEffect(() => {
      (async () => {
        const { status } = await Camera.requestPermissionsAsync();
        setHasPermission(status === 'granted');
      })();
    }, []);
  
    if (hasPermission === null) {
      return <View />;
    }
    if (hasPermission === false) {
      return <Text>No access to camera</Text>;
    }
  
    let handlePhoto = async () => {
        if(this.cameraRef){
          let photo = await this.cameraRef.current.takePictureAsync();
          console.log(photo);
          navigation.navigate("RetetaUploadPozaScreen", retetaDeInvatat);
        } 
        else {
          navigation.navigate("RetetaUploadPozaScreen", retetaDeInvatat);
        }
    }

    return (

      <View style={styles.container}>
        <Button title="Snap!" onPress={handlePhoto} />            
        <Camera style={styles.camera} type={type}>
          <View style={styles.buttonContainer}>
          </View>
        </Camera>
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

  