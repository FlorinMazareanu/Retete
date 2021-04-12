//Importuri generale pentru React Native
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView, Button, TouchableOpacity } from 'react-native';

//Importuri pentru navigare
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//Importuri din alte file
import { arrayRetete } from '../../dbHardcodat';



//aici definesc ecranul AboutScreen
export default function AboutScreen(){
    
    //aici randez ce imi arata in AboutScreen
    return (
        <View>
            <Text>View luat din screenul AboutScreen</Text>
            <Text>View luat din screenul AboutScreen</Text>
            <Text>View luat din screenul AboutScreen</Text>
            <Text>View luat din screenul AboutScreen</Text>
            <Text>View luat din screenul AboutScreen</Text>
            <Text>View luat din screenul AboutScreen</Text>
            <Text>View luat din screenul AboutScreen</Text>
            <Text>View luat din screenul AboutScreen</Text>
            <Text>View luat din screenul AboutScreen</Text>
            <Text>View luat din screenul AboutScreen</Text>
            <Text>View luat din screenul AboutScreen</Text>
            <Text>View luat din screenul AboutScreen</Text>
            <Text>View luat din screenul AboutScreen</Text>
            <Text>View luat din screenul AboutScreen</Text>
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
      fontSize: 40,
      backgroundColor: 'lime',
      padding: 30,
    },
  });