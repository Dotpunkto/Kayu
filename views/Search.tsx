import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { RouteProp } from '@react-navigation/native';
import { RottomTabParamList } from '../navigation/Navigation';

type SearchScreenNavigationProp = BottomTabScreenProps<RottomTabParamList, 'Search'>;
type SearchScreenRouteProp = RouteProp<RottomTabParamList, 'Search'>;

type Props = {
    route: SearchScreenRouteProp
    navigation: SearchScreenNavigationProp
};

export default function Search({ route, navigation }: Props) {
    return (
        <View>
            <Text>Search View</Text>
        </View>
    )
}