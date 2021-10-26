import React, { useState, useEffect } from "react";
import {
    View, Button, StyleSheet, Text, Dimensions
} from "react-native";
import AutoResizableWindow from "../../Components/PageStyling/AutoResizableWindow";
import MeetUpNavBar from "../../Components/MeetUpNavBar";
import ElevatedCard from "../../Components/PageLineupComponents/ElevatedCard";
import THEME_COLOR from "../../Constants/Color";
import RoomStatusLabel from "../../Components/PageLineupComponents/RoomStatusLabel";
import { ROOM_STATUS_OCCUPIED, ROOM_STATUS_SANITIZED, ROOM_STATUS_VACANT } from "../../Constants/RoomStatusConstants";

const RoomStatusPage = (param) => {

    let fetched_param = param.route.params.this_param;
    console.log(fetched_param);

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
            <MeetUpNavBar
                navigation={param.navigation}
                navigateTo={() => {
                    param.navigation.navigate("MainPage");
                }}
            >
                <Button
                    color={THEME_COLOR.subcolor}
                    title="SIGN UP"
                    style={styles.btn}
                    onPress={() => {
                        param.navigation.navigate("RegisterPage", {
                            this_param: "SIGN UP!",
                        });
                    }}
                ></Button>
                <Button
                    color={THEME_COLOR.main}
                    title="SIGN IN"
                    style={styles.btn}
                    onPress={() => {
                        param.navigation.navigate("SignInPage", {
                            this_param: "HI!",
                        });
                    }}
                ></Button>
            </MeetUpNavBar>


            <View style = {{
                    marginTop: "20px",
                    paddingBottom: "20px"
                }}>
                <ElevatedCard>
                <Text style={{ fontSize: 22 }}>Darrin Communication Center 308</Text>
                <Text>Time: 4:00PM - 6:00PM</Text>
                <Text>Event: RCOS - MeetUp</Text>
                <RoomStatusLabel currentStatus={ROOM_STATUS_OCCUPIED}></RoomStatusLabel>
                </ElevatedCard>
            </View>
        </View>
        )
    }

    return (
        <AutoResizableWindow resizing_max_width="800">
            {MainContent()}
        </AutoResizableWindow>
    );
};

const styles = StyleSheet.create({
    centered: {
        marginTop: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    btn: {
        height: "20px",
        // width: "20px",
        margin: "10px",
        marginVertical: "10px",
        marginHorizontal: "20px",
    }
});

export default RoomStatusPage;
