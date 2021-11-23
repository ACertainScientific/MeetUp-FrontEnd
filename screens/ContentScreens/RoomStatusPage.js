import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { View, Button, StyleSheet, Text } from "react-native";
import AutoResizableWindow from "../../Components/PageStyling/AutoResizableWindow";
import MeetUpNavBar from "../../Components/MeetUpNavBar";
import ElevatedCard from "../../Components/PageLineupComponents/ElevatedCard";
import THEME_COLOR from "../../Constants/Color";
import RoomStatusLabel from "../../Components/PageLineupComponents/RoomStatusLabel";

import {
    ROOM_STATUS_OCCUPIED,
    ROOM_STATUS_SANITIZED,
    ROOM_STATUS_VACANT,
} from "../../Constants/RoomStatusConstants";
import RoomDBHandler from "../../Models/DatabaseRelated/RoomDBHandler";
import StylableButton from "../../Components/StylableButton";
import AvailableTimes from "react-available-times";
import DateHandler from "../../Models/DateHandler";
import AppointmentDBHandler from "../../Models/DatabaseRelated/AppointmentDBHandler";
import { compose } from "redux";

const RoomStatusPage = (param) => {
    // Fetcing room id by the navigation param
    const roomId = param.route.params.roomId;
    console.log("Fetched room id: " + roomId);
    // Const
    const [buildingId, setBuildingId] = useState("");
    const [buildingName, setBuildingName] = useState("");
    const [floor, setFloor] = useState("");
    const [roomName, setRoomName] = useState("");

    const userLoginStatus = useSelector((state) => state.loginStatus);

    const handleEventsRequested = ({
        start: s,
        end: e,
        calendarId,
        callback,
    }) => {
        // eslint-disable-next-line no-console
        console.log("Fetching exsting event from ", s, " to ", e);
        console.log("Parsed S:");

        const start = DateHandler.getNumbericYMDSecondInDay(s);
        const end = DateHandler.getNumbericYMDSecondInDay(e);

        console.log(start)
        console.log(end)

        AppointmentDBHandler.list_appointment(
            userLoginStatus.token,
            1,
            10,
            2,
            "",
            start.Year,
            end.Year,
            start.Month,
            end.Month,
            start.Day,
            end.Day,
            0,
            86400
        ).then((result) => {
            console.log(result);

            const events = [];

            callback(events);

        });

        
    };

    useEffect(() => {
        RoomDBHandler.detail_room(roomId, userLoginStatus.token)
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
    }, [userLoginStatus]);

    return (
        <AutoResizableWindow resizing_max_width="800">
            <MeetUpNavBar
                navigation={param.navigation}
                navigateTo={() => {
                    param.navigation.navigate("MainPage");
                }}
            >
                <Text>{userLoginStatus.username}</Text>

                <StylableButton
                    color={THEME_COLOR.main}
                    title="LOG OUT"
                    btnStyle={styles.btn}
                    style={{ marginLeft: "10px" }}
                    onPress={() => {
                        param.navigation.navigate("SignInPage", {
                        });
                    }}
                ></StylableButton>
            </MeetUpNavBar>

            <View
                style={{
                    marginTop: "20px",
                    paddingBottom: "20px",
                }}
            >
                <ElevatedCard>
                    <View style={styles.roomInfo}>
                        <Text style={styles.roomInfoHint}>Status of Room </Text>
                        <Text style={styles.roomInfoHintHL}>[{roomName}]</Text>
                        <Text style={styles.roomInfoHint}> in Building </Text>
                        <Text style={styles.roomInfoHintHL}>
                            [{buildingName}]
                        </Text>
                        <Text style={styles.roomInfoHint}>, floor </Text>
                        <Text style={styles.roomInfoHintHL}>[{floor}]</Text>
                    </View>

                    <RoomStatusLabel
                        currentStatus={ROOM_STATUS_VACANT}
                    ></RoomStatusLabel>
                </ElevatedCard>
            </View>
            <View>
                <AvailableTimes
                    weekStartsOn="monday"
                    calendars={[
                        {
                            id: "work",
                            title: "Work",
                            foregroundColor: "#ff00ff",
                            backgroundColor: "#f0f0f0",
                            selected: true,
                        },
                    ]}
                    onChange={(selections) => {
                        selections.forEach(({ start, end }) => {
                            console.log("Start:", start, "End:", end);
                        });
                    }}
                    height={400}
                    recurring={false}
                    availableDays={[
                        "monday",
                        "tuesday",
                        "wednesday",
                        "thursday",
                        "friday",
                    ]}
                    availableHourRange={{ start: 9, end: 19 }}
                    onEventsRequested={handleEventsRequested}
                />
            </View>
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
        alignContent: "center",
        justifyContent: "flex-end",
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
