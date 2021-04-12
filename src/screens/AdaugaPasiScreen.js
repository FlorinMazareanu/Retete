//Importuri generale pentru React Native
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView, Button, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

//Importuri pentru navigare
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//Importuri din alte file
//import { arrayRetete } from '../../dbHardcodat';
import { retetaNoua } from '../screens/AdaugaNumeScreen';



//aici definesc ecranul AdaugaPasiScreen
export default function AdaugaPasiScreen( {route, navigation} ){

    let [pasNou, setPasNou] = React.useState("");
    let [nrPas, setNrPas] = React.useState(1);

    function adaugaPas() {
      retetaNoua.pasi.push(pasNou);
      setNrPas(nrPas+1);
    };

    function navigheazaSpreConfirm() {
      navigation.navigate("ConfirmaRetetaScreen", retetaNoua);
    }
    
    //aici randez ce imi arata in AdaugaPasiScreen
    return (
        <View>
            <Text>View luat din screenul AdaugaPasiScreen</Text>
            <Text>Pasul {nrPas}: </Text>
            <TextInput
              onChangeText={(val) => setPasNou(val)}
              placeholder="ce urmeaza?"
              value={pasNou}
            />
            <Button 
              title="urmatorul pas"
              onPress={adaugaPas}
            />
            <Text></Text>
            <Button 
              title="vezi reteta"
              onPress={navigheazaSpreConfirm}
            />
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
  containerNrPas: {
      flex: 0.5,
      justifyContent: 'center',
      flexDirection: 'row',
  },
  containerInputPas: {
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