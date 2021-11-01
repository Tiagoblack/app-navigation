import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

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
        <MainStack.Screen name="home" component={HomeScreem} />
        <MainStack.Screen name="about" component={AboutScreen} options={({route})=>({            

                headerBackTitle:false,
                headerBackTitleVisible:false,
        })}/>
    </MainStack.Navigator>
);