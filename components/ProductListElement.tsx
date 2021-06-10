import * as React from 'react'
import { StyleSheet, Text, View, Button, ListRenderItem } from 'react-native'

const ProductListElement: ListRenderItem<Product> = ({ item }) => {

    return (
        <View style={styles.container}>
            <Text>{item.code}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 200,
        backgroundColor: 'green'
    },
});

export default ProductListElement
