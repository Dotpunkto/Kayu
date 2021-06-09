import React from 'react';
import { useNavigation } from '@react-navigation/core';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Histo() {

    const { navigate } = useNavigation()

    return (
        <View style={styles.container}>
            <Text>Histo View</Text>
            <Button
                onPress={() => navigate('Details')}
                title="Go Details"
                color="#841584"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 200,
        flexDirection: "row",
    },
});
