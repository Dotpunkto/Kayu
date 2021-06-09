import React from 'react';
import Histo from '../views/Histo';
import { createStackNavigator } from '@react-navigation/stack';
import Details from '../views/Details';

const HistoStack = createStackNavigator();

export default function HistoStackScreen() {
    return (
        <HistoStack.Navigator>
            <HistoStack.Screen name="Histo" component={Histo} />
            <HistoStack.Screen name="Details" component={Details} />
        </HistoStack.Navigator>
    )
}