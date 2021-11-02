import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Text, Image} from 'react-native'
import HomeScreem from '../page/homeScreen'
import AboutScreen from '../page/AboutScreen'
const MainStack = createStackNavigator();

export default ()=>(
    <MainStack.Navigator
        screenOptions={{
            title:'tela principal',
            headerShown: true,
            headerTitleAlign:'center',
            headerStyle:{
                height:200,
                backgroundColor:'#00ff00'
            }

        }}    
    >
        <MainStack.Screen name="home" component={HomeScreem} options={{
            headerTitle: ()=> <Text>henrique</Text>,
            headerRight:()=> <Image
                source={{uri:'https://www.google.com.br/google.jpg'}}  
                style={{height:50, width:100}}
                resizeMode="contain"          
            />,
            headerLeft:()=> <Text>ops</Text>
        }} />
        <MainStack.Screen name="about" component={AboutScreen} options={({route})=>({            

                headerBackTitle:false,
                headerBackTitleVisible:false,
        })}/>
    </MainStack.Navigator>
);