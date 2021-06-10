import axios from 'axios'
import React, { useState } from 'react'
import { Button, FlatList, StyleSheet, View, Text } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import ProductList from '../components/ProductList'

export default function Search() {

    const [text, onChangeText] = useState<string>("fgbrtbtr")
    const [products, setProducts] = useState<Products | null>(null)

    const search = async () => {
        const response = await axios.get<Product[]>("https://world.openfoodfacts.org/cgi/search.pl?search_terms=" + text + "&search_simple=1&action=process&json=1")
        const { products }: any = response.data;
        setProducts(products)
    }

    return (
        <View>
            <View>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    clearButtonMode={"while-editing"}
                    clearTextOnFocus={true}
                    returnKeyType={"search"}
                    value={text}
                />
                <Button
                    onPress={search}
                    title="Search"
                    color="#841584"
                />
            </View>
            <View style={styles.container}>
                {products === null ?
                    <Text>refjokp^ôfjvrlkvnjkrt</Text>
                    :
                    <ProductList ProductList={products} />
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        paddingLeft: 5,
        paddingRight: 5,
    },
    container: {
        height: 200,
        backgroundColor: 'black'
    },
});