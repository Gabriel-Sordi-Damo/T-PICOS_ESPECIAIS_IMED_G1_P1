

import { useLayoutEffect, useState } from "react";

import { StyleSheet, View, Button, TextInput } from "react-native";

export default function EfficiencyForm({ navigation }) {

    let [kmNumber, setKmNumber] = useState()
    let [litters, setLitters] = useState()

    function isFormValid() {
        const MIN_KM = 0
        const MIN_LITTER = 0
        if (kmNumber >= MIN_KM && litters >= MIN_LITTER)
            return false
        return true
    }

    function onSubmit() {
        let data = { kmNumber: kmNumber, litters: litters }
        navigation.push("Efficiency", { carData: data })
    }

    return (
        <View>
            <TextInput
                style={styles.input}
                onChangeText={setKmNumber}
                value={kmNumber}
                placeholder="KM percorridos"
                keyboardType="numeric"
            />
            <TextInput
                style={styles.input}
                onChangeText={setLitters}
                value={litters}
                placeholder="Litros gastos"
                keyboardType="numeric"
            />
            <Button
                title="Calcular"
                onPress={() => onSubmit()}
                disabled={isFormValid()}
            />
        </View>
    )

}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: "column"
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    }
})