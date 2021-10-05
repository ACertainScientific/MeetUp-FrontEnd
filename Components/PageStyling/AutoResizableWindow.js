import React from "react";
import { useState, useEffect, useCallback } from "react";
import { View, StyleSheet, Text, Button, Dimensions } from "react-native";

// This is a component that automatically resizes according to the Dimension of the window
// Main content can be placed directly into the element
// e.g.: <AutoresizableWindow> <Text>"Hello!"</Text>  </AutoresizableWindow>
const AutoResizableWindow = (param) => {
    const [myWindowWidth, setMyWindowWidth] = useState(
        Dimensions.get("window").width
    );
    const [myWindowHeight, setMyWindowHeight] = useState(
        Dimensions.get("window").height
    );

    // Resizing percentile, max width
    const resizing_fraction =
        param.resizing_fraction !== undefined
            ? Number.parseFloat(param.resizing_fraction)
            : 0.9;

    const resizing_max_width =
        param.resizing_max_width !== undefined
            ? Number.parseFloat(param.resizing_max_width)
            : 800;

    // Auto resizing
    useEffect(() => {
        const handleResize = () => {
            // console.log("resizing");
            setMyWindowWidth(Dimensions.get("window").width);
            setMyWindowHeight(Dimensions.get("window").height);
        };

        Dimensions.addEventListener("change", handleResize);

        return () => {
            Dimensions.removeEventListener("change", handleResize);
        };
    });


    if (myWindowWidth >= resizing_max_width / resizing_fraction) {
        return (
            <View style={styles.container}>
                <View style={{ width: "" + resizing_max_width + "px" }}>
                    {param.children}
                </View>
            </View>
        );
    } else {
        return (
            <View style={{...param.style} ,styles.container}>
                <View style={{ width: myWindowWidth * resizing_fraction }}>
                    {param.children}
                </View>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default AutoResizableWindow;
