import React from 'react';
import { View, Button } from 'react-native';

function Currency_Info({ navigation }) {
    return (
        <View>
            <Button 
            title = "Currency Info"
            onPress = {() => navigation.goBack('Currency Info')}
            />
        </View>
    );
}

export default Currency_Info;