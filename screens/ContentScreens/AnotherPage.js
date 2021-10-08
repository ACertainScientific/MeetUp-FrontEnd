import React, { useEffect, useCallback, useState } from "react";
import { Text, View, StyleSheet, Button, Alert, Dimensions } from "react-native";

import { useDispatch, useSelector } from "react-redux";

import SomeComponent from "../../Components/SampleComponents/SomeComponents";
import ImageButton from "../../Components/ImageButton";
import CustomizedButton from "../../Components/SampleComponents/CustomizedButton";
import { toggleLoginStatus, fetchLoginStatus } from "../../redux_store/actions/loginStatus";
import AutoResizableWindow from "../../Components/PageStyling/AutoResizableWindow";
import NavBar from "../../Components/NavBar";

const AnotherPage = param => {


    let fetched_param = param.route.params.this_param
    console.log(fetched_param)
    const currentLoginStatus = useSelector(state=>state.loginStatus.logged_in)
    
    const dispatch = useDispatch()
    const toggleLoginStatusHandler = useCallback(()=>{
        dispatch(toggleLoginStatus("Now Logged In"))
    }, [dispatch])

    const fetchBuildingHandler = async () => {
        await dispatch(fetchLoginStatus());
    };

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
                {/* <Button
                    title="GoBack!"
                    onPress={() => {
                        param.navigation.goBack()
                    }}
                />
                <View style={{width:'500px', alignItems:"center"}}>
                    <Text>This is another Page</Text>
                    <Text>Info passed from last page:</Text>
                    <Text>{fetched_param}</Text>
                </View>
                <View>
                    <Text>CurrentLoginStatus: </Text>
                    <View>{currentLoginStatus}</View>
                </View>
                <SomeComponent/> */}
    
                <ImageButton/>
                <View>
                    <Text>CurrentLoginStatus: </Text>
                    <View>{currentLoginStatus}</View>
                </View>
                <SomeComponent/>
                <Button
                title="ToggleLogin"
                onPress={()=>{
                    toggleLoginStatusHandler()
                }}
                />
                <CustomizedButton
                    title="SomeButton"
                    onPress={()=>{
                        console.log('pressed')
                        fetchBuildingHandler()
                    }}
                    style={{backgroundColor:"red"}}
                />
                </View>
            </View>
            
        )
    };
    return (
        <AutoResizableWindow resizing_max_width="800">
            {MainContent()}
        </AutoResizableWindow>
    );
    
}

const styles = StyleSheet.create({
    centered: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
})

export default AnotherPage