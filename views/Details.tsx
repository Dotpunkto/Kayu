import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

export default function Details({ route }: any) {

    const [Product, SetProduct] = useState<Product | null>(null)
    const { ProductId } = route.params

    useEffect(() => {
        getProduct()
    }, [])

    const getProduct = async () => {
        const response = await axios.get<Product>("https://world.openfoodfacts.org/api/v0/product/" + ProductId)
        const product: Product = response.data
        SetProduct(product)
    };


    return (
        <View>
            {Product === null ?
                <ActivityIndicator size="large" />
                :
                <Text>Details View :::: {Product.code}</Text>
            }
        </View>
    )
}