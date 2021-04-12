//Importuri generale pentru React Native
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Dimensions } from 'react-native';

//import icons
import { Ionicons } from '@expo/vector-icons';

//Importuri pentru navigare
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//Importuri pentru file din project folder
import './src/screens/HomeScreen';
import HomeScreen from './src/screens/HomeScreen';

import './src/screens/RetetaScreen';
import RetetaScreen from './src/screens/RetetaScreen';

import './src/screens/AboutScreen';
import AboutScreen from './src/screens/AboutScreen';

import AdaugaNumeScreen from './src/screens/AdaugaNumeScreen';

import './src/screens/AdaugaDescriereScreen';
import AdaugaDescriereScreen from './src/screens/AdaugaDescriereScreen';

import './src/screens/AdaugaIngredienteScreen';
import AdaugaIngredienteScreen from './src/screens/AdaugaIngredienteScreen';

import './src/screens/AdaugaPasiScreen';
import AdaugaPasiScreen from './src/screens/AdaugaPasiScreen';

import './src/screens/ConfirmaRetetaScreen';
import ConfirmaRetetaScreen from './src/screens/ConfirmaRetetaScreen';

import './src/screens/RetetaIngredienteScreen';
import RetetaIngredienteScreen from './src/screens/RetetaIngredienteScreen';

import './src/screens/RetetaPasiScreen';
import RetetaPasiScreen from './src/screens/RetetaPasiScreen';

import './src/screens/RetetaCameraScreen';
import RetetaCameraScreen from './src/screens/RetetaCameraScreen';

import './src/screens/RetetaUploadPozaScreen';
import RetetaUploadPozaScreen from './src/screens/RetetaUploadPozaScreen';

//import db. am comentat partea asta pentru ca nu mai e hardcoded.
//import './dbHardcodat';
//  Aici nu e hardcodat, e json din json-server:
//  http://localhost:3000/arrayRetete

//Creez navigator

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const AdaugaStack = createStackNavigator();

const windowHeight = Dimensions.get('window').height;

export default function App() {
  return (

    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" options={{unmountOnBlur: true}}>
          {() => (
            <HomeStack.Navigator>
              <HomeStack.Screen name="HomeScreen" component={HomeScreen} options={{ title: 'Home' }}/>
              <HomeStack.Screen name="RetetaScreen" component={RetetaScreen} options={{ title: 'Reteta' }}/>
              <HomeStack.Screen name="RetetaIngredienteScreen" component={RetetaIngredienteScreen} options={{ title: 'Pregateste ingredientele' }}/>
              <HomeStack.Screen name="RetetaPasiScreen" component={RetetaPasiScreen} options={{ title: 'Asa prepari reteta:' }}/>
              <HomeStack.Screen name="RetetaCameraScreen" component={RetetaCameraScreen} options={{ title: 'Camera' }}/>
              <HomeStack.Screen name="RetetaUploadPozaScreen" component={RetetaUploadPozaScreen} options={{ title: 'Pune poza' }}/>
            </HomeStack.Navigator>
          )}
        </Tab.Screen>
        <Tab.Screen name="Adauga" options={{unmountOnBlur: true}}>
          {() => (
            <AdaugaStack.Navigator>
              <AdaugaStack.Screen name="AdaugaNumeScreen" component={AdaugaNumeScreen} options={{ title: 'Ce gatim?' }}/>
              <AdaugaStack.Screen name="AdaugaDescriereScreen" component={AdaugaDescriereScreen} options={{ title: 'O scurta descriere...' }}/>
              <AdaugaStack.Screen name="AdaugaIngredienteScreen" component={AdaugaIngredienteScreen} options={{ title: 'Ingrediente?' }}/>
              <AdaugaStack.Screen name="AdaugaPasiScreen" component={AdaugaPasiScreen} options={{ title: 'Pasi de preparare:' }}/>
              <AdaugaStack.Screen name="ConfirmaRetetaScreen" component={ConfirmaRetetaScreen} options={{ title: 'Confirma reteta' }}/>
            </AdaugaStack.Navigator>
          )}
        </Tab.Screen>
        <Tab.Screen name="Despre" component={AboutScreen} />
      </Tab.Navigator>
    </NavigationContainer>



  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lime',
  },
  stilTabNavigator: {
    color: 'red',
    backgroundColor: 'lime',
  }
});

