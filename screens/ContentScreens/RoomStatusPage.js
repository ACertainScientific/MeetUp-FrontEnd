import React, { useEffect, useState } from "react";
import { View, Button, StyleSheet, Text } from "react-native";
import AutoResizableWindow from "../../Components/PageStyling/AutoResizableWindow";
import MeetUpNavBar from "../../Components/MeetUpNavBar";
import ElevatedCard from "../../Components/PageLineupComponents/ElevatedCard";
import THEME_COLOR from "../../Constants/Color";
import RoomStatusLabel from "../../Components/PageLineupComponents/RoomStatusLabel";

import {
    ROOM_STATUS_OCCUPIED,
    ROOM_STATUS_SANITIZED,
} from "../../Constants/RoomStatusConstants";
import RoomDBHandler from "../../Models/DatabaseRelated/RoomDBHandler";

const RoomStatusPage = (param) => {
    // Fetcing room id by the navigation param
    const roomId = param.route.params.roomId;
    console.log("Fetched room id: " + roomId);

    // Const
    const [buildingId, setBuildingId] = useState("");
    const [buildingName, setBuildingName] = useState("");
    const [floor, setFloor] = useState("");
    const [roomName, setRoomName] = useState("");

    useEffect(() => {
        RoomDBHandler.detail_room(roomId, "WanNeng")
            .then((response) => {
                console.log(response);
                setBuildingId(response.buildingId);
                setBuildingName(response.buildingName);
                setFloor(response.floor);
                setRoomName(response.name);
            })
            .catch((error) => {
                console.error("Encountered error in fetching room.");
                console.error(error);
            });
    });
    const MainContent = () => {
    return (
        <AutoResizableWindow>
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
            <View style={styles.roomInfo}>
                <Text style={styles.roomInfoHint}>Status of Room </Text>
                <Text style={styles.roomInfoHintHL}>{roomName}</Text>
                <Text style={styles.roomInfoHint}> in Building </Text>
                <Text style={styles.roomInfoHintHL}>{buildingName}</Text>
                <Text style={styles.roomInfoHint}>, floor </Text>
                <Text style={styles.roomInfoHintHL}>{floor}</Text>
            </View>
            
            <View style={{ alignItems: "center", justifyContent: "center" }}>
                <ElevatedCard>
                    <Text>Room status</Text>
                    <RoomStatusLabel
                        currentStatus={ROOM_STATUS_OCCUPIED}
                    ></RoomStatusLabel>
                </ElevatedCard>
            </View>
        </AutoResizableWindow>
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

    roomInfo: {
        display: "flex",
        flexDirection: "row",
        alignContent:"center",
        justifyContent:"flex-end"
    },
    roomInfoHint: {
        color: THEME_COLOR.subcolor,
        fontSize: 20,
        fontStyle: "italic",
        fontWeight: "bold",
    },
    roomInfoHintHL: {
        color: THEME_COLOR.main,
        fontSize: 25,
        fontStyle: "italic",
        fontWeight: "bold",
    },
});

export default RoomStatusPage;