import React from 'react';
import { View, Button } from 'react-native';

function Currency_Name({ navigation }) {
    return (
        <View>
            <Button 
            title = "Currency Name"
            onPress = {() => navigation.navigate('Currency Name')}
            />
        </View>
    );
}

export default Currency_Name;