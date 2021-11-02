import React, {useLayoutEffect} from  'react';
import { View, Text, Button, TextInput } from'react-native';
import { useNavigation} from '@react-navigation/native';
import { useState } from 'react';

export default function HomeScreen (){

    const [ name, setName] = useState('');
    const [count, setCount] = useState(0);
    const navigation = useNavigation()


    const handleAboutclick = () =>{
        navigation.setOptions({
            title: name
        })
    }

    const handleAddUn = ()=>{
        setCount(e=>e+1)
    }

   useLayoutEffect(()=>{
       navigation.setOptions({
           headerTitle:count
       })

   },[count]) 

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerLeft:()=> <Button title="mais um" onPress={handleAddUn}/>
        })
    },[])

    const handleClick = () =>{
        navigation.setOptions({
            headerStyle:{
                backgroundColor:'#000'
            }
        })
    }

    return(
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <Text>tela home</Text>
            <TextInput
                style={{height:45, backgroundColor:'#888', width:'90%', paddingHorizontal:20, borderRadius:20}}
                onChangeText={t=> setName(t)}
                value={name}
            />
            <Button onPress={handleAboutclick} title="Ir para about"/>
            <Button onPress={handleClick} title="Ir para about"/>

        </View>
    );
}