import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./Navigation/RootNavigator";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";
import loginStatusReducer from "./redux_store/reducers/loginStatus";

const rootReducer = combineReducers({
    loginStatus: loginStatusReducer,
});
const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
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
