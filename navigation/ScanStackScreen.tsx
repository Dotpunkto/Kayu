import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Details from '../views/Details';

const ScanStack = createStackNavigator();

export default function ScanStackScreen() {
    return (
        <ScanStack.Navigator>
            <ScanStack.Screen name="Details" component={Details} />
        </ScanStack.Navigator>
    )
}