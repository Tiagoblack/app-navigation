import React from  'react';
import { View, Text, Button } from'react-native';
import { useNavigation, useRoute} from '@react-navigation/native';

export default function AboutScreen (){

        const navigation  = useNavigation();
        const route = useRoute();
        const handleHomeClick = () =>{
            navigation.goBack();
        }

    return(
        <View>
            <Text>tela about {route.params.name}</Text>
            <Button onPress={handleHomeClick} title="Ir para home"/>
        </View>
    );
}