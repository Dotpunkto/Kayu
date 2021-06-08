import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { RouteProp } from '@react-navigation/native';
import { RottomTabParamList } from '../navigation/Navigation';

type HistoScreenNavigationProp = BottomTabScreenProps<RottomTabParamList, 'Histo'>;
type HistoScreenRouteProp = RouteProp<RottomTabParamList, 'Histo'>;

type Props = {
    route: HistoScreenRouteProp
    navigation: HistoScreenNavigationProp
};

export default function Histo({ route, navigation }: Props) {
    return (
        <View style={styles.container}>
            {console.log("qfeqzvze")}
            <Text>Histo View</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 200,
        flexDirection: "row",
        backgroundColor: "black"
    },
});
