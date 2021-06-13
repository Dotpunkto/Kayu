import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/core';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ProductList from '../components/ProductList';

export default function Histo() {
    const [products, setProducts] = useState<Products | null>(null)
    const { navigate } = useNavigation()

    useEffect(() => {
        (async () => {
            try {
                const jsonValue = await AsyncStorage.getItem('@Products')
                const productList: Products = jsonValue != null ? JSON.parse(jsonValue) : null;
                setProducts(productList)
                //console.log(productList)
            } catch (e) {
                // error reading value
            }
        })()
    }, [])

    const redirect = (code: string) => {
        navigate('Details', { ProductCode: code })
    }

    return (
        <View style={styles.container}>
            {products === null ?
                <Text>refjokp^ôfjvrlkvnjkrt</Text>
                :
                <ProductList ProductList={products} showDetails={redirect} />
            }
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
