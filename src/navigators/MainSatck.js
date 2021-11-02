import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Text, Image} from 'react-native'
import HomeScreem from '../page/homeScreen'
import AboutScreen from '../page/AboutScreen'
const MainStack = createStackNavigator();

export default ()=>(
    <MainStack.Navigator >
        <MainStack.Screen name="home" component={HomeScreem} />
        <MainStack.Screen name="about" component={AboutScreen} options={({route})=>({            

                headerBackTitle:false,
                headerBackTitleVisible:false,
        })}/>
    </MainStack.Navigator>
);