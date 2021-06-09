import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Profile from '../views/Profile';

const ProfileStack = createStackNavigator();

export default function ProfileStackScreen() {
    return (
        <ProfileStack.Navigator>
            <ProfileStack.Screen name="Profile" component={Profile} />
        </ProfileStack.Navigator>
    )
}