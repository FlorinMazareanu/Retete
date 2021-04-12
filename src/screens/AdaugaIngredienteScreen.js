//Importuri generale pentru React Native
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView, Button, TouchableOpacity } from 'react-native';

//Importuri pentru navigare
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TextInput } from 'react-native-gesture-handler';

//Importuri din alte file
//import { arrayRetete } from '../../dbHardcodat';
import { retetaNoua } from '../screens/AdaugaNumeScreen';


//aici definesc ecranul AdaugaIngredienteScreen
export default function AdaugaIngredienteScreen( {route, navigation} ){
    
    let [textIngredient, setTextIngredient] = React.useState("Ingredient");
    let [textCantitate, setTextCantitate] = React.useState("Cantitate");
    let [ingrediente, setIngrediente] = React.useState([]);
    let ingredientNou = "";

    function adaugaIngredient() {
      ingredientNou = textIngredient + " (" + textCantitate + ")";
      retetaNoua.ingrediente.push(ingredientNou);
      setIngrediente([...ingrediente, ingredientNou]);
    }

    function navigheazaSprePasi() {
      navigation.navigate("AdaugaPasiScreen", retetaNoua);
    }
    
    //aici randez ce imi arata in AdaugaIngredienteScreen
    return (
        <View style={styles.container}>
            <View style={styles.containerTitlu}>
              <Text>De ce ingrediente avem nevoie si in ce cantitati?</Text>
            </View>
            <View style={styles.containerInputIngredient}>
              <TextInput
                onChangeText={(val) => setTextIngredient(val)}
                placeholder="ingredient"
                value={textIngredient} 
              />
            </View>
            <View style={styles.containerInputCantitate}>
              <TextInput
                onChangeText={(val) => setTextCantitate(val)}
                placeholder="cantitate"
                value={textCantitate} 
              />
            </View>
            <View style={styles.containerButonAdauga}>
              <TouchableOpacity onPress={adaugaIngredient}>
                <Text>Adauga ingredient</Text>
              </TouchableOpacity>           
            </View>
            <View style={styles.containerButonConfirma}>
              <TouchableOpacity onPress={navigheazaSprePasi}>
                <Text>Confirma lista de ingrediente</Text>
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
  containerInputIngredient: {
      flex: 0.5,
      justifyContent: 'center',
      flexDirection: 'row',
  },
  containerInputCantitate: {
    flex: 0.5,
    justifyContent: 'center',
    flexDirection: 'row',
},
  containerButonAdauga: {
      flex: 1,
      backgroundColor: 'lime',
      alignItems: 'center',
      justifyContent: 'center',
  },
  containerButonConfirma: {
    flex: 1,
    backgroundColor: 'lime',
    alignItems: 'center',
    justifyContent: 'center',
},
});