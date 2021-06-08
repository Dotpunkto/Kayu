import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { RouteProp } from '@react-navigation/native';
import { RottomTabParamList } from '../navigation/Navigation';

type ProfileScreenNavigationProp = BottomTabScreenProps<RottomTabParamList, 'Profile'>;
type ProfileScreenRouteProp = RouteProp<RottomTabParamList, 'Profile'>;

type Props = {
    route: ProfileScreenRouteProp
    navigation: ProfileScreenNavigationProp
};

export default function Profile({ route, navigation }: Props) {
    return (
        <View>
            <Text>Profile View</Text>
        </View>
    )
}