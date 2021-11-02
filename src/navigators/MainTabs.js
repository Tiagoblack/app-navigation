import React from 'react';
import { Text, View, StyleSheet } from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { Ionicons, MaterialIcons,Entypo } from '@expo/vector-icons';
const Tab = createBottomTabNavigator()

import TabHomeScreen from '../page/TabHome';
import TabAboutScreen from '../page/TabAbout';
import ConfigTabBar from '../page/ConfigScreen';
import CustomTabBar from '../components/CustomTabBar';

export default () =>{

    let badgeNotification = 7


    return(
    <Tab.Navigator
        screenOptions={{
            tabBarStyle:{
                backgroundColor:'#333',
                borderTopColor:'transparent',
                shadowColor:'transparent',
                paddingBottom:5,
                paddingTop:5
            },

        }}
    >
       <Tab.Screen 
       name="Config" 
       component={ConfigTabBar} 
       options={{
           tabBarIcon: ()=>(
            <View>
                <Ionicons name="settings" size={24} color="black" />
                <View style={styles.badge}>
                    <Text style={styles.badgeText}>{badgeNotification}+</Text>
                </View>
            </View>
           ),

       }}/>

        <Tab.Screen 
        name="Tabhome" 
        component={TabHomeScreen}
        options={{
            tabBarIcon:()=>(
                <Entypo name="home" size={24} color="black" />
            ),
        }}
        />
        <Tab.Screen
         name="TabAbout" 
         component={TabAboutScreen}
            options={{
                tabBarIcon:()=>(
                    <Ionicons name="person" size={24} color="black" />
                )
            }}
         />
    </Tab.Navigator>
)}

const styles = StyleSheet.create({
    badge:{
        position: 'absolute',
        top: -3,
        right: -6,
        backgroundColor:'red',
        width: 15,
        height: 15,
        borderRadius:8,
        alignItems:'center',
        justifyContent:'center'
    },

    badgeText:{
        color: '#FFF',
        fontSize:9,
    }
})
