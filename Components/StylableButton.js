import React from "react";
import { View, Button, StyleSheet } from "react-native";

const StylableButton = (param) => {
    return (
        <View {...param} style={param.style}>
            <Button
                onPress={param.onPress}
                title={param.title}
                color={param.color}
                style={param.btnStyle}
            >
                {param.children}
            </Button>
        </View>
    );
};

const styles = StyleSheet.create({});

export default StylableButton;
