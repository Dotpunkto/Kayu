import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { RouteProp } from '@react-navigation/native';
import { RottomTabParamList } from '../navigation/Navigation';

type ScanScreenNavigationProp = BottomTabScreenProps<RottomTabParamList, 'Scan'>;
type ScanScreenRouteProp = RouteProp<RottomTabParamList, 'Scan'>;

type Props = {
    route: ScanScreenRouteProp
    navigation: ScanScreenNavigationProp
};

export default function Scan({ route, navigation }: Props) {
    return (
        <View>
            <Text>Scan View</Text>
        </View>
    )
}