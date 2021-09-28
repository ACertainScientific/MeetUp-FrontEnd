import React from "react";
import { Button, View, Text, StyleSheet } from "react-native";
import THEME_COLOR from "../Constants/Color";
import { useState } from "react";

const NavBar = param => {
    const [shouldShow, setShouldShow] = useState(true);
    return (
        <View style={styles.toolbar}>
            {/* Icon view, insert our logo here */}
            <View style={styles.toolbarTitle}>
                <Text style={styles.titleTextMeet}>MEET
                    <Text style={styles.titleTextUp}>UP</Text>
                </Text>
            </View>

            {/* Btn panel for the right hand side */}

            <View style={styles.btnpanel}>
                <Button
                    color="grey"
                    title="SIGN UP"
                    style={styles.btn}
                    onPress={()=>{
                        param.navigation.
                        navigate("RegisterPage",
                            {this_param:"SIGN UP!"}
                        )
                    }}
                ></Button>
                {/*<View style={styles.space} />*/}
                <Button
                    color={THEME_COLOR.main}
                    title="SIGN IN"
                    style={styles.btn}
                    onPress={()=>{
                        param.navigation.
                        navigate("AnotherPage",
                            {this_param:"HI!"}
                        )
                    }}
                ></Button>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    toolbar: {
        width: "100%",
        flexDirection: "row",
        borderBottomWidth: 3,
        borderColor: "#dc143c",
        justifyContent: "space-between",
    },
    toolbarTitle:{
        flex: 5
    },
    btnpanel: {
        flexDirection: "row",
        paddingTop: "5px",
        paddingBottom: "5px",
        justifyContent: "space-between",
        flex: 2
    },
    btn: {
        height: "20px",
        // width: "20px",
        margin: "10px",
        marginVertical: "10px",
        marginHorizontal: "20px"
    },
    titleTextMeet: {
        color: '#808080',
        fontSize: 35,
        fontStyle: "italic",
        fontWeight: "bold"
    },
    titleTextUp: {
        color: '#dc143c',
        fontSize: 35,
        fontStyle: "italic",
        fontWeight: "bold"
    }
})

export default NavBar