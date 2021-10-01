import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./Navigation/RootNavigator";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import loginStatusReducer from "./redux_store/reducers/loginStatus";


export default function App() {
    const rootReducer = combineReducers({
        loginStatus: loginStatusReducer,
    });

    const store = createStore(rootReducer);

    return (
        <View style={styles.container}>
            <Provider store={store}>
                <NavigationContainer>
                    <RootNavigator />
                </NavigationContainer>
            </Provider>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
