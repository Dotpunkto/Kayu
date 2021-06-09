import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Histo from '../views/Histo';
import Search from '../views/Search';

const SearchStack = createStackNavigator();

export default function SearchStackScreen() {
    return (
        <SearchStack.Navigator>
            <SearchStack.Screen name="Search" component={Search} />
            <SearchStack.Screen name="Histo" component={Histo} />
        </SearchStack.Navigator>
    )
}