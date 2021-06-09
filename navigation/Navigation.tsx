import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HistoStackScreen from './HistoStackScreen';
import ScanStackScreen from './ScanStackScreen';
import SearchStackScreen from './SearchStackScreen';
import ProfileStackScreen from './ProfileStackScreen';

export type RootStackParamList = {
    Histo: undefined,
    Scan: undefined,
    Search: undefined,
    Profile: undefined,
}

const Stack = createBottomTabNavigator<RootStackParamList>();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Histo">
                <Stack.Screen name="Histo" component={HistoStackScreen} />
                <Stack.Screen name="Scan" component={ScanStackScreen} />
                <Stack.Screen name="Search" component={SearchStackScreen} />
                <Stack.Screen name="Profile" component={ProfileStackScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}