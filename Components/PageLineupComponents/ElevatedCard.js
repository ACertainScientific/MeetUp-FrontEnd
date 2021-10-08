import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { AutoPlatformShadow } from "../../Models/AutoPlatformShadow";

const ElevatedCard = (param) => {
    return (
        <View style={styles.mainStyle}>
            {param.children}
        </View>
    );
};

const styles = StyleSheet.create({
    mainStyle: {
        flex: 1,
        padding: "10px",
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 2,
        borderColor: "gray",
        borderRadius: "10px",
        shadowColor: "gray",
        shadowOpacity: 0.3,
        shadowOffset:{  width: 5,  height: 5,  },
    },
});

export default ElevatedCard;
