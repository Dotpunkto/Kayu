import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Scanner from '../components/Sanner'

export default function Scan() {

    const { navigate } = useNavigation()

    const redirectToDetails = (type: string, data: string) => {
        navigate('Details', { ProductCode: data })
    }

    return (
        <View style={styles.container}>
            <Scanner redirect={redirectToDetails}></Scanner>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});