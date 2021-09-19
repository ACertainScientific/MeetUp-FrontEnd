import React from "react";
import { Button, View, Text, StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ContentNavigator from "./MainNavigator";
import AuthenticationNavigator from "./AuthenticationNavigator";

const RootNavigator = param => {
    const RootStack = createNativeStackNavigator()
    return (
        <RootStack.Navigator
            screenOptions={{
                headerShown: false,

            }}
        >
            <RootStack.Screen
                name="ContentNavigator"
                component={ContentNavigator}
                styles={styles.centered}
            />
            <RootStack.Screen
                name="AuthenticationNavigator"
                component={AuthenticationNavigator}
                styles={styles.centered}
            />
        </RootStack.Navigator>
    )
}

const styles = StyleSheet.create({
    centered: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
})

export default RootNavigator