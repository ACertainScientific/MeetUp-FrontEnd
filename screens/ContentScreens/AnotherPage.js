import React, { useCallback } from "react";
import { Text, View, StyleSheet, Button, Alert } from "react-native";
import SomeComponent from "../../Components/SomeComponents";
import { useDispatch, useSelector } from "react-redux";
import CustomizedButton from "../../Components/CustomizedButton";
import { toggleLoginStatus } from "../../redux_store/actions/loginStatus";

const AnotherPage = param => {

    let fetched_param = param.route.params.this_param
    console.log(fetched_param)
    const currentLoginStatus = useSelector(state=>state.loginStatus.logged_in)
    
    const dispatch = useDispatch()
    const toggleLoginStatusHandler = useCallback(()=>{
        dispatch(toggleLoginStatus("Now Logged In"))
    }, [dispatch])

    return (
        <View style={styles.centered}>
            <Button
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
                }}
                style={{backgroundColor:"red"}}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    centered: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
})

export default AnotherPage