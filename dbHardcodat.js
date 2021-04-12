//Importuri generale pentru React Native
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//Importuri pentru navigare
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//aici definesc baza de date hardcodata
//dupa ce implementez db real, nu mai folosesc dbHardcodat.js
 
export const arrayRetete = [
{
    id: '1',
    numeReteta: 'pizza',
    descriereReteta: 'o reteta simpla',
    ingrediente: ['sos', 'branza', 'coca'],
    pasi: ['fa coca', 'pune la cuptor', 'scoate din cuptor'],
},
{
    id: '2',
    numeReteta: 'pasta',
    descriereReteta: '',
    ingrediente: [],
    pasi: [],
},
{
    id: '1',
    numeReteta: 'mamaliga',
    descriereReteta: '',
    ingrediente: [],
    pasi: [],
},
{
    id: '4',
    numeReteta: 'friptura',
    descriereReteta: '',
    ingrediente: [],
    pasi: [],
},
];
