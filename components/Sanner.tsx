import * as React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { BarCodeScanner } from 'expo-barcode-scanner'

export default function Scanner({ redirect }: any) {

    const [hasPermission, setHasPermission] = React.useState<boolean | null>(null)
    const [scanned, setScanned] = React.useState(false)

    React.useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync()

            setHasPermission(status === 'granted')
        })()
    }, [])

    const handleBarCodeScanned = ({ type, data }: any) => {
        setScanned(true)
        redirect(type, data)
    }

    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>
    }

    return (
        <View style={styles.container}>
            <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                type={'back'}
                style={StyleSheet.absoluteFillObject}
            />
            {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    barCodeView: {
        width: '100%',
        height: '100%',
        marginBottom: 40
    },
});