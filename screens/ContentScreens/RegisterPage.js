import React, { useEffect, useCallback } from "react";
import { Text, View, StyleSheet, Button, Dimensions } from "react-native";
import SomeComponent from "../../Components/SampleComponents/SomeComponents";
import NavBar from "../../Components/NavBar";
import AutoResizableWindow from "../../Components/PageStyling/AutoResizableWindow";
import { useState } from "react";

const RegisterPage = param => {

    let fetched_param = param.route.params.this_param
    console.log(fetched_param)  

    const [myWindowWidth, setMyWindowWidth] = useState(
        Dimensions.get("window").width
    );
    const [myWindowHeight, setMyWindowHeight] = useState(
        Dimensions.get("window").height
    );

    // Auto resizing
    useEffect(() => {
        const handleResize = () => {
            console.log("resizing");
            setMyWindowWidth(Dimensions.get("window").width);
            setMyWindowHeight(Dimensions.get("window").height);
            console.log("resizing");
        };

        Dimensions.addEventListener("change", handleResize);

        return () => {
            Dimensions.removeEventListener("change", handleResize);
        };
    });


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
        <AutoResizableWindow resizing_max_width="800">
            {MainContent()}
        </AutoResizableWindow>
    )
};

const styles = StyleSheet.create({
    centered: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
})

export default RegisterPage