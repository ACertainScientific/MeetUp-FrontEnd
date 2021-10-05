import React from "react";
import { Button, View, Text, StyleSheet } from "react-native";
import THEME_COLOR from "../../Constants/Color";

const SomeComponent = param => {
    return (
        <View style={styles.customized}>
            <Text style={{color:'white'}}>This is a customized component</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    customized: {
        backgroundColor: THEME_COLOR.main,
        width: "300px",
        height: "40px",
        borderRadius: "10px",
        justifyContent:'center',
        alignItems:"center",
    }
})

export default SomeComponent