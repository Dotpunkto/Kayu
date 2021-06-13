import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, Image, View, Text } from 'react-native';

export default function Details({ route }: any) {

    const [detailProduct, setProduct] = useState<Product | null>(null)
    const { ProductCode } = route.params

    useEffect(() => {
        getProduct()
    }, [])

    const getProduct = async () => {
        const response = await axios.get<Product>("https://world.openfoodfacts.org/api/v0/product/" + ProductCode)
        const { product }: Product = response.data
        setProduct(product)
        try {
            const jsonValue = JSON.stringify(product)
            await AsyncStorage.setItem('@Products', jsonValue)
        } catch (e) {
            // saving error
        }
    };


    return (
        <View>
            {detailProduct === null ?
                <ActivityIndicator size="large" style={styles.loader} />
                :
                <>
                    <Image style={styles.img} source={{ uri: detailProduct.image_url }} />
                    <View style={styles.infContainer}>
                        <Text style={styles.title}>{detailProduct.product_name}</Text>
                        <View>
                            <Text style={styles.categories}>{detailProduct.categories}</Text>
                        </View>
                        <Text style={styles.nutriScore}>{detailProduct.nutriscore_grade} : {detailProduct.nutriscore_score}</Text>
                        <Text style={styles.quantity}>{detailProduct.quantity}</Text>
                    </View>
                </>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    loader: {
        backgroundColor: 'black',
        margin: '50%'
    },
    img: {
        width: '100%',
        height: 200,
        zIndex: 0
    },
    infContainer: {
        backgroundColor: '#f78050',
        height: '190%',
        borderRadius: 10,
        zIndex: 1,
        position: 'absolute',
        top: 160,
        right: 15,
        left: 15,
        bottom: 15
    },
    title: {
        width: '90%',
        textAlign: 'center',
        marginTop: 10,
        marginLeft: 15,
        marginRight: 15,
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    },
    nutriScore: {
        position: 'absolute',
        bottom: 10,
        right: 10,
        color: 'white',
        fontSize: 15
    },
    quantity: {
        position: 'absolute',
        bottom: 10,
        left: 10,
        color: 'white',
        fontSize: 15
    },
    categories: {
        margin: 40,
        color: 'white',
        fontSize: 15
    }
})