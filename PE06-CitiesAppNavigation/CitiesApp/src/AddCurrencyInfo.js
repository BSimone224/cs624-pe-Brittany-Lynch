import React from 'react';
import { createStackNavigator }  from '@react-navigation/stack';
import Currency_Name from './Countries/Currency_Name';
import Currency_Info from './Countries/Currency_Info';

const Stack = createStackNavigator();

function StackNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Currency Name" component={Currency_Name} />
            <Stack.Screen name="Currency Info" component={Currency_Info} />
        </Stack.Navigator>
    )
}

export default StackNavigator;