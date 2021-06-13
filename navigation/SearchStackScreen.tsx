import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Search from '../views/Search'
import Details from '../views/Details'

const SearchStack = createStackNavigator();

export default function SearchStackScreen() {
    return (
        <SearchStack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: '#f78050',
            },
            headerTitleStyle: {
                fontWeight: 'bold'
            },
            headerTintColor: 'white',
        }}>
            <SearchStack.Screen name="Search" component={Search} />
            <SearchStack.Screen name="Details" component={Details} />
        </SearchStack.Navigator>
    )
}