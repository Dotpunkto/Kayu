import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Details from '../views/Details';
import Scan from '../views/Scan';

const ScanStack = createStackNavigator();

export default function ScanStackScreen() {
    return (
        <ScanStack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: '#f78050',
            },
            headerTitleStyle: {
                fontWeight: 'bold'
            },
            headerTintColor: 'white',
        }}>
            <ScanStack.Screen name="Scan" component={Scan} />
            <ScanStack.Screen name="Details" component={Details} />
        </ScanStack.Navigator>
    )
}