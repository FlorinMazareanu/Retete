//Importuri generale pentru React Native
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList, Button, TouchableOpacity } from 'react-native';

//Importuri pentru navigare
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//importuri din file:


//aici definesc ecranul RetetaScreen
export default function RetetaScreen( {route, navigation} ){

    //fac variabile din ce a fost pasat din HomeScreen
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

    function navigheazaSpreIngrediente() {
        navigation.navigate("RetetaIngredienteScreen", retetaDeInvatat);
    }


    //aici randez ce arata in RetetaScreen
    return (
            <View style={styles.container}>
                <View style={styles.containerTitluNume}>
                    <Text>Azi invatam sa gatim:</Text>
                    <Text>{numeReteta}</Text>
                </View>
                <View style={styles.containerDescriere}>
                    <Text>{descriereReteta}</Text>
                </View>               
                <View style={styles.containerButon}> 
                    <TouchableOpacity onPress={navigheazaSpreIngrediente}>
                        <Text>Start</Text>
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
        flex: 1,
        backgroundColor: 'lime',
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerDescriere: {
        flex: 2,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerButon: {
        flex: 1,
        backgroundColor: 'lime',
        alignItems: 'center',
        justifyContent: 'center',
    }
  });