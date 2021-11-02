import React, { useState, useLayoutEffect,  } from 'react';
import { 
    View,
    Text,
    Button,
    TextInput,
    SafeAreaView,
    StyleSheet,
    FlatList
} from'react-native';
import {StatusBar} from 'expo-status-bar'
import { useNavigation} from '@react-navigation/native';

export default function HomeScreen (){

    const [receita, setReceita] = useState([]);
    const [input, setInput] = useState('')
    const navigation =  useNavigation();
    
    const hendleAdd = () => {
        setInput(e=>setReceita(e))
    } 

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerRight:()=><Button onPress={hendleAdd} title="adicionar"/>
        })
    },[])
    
    return(

        <SafeAreaView style={styles.container}>
            <StatusBar/>
            <TextInput
                placeholder="Digite uma receita"
                placeholderTextColor="#fff"
                style={styles.input} 
                onChangeText={(t)=>setInput(t)}
                value={input}
             />
             {receita.map((item, i)=>(
                 <View key={i}>
                      <Text style={{color:'#fff'}}>{item}</Text>
                 </View>
             ))}
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#000',
        flex: 1,
        paddingVertical:20,
        alignItems:'center'
    },
    input:{
        height: 45,
        width: '90%',
        backgroundColor:'rgb(100, 100, 100)',
        borderRadius:30,
        paddingHorizontal:10
    },
})