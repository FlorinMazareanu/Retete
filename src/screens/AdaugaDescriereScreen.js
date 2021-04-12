//Importuri generale pentru React Native
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView, Button, TouchableOpacity } from 'react-native';

//Importuri pentru navigare
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//Importuri din alte file
//import { arrayRetete } from '../../dbHardcodat';
import { retetaNoua } from '../screens/AdaugaNumeScreen';
import { TextInput } from 'react-native-gesture-handler';


//aici definesc ecranul AdaugaDescriereScreen
export default function AdaugaDescriereScreen( {route, navigation} ){
    
    const numeReteta = route.params.numeReteta;
    const id = route.params.id;

    const [text, onChangeText] = React.useState("Descriere");

    //functie descriere
    function navigheazaSpreIngrediente() {
      retetaNoua.descriereReteta = text;
      navigation.navigate("AdaugaIngredienteScreen", retetaNoua);
    }

    //aici randez ce imi arata in AdaugaDescriereScreen
    return (
        <View style={styles.container}>
          <View style={styles.containerTitlu}>
            <Text>Adauga o scurta descriere...</Text>
          </View>
          <View style={styles.containerInput}>
            <TextInput 
              onChangeText={onChangeText}
              value={text}
            />
          </View>
          <View style={styles.containerButon}>
            <TouchableOpacity onPress={navigheazaSpreIngrediente}>
              <Text>Confirma descrierea</Text>
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
  containerTitlu: {
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