import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const CustomizedButton = (param) => {
    return (
        <View style={styles.centered} {...param} >
            <TouchableOpacity onPress={param.onPress}>
                <View>
                    {param.children}
                    <Text>{param.title}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    centered: {
        height: "20px",
        width: "100px",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "gray",
        borderWidth: 1,
        borderRadius: 5,
    },
});

export default CustomizedButton;
