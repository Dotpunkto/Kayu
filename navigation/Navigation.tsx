import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Histo from '../views/Histo';
import Scan from '../views/Scan';
import Search from '../views/Search';
import Profile from '../views/Profile';

export type RottomTabParamList = {
    Histo: undefined
    Scan: undefined
    Search: undefined
    Profile: { userId: string }
};

const Tab = createBottomTabNavigator<RottomTabParamList>();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName="Histo">
                <Tab.Screen name="Histo" component={Histo} />
                <Tab.Screen name="Scan" component={Scan} />
                <Tab.Screen name="Search" component={Search} />
                <Tab.Screen name="Profile" component={Profile} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}