import React, { useEffect, useCallback } from "react";
import { View, StyleSheet, Text, Dimensions, Button } from "react-native";
import { useState } from "react";
import MeetUpNavBar from "../../Components/MeetUpNavBar";
import AutoResizableWindow from "../../Components/PageStyling/AutoResizableWindow";
import THEME_COLOR from "../../Constants/Color";
import BuildingDBHandler from "../../Models/DatabaseRelated/BuildingDBHandler";
import GroupedSelector from "../../Components/Selectors/GroupedSelector";
import ElevatedCard from "../../Components/PageLineupComponents/ElevatedCard";
import StylableButton from "../../Components/StylableButton";
import { useSelector } from "react-redux";

// const dummyItems = [
//     //name key is must.It is to show the text in front
//     { id: 1, name: 'angellist' },
//     { id: 2, name: 'codepen' },
//     { id: 3, name: 'envelope' },
//     { id: 4, name: 'etsy' },
//     { id: 5, name: 'facebook' },
//     { id: 6, name: 'foursquare' },
//     { id: 7, name: 'github-alt' },
//     { id: 8, name: 'github' },
//     { id: 9, name: 'gitlab' },
//     { id: 10, name: 'instagram' },
// ];

const MainPage = (param) => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: "DCC308", value: "DCC308" },
        { label: "DCC308", value: "DCC330" },
        { label: "LOW4510", value: "LOW4510" },
        { label: "SAGE3303", value: "SAGE3303" },
        { label: "SAGE3510", value: "SAGE3510" },
        { label: "WESTAUD", value: "WESTAUD" },
    ]);

    const MainContent = () => {
        const [serverData, setServerData] = useState([]);

        useEffect(() => {
            let buildingList = BuildingDBHandler.list_all_buildings("WanNeng");
            buildingList.then((data) => {
                console.log(data);
                setServerData(data);
            });
        }, []);
        
        
        return (
            <View>
                {/* The tool bar at the very top */}
                <MeetUpNavBar
                    navigation={param.navigation}
                    navigateTo={() => {
                        param.navigation.navigate("MainPage");
                    }}
                >
                    <StylableButton
                        color={THEME_COLOR.subcolor}
                        title="AnotherPage"
                        btnStyle={styles.btn}
                        style={{ marginLeft: "10px" }}
                        onPress={() => {
                            param.navigation.navigate("AnotherPage", {
                                this_param: "AnotherPage",
                            });
                        }}
                    ></StylableButton>
                    <StylableButton
                        color={THEME_COLOR.subcolor}
                        title="RoomStatusPage"
                        btnStyle={styles.btn}
                        style={{ marginLeft: "10px" }}
                        onPress={() => {
                            param.navigation.navigate("RoomStatusPage", {
                                this_param: "RoomStatusPage",
                            });
                        }}
                    ></StylableButton>

                    <StylableButton
                        color={THEME_COLOR.main}
                        title="SIGN IN"
                        btnStyle={styles.btn}
                        style={{ marginLeft: "10px" }}
                        onPress={() => {
                            param.navigation.navigate("SignInPage", {
                                this_param: "HI!",
                            });
                        }}
                    ></StylableButton>
                </MeetUpNavBar>
                {/* End of the tool bar */}

                {/* The slogan bar */}
                <View style={styles.infoBar}>
                    <Text>Which room would you like to use today?</Text>
                </View>
                {/* End of the slogan bar */}
                <StylableButton
                    color={THEME_COLOR.subcolor}
                    title="RoomSelectPage"
                    btnStyle={styles.btn}
                    style={{marginLeft:"10px"}}
                    onPress={() => {
                        param.navigation.navigate("RoomSelectPage", {
                            this_param: "RoomSelectPage",
                        });
                    }}
                ></StylableButton>
                {/* The selection bar */}
                <View style={styles.selectionBar}>
                    <ElevatedCard style={{ height: "80px" }}>
                        <GroupedSelector navigation={param.navigation} />
                    </ElevatedCard>
                </View>
            </View>
        );
    };

    return (
        <AutoResizableWindow resizing_max_width="800">
            {MainContent()}
        </AutoResizableWindow>
    );
};

const styles = StyleSheet.create({
    toolbar: {
        width: "100%",
        flexDirection: "row",
        borderBottomWidth: 3,
        borderColor: "#dc143c",
        justifyContent: "space-between",
    },
    toolbarTitle: {
        flex: 5,
    },
    btnpanel: {
        flexDirection: "row",
        paddingTop: "5px",
        paddingBottom: "5px",
        justifyContent: "space-between",
        flex: 2,
    },
    btn: {
        height: "20px",
        // width: "20px",
        marginVertical: "10px",
        marginHorizontal: "20px",
    },
    titleTextMeet: {
        color: "#808080",
        fontSize: 35,
        fontStyle: "italic",
        fontWeight: "bold",
    },
    titleTextUp: {
        color: "#dc143c",
        fontSize: 35,
        fontStyle: "italic",
        fontWeight: "bold",
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    infoBar: {
        width: "100%",
        paddingVertical: "200px",
        paddingHorizontal: "40px",
        alignItems: "center",
        justifyContent: "center",
    },
    selectionBar: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    space: {
        width: 10,
    },
    buttonContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    roomStatusDisplay: {
        fontSize: 18,
        borderWidth: 1,
        borderRadius: 6,
        paddingHorizontal: 12,
        marginVertical: 12,
        alignSelf: "center",
    },
});

export default MainPage;
