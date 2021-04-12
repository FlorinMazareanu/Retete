//Importuri generale pentru React Native
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';

//Importuri pentru navigare
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//importuri din file:
import retetaDeInvatat from './RetetaScreen';
import { TouchableOpacity } from 'react-native-gesture-handler';

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

    function navigheazasprePasi() {
        navigation.navigate("RetetaPasiScreen", retetaDeInvatat)
    }

    //aici randez ce arata in RetetaScreen
    return (
            <View style={styles.container}>
                <View style={styles.containerTitluNume}>
                    <Text>View luat din screenul RetetaScreen</Text>
                </View>
                <View style={styles.containerIngrediente}>
                    <FlatList 
                        data={ingredienteReteta}
                        renderItem={({item}) => (<Text>{item}</Text>)}
                        ItemSeparatorComponent={() => <Text>, </Text>}
                        horizontal={true}
                    />
                </View>
                <View style={styles.containerButon}>
                    <TouchableOpacity onPress={navigheazasprePasi}>
                        <Text>Am ingredientele</Text>
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
    containerIngrediente: {
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