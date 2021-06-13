import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Profile from '../views/Profile';

const ProfileStack = createStackNavigator();

export default function ProfileStackScreen() {
    return (
        <ProfileStack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: '#f78050',
            },
            headerTitleStyle: {
                fontWeight: 'bold'
            },
            headerTintColor: 'white',
        }}>
            <ProfileStack.Screen name="Profile" component={Profile} />
        </ProfileStack.Navigator>
    )
}