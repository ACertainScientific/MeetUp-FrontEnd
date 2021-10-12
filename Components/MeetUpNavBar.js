import React from "react";
import {
    Button,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TouchableOpacityBase,
} from "react-native";
import THEME_COLOR from "../Constants/Color";
import { useState } from "react";

const MeetUpNavBar = (param) => {
    const [shouldShow, setShouldShow] = useState(true);
    const clickHandler = () => {
        console.log('Onclick')
        if (param.navigateTo) {
            param.navigateTo();
        } else {
            return
        }
    };
    return (
        <View style={styles.toolbar}>
            {/* Icon view, insert our logo here */}
            <TouchableOpacity
                style={styles.toolbarTitle}
                onPress={clickHandler}
            >
                <View>
                    <Text style={styles.titleTextMeet}>
                        MEET
                        <Text style={styles.titleTextUp}>UP</Text>
                    </Text>
                </View>
            </TouchableOpacity>

            {/* Btn panel for the right hand side */}
            <View style={styles.btnpanel}>{param.children}</View>
        </View>
    );
};

const styles = StyleSheet.create({
    toolbar: {
        width: "100%",
        flexDirection: "row",
        borderBottomWidth: 3,
        borderColor: THEME_COLOR.main,
        justifyContent: "space-between",
    },
    toolbarTitle: {
        flex: 4,
    },
    btnpanel: {
        flexDirection: "row",
        paddingTop: "5px",
        paddingBottom: "5px",
        justifyContent: "space-between",
        flex: 1,
    },
    btn: {
        height: "20px",
        // width: "20px",
        margin: "10px",
        marginVertical: "10px",
        marginHorizontal: "20px",
    },
    titleTextMeet: {
        color: THEME_COLOR.subcolor,
        fontSize: 35,
        fontStyle: "italic",
        fontWeight: "bold",
    },
    titleTextUp: {
        color: THEME_COLOR.main,
        fontSize: 35,
        fontStyle: "italic",
        fontWeight: "bold",
    },
});

export default MeetUpNavBar;
