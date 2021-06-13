import { useNavigation } from '@react-navigation/native'
import axios from 'axios'
import React, { useState } from 'react'
import { Button, StyleSheet, View, Text } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import ProductList from '../components/ProductList'

export default function Search() {

    const [text, onChangeText] = useState<string>("Search Product")
    const [products, setProducts] = useState<Products | null>(null)
    const { navigate } = useNavigation()

    const search = async () => {
        const response = await axios.get<Product[]>("https://world.openfoodfacts.org/cgi/search.pl?search_terms=" + text + "&search_simple=1&action=process&json=1")
        const { products }: any = response.data;
        setProducts(products)
    }

    const redirect = (code: string) => {
        navigate('Details', { ProductCode: code })
    }

    return (
        <View>
            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    clearButtonMode={"while-editing"}
                    clearTextOnFocus={true}
                    returnKeyType={"search"}
                    value={text}
                />

                <View style={styles.btn}>
                    <Button
                        onPress={search}
                        title="Search"
                        color="white"
                    />
                </View>
            </View>
            <View style={styles.container}>
                {products === null ?
                    <Text style={styles.NoData}>No Data</Text>
                    :
                    <ProductList ProductList={products} showDetails={redirect} />
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        marginBottom: 0,
        borderWidth: 1,
        paddingLeft: 5,
        paddingRight: 5,
        backgroundColor: 'white',
    },
    container: {
        height: '82%',
        paddingBottom: 3,
        zIndex: 0,
    },
    searchContainer: {
        backgroundColor: '#f78050',
        shadowColor: '#848181',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 1,
        zIndex: 1,
    },
    NoData: {
        textAlign: 'center',
        fontSize: 18,
        marginTop: '50%',
        width: '100%',
    },
    btn: {
        margin: 60,
        marginBottom: 5,
        marginTop: 5,
        borderWidth: 1,
        borderBottomColor: 'black'
    }
})