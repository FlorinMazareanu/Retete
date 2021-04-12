//Importuri generale pentru React Native
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';

//Importuri pentru navigare
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native-gesture-handler';

//importuri din file:


//aici definesc ecranul RetetaScreen
export default function RetetaIngredienteScreen( {route, navigation} ){

    //fac variabile din ce a fost pasat din RetetaIngredienteScreen
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
        navigation.navigate("RetetaCameraScreen", retetaDeInvatat);
    }


    //aici randez ce arata in RetetaScreen
    return (
            <View style={styles.containerButon}>
                <View style={styles.containerTitluNume}>
                    <Text>Pasi de preparare:</Text>
                </View>
                <View style={styles.containerPasi}>
                    <FlatList 
                        data={pasiReteta}
                        renderItem={({ item, index}) => (
                        <View>
                            <Text>Pasul { index + 1 }: {item}</Text>
                        </View>
                        )}
                    />
                </View>
                <View style={styles.containerButon}>
                    <TouchableOpacity onPress={navigheazaSpreIngrediente}>
                        <Text>Am urmarit pasii</Text>
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
    containerPasi: {
        flex: 2,
        backgroundColor: 'green',
        justifyContent: 'center',
        flexDirection: 'row',

    },
    containerButon: {
        flex: 1,
        backgroundColor: 'lime',
        alignItems: 'center',
        justifyContent: 'center',
    }
  });