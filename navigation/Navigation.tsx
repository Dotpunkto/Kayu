import React from 'react'
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { FontAwesome5, AntDesign } from '@expo/vector-icons';
import HistoStackScreen from './HistoStackScreen'
import ScanStackScreen from './ScanStackScreen'
import SearchStackScreen from './SearchStackScreen'
import ProfileStackScreen from './ProfileStackScreen'

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
            <Stack.Navigator
                initialRouteName="Histo"
                tabBarOptions={{
                    activeTintColor: 'white',
                    inactiveTintColor: 'black',
                    style: {
                        backgroundColor: '#f78050',
                    },
                }}
            >
                <Stack.Screen name="Histo" component={HistoStackScreen}
                    options={{
                        tabBarIcon: ({ color }) => {
                            return <FontAwesome5 name="history" size={20} color={color} />
                        },
                    }}
                />
                <Stack.Screen name="Scan" component={ScanStackScreen}
                    options={{
                        tabBarIcon: ({ color }) => {
                            return <FontAwesome5 name="barcode" size={20} color={color} />
                        },
                    }}
                />
                <Stack.Screen name="Search" component={SearchStackScreen}
                    options={{
                        tabBarIcon: ({ color }) => {
                            return <FontAwesome5 name="search" size={20} color={color} />
                        },
                    }}
                />
                <Stack.Screen name="Profile" component={ProfileStackScreen}
                    options={{
                        tabBarIcon: ({ color }) => {
                            return <AntDesign name="profile" size={20} color={color} />
                        },
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}