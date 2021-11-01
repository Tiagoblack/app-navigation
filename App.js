import 'react-native-gesture-handler';
import{NavigationContainer} from '@react-navigation/native'
import React from 'react';

import MainStack from './src/navigators/MainSatck';

export default function App(){


    return(
        <NavigationContainer>
            <MainStack/>
        </NavigationContainer>
    );
}