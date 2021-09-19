import React from "react";
import { Button, View, Text, StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


const AuthenticationNavigator = param => {
    const AuthenticationStack = createNativeStackNavigator()
    return (
        <AuthenticationStack.Navigator>
            <AuthenticationStack.Screen>
                {/* Put the Authentication Screen Here */}
            </AuthenticationStack.Screen>
        </AuthenticationStack.Navigator>
    )
}

export default AuthenticationNavigator