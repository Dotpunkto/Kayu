import { DefaultTransition } from "@react-navigation/stack/lib/typescript/src/TransitionConfigs/TransitionPresets";
import React from "react";
import { FlatList, View, StyleSheet, Button } from "react-native";
import ProductListElement from "./ProductListElement";


const ProductList: React.FC<Products> = ({ ProductList, showDetails }) => {

    return (
        <>
            <FlatList
                style={styles.container}
                data={ProductList}
                renderItem={
                    ({ item }) =>
                        <ProductListElement product={item} >
                            <View style={styles.btn}>
                                <Button
                                    onPress={() => showDetails(item.code)}
                                    title="Show Details"
                                    color="white"
                                />
                            </View>
                        </ProductListElement>
                }
            />
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 5,
    },
    btn: {
        margin: 60,
        marginBottom: 5,
        marginTop: 5,
        borderWidth: 1,
        borderBottomColor: 'black',
        fontSize: 14,
        width: 150
    }
});

export default ProductList