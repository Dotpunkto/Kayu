import * as React from 'react'
import { StyleSheet, Text, View, Image, ListRenderItem } from 'react-native'

const ProductListElement: ListRenderItem<Product> = ({ product, children }) => {

    return (
        <View style={styles.container} key={product.code}>
            <View>
                <Image style={styles.img} source={{ uri: product.image_small_url }} />
            </View>
            <View>
                <View style={styles.labelContainer}>
                    <Text style={styles.label}>{product.product_name}</Text>
                    <Text style={styles.label}>Nutriscore : {product.nutriscore_data?.score}</Text>
                </View>
                {children}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        height: 100,
        backgroundColor: '#f78050',
        margin: 10,
        marginBottom: 15,
        marginTop: 5,
        shadowColor: '#848181',
        shadowOffset: { width: 4, height: 5 },
        shadowOpacity: 1
    },
    img: {
        width: 100,
        height: 100
    },
    label: {
        width: '60%',
        color: 'white',
        fontSize: 15,
    },
    labelContainer: {
        marginTop: 5,
        paddingLeft: 5,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
    }
});

export default ProductListElement
