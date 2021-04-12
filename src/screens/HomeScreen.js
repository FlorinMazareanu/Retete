//Importuri generale pentru React Native
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView, Button, TouchableOpacity, ActivityIndicator, Image, SegmentedControlIOS } from 'react-native';

//Importuri pentru navigare
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//Importuri din alte file
//import { arrayRetete } from '../../dbHardcodat';
import { urlRetete } from '../../urlRetete';
import { placeholderPozaReteta } from '../../urlRetete';



//aici definesc ecranul HomeScreen. {navigation} e un prop "predefinit"
export default function HomeScreen( {navigation} ){

    const [arrayRetete, setArrayRetete] = useState([]);
 
    useEffect(() => {
        fetch(urlRetete)
        .then((response) => response.json())
        .then((json) => setArrayRetete(json))
        .catch((error) => alert(error))
    });
    
    //declar o componenta <Reteta> si scriu ce are componenta in ea
    const Reteta = ({numeReteta, descriereReteta, poza}) => (
        <View style={styles.reteta}>
            <View style={styles.retetaText}>
                <Text style={styles.retetaNume}>{numeReteta}</Text> 
                <Text style={styles.retetaDescriere}>{descriereReteta}</Text>
            </View>
            <View>
                <Image style={styles.tinyLogo} source={{uri: poza}}/>
            </View> 
                   
        </View>
    );
    
    //functie care randeaza o <Reteta> din arrayRetete
    const renderItem = ({item}) => (
        <TouchableOpacity onPress={() => navigation.navigate('RetetaScreen', item)}>
            <Reteta numeReteta={item.numeReteta} descriereReteta={item.descriereReteta} poza={item.poza}/>
        </TouchableOpacity>
    );

    //aici randez ce imi arata in HomeScreen
    return (
            <View>
                <FlatList
                    data={arrayRetete}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </View>
    )
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    tab: {
      fontSize: 20,
      backgroundColor: 'lime',
      padding: 30,
    },
    tinyLogo: {
        width: 60,
        height: 60,
        marginRight: 12,
        borderRadius: 8,
        paddingTop: 10,
        paddingBottom: 10,
    },
    reteta: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        paddingTop: 10,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#053B28',
    },
    retetaText: {
        flex: 1,
    },
    retetaNume: {
        color: '#053B28',
        fontSize: 20,
        textTransform: 'capitalize',
        paddingLeft: 10,
    },
    retetaDescriere: {
        paddingLeft: 10,
    },
  });
