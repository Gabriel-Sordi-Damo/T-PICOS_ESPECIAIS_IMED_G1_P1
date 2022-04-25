import { StyleSheet, View, Text, Button } from 'react-native';
import React, { useState, useLayoutEffect } from 'react'

export default function Efficiency(props) {


    let { navigation } = props
    let { carData } = props.route.params

    let [efficiency, setEfficiency] = useState()

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <Button onPress={() => navigation.pop()} title="Voltar" />
            ),
        })
        setEfficiency(calculateEfficiency())
    }, [])

    function calculateEfficiency() {
        return carData.kmNumber / carData.litters
    }

    return (
        <View style={styles.container}>
            <Text style={efficiency >= 12 ? styles.linhaAlvo : styles.linha}>
                A: Mais de 12 Km/l
            </Text>
            <Text style={efficiency >= 10 && efficiency < 12 ? styles.linhaAlvo : styles.linha}>
                B: Até 12 Km/l
            </Text>
            <Text style={efficiency >= 8 && efficiency < 10}>
                C: Até 10 Km/l
            </Text>
            <Text style={efficiency >= 4 && efficiency < 8 ? styles.linhaAlvo : styles.linha}>
                D: Até 8 Km/l
            </Text>
            <Text style={efficiency < 4 ? styles.linhaAlvo : styles.linha}>
                E: Até 4 Km/l
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "gray",
        margin: 5
    },
    linha: {
        flexDirection: "row",
    }, linhaAlvo: {
        flexDirection: "row",
        backgroundColor: "#03fcca"
    }
});