import { DefaultTransition } from "@react-navigation/stack/lib/typescript/src/TransitionConfigs/TransitionPresets";
import React from "react";
import { FlatList, View, StyleSheet } from "react-native";
import ProductListElement from "./ProductListElement";


const ProductList: React.FC<Products> = ({ ProductList }) => {

    return (
        <>
            <FlatList
                style={styles.container}
                data={ProductList}
                renderItem={ProductListElement}
            />
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 200,
        backgroundColor: 'green'
    },
});

export default ProductList