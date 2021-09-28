import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import SomeComponent from "../../Components/SomeComponents";
import NavBar from "../../Components/NavBar";
import AutoResizableWindow from "../../Components/AutoResizableWindow";


const RegisterPage = param => {

    let fetched_param = param.route.params.this_param
    console.log(fetched_param)

    const MainContent = () => {
        return (
            <View>
                <NavBar navigation={param.navigation}></NavBar>
                <View style={styles.centered}>
                <Button
                    title="GoBack!"
                    onPress={() => {
                        param.navigation.goBack()
                    }}
                />
                <View style={{width:'500px', alignItems:"center"}}>
                    <Text>This is register page</Text>
                    <Text>Info passed from last page:</Text>
                    <Text>{fetched_param}</Text>
                </View>
                
                <SomeComponent/>
                </View>
            </View>
        )
    }

    return (
        <AutoResizableWindow
        resizing_max_width="500"
        >
            {MainContent()}
        </AutoResizableWindow>
    )
}

const styles = StyleSheet.create({
    centered: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
})

export default RegisterPage