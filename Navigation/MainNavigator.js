import React from "react";
import { Button, View, Text, StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainPage from "../screens/ContentScreens/MainPage";
import AnotherPage from "../screens/ContentScreens/AnotherPage";
import RegisterPage from "../screens/ContentScreens/RegisterPage";
import SignInPage from "../screens/ContentScreens/SignInPage";
import ForgotPasswordPage from "../screens/ContentScreens/ForgotPasswordPage";
import RoomStatusPage from "../screens/ContentScreens/RoomStatusPage";

const ContentNavigator = (param) => {
    const ContantStack = createNativeStackNavigator();

    return (
        <ContantStack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <ContantStack.Screen
                styles={styles.centered}
                name="MainPage"
                component={MainPage}
            />
            <ContantStack.Screen
                styles={styles.centered}
                name="AnotherPage"
                component={AnotherPage}
            />
            <ContantStack.Screen
                styles={styles.centered}
                name="RegisterPage"
                component={RegisterPage}
            />
            <ContantStack.Screen
                styles={styles.centered}
                name="SignInPage"
                component={SignInPage}
            />
            <ContantStack.Screen
                styles={styles.centered}
                name="ForgotPasswordPage"
                component={ForgotPasswordPage}
            />
            <ContantStack.Screen
                styles={styles.centered}
                name="RoomStatusPage"
                component={RoomStatusPage}
            />
        </ContantStack.Navigator>
    );
};

const styles = StyleSheet.create({
    centered: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default ContentNavigator;
