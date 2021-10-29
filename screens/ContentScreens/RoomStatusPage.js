import React, { useEffect, useState } from "react";
import { View, Button, StyleSheet, Text } from "react-native";
import AutoResizableWindow from "../../Components/PageStyling/AutoResizableWindow";
import MeetUpNavBar from "../../Components/MeetUpNavBar";
import ElevatedCard from "../../Components/PageLineupComponents/ElevatedCard";
import THEME_COLOR from "../../Constants/Color";
import RoomStatusLabel from "../../Components/PageLineupComponents/RoomStatusLabel";
import { ROOM_STATUS_OCCUPIED, ROOM_STATUS_SANITIZED } from "../../Constants/RoomStatusConstants";
import RoomDBHandler from "../../Models/DatabaseRelated/RoomDBHandler";

const RoomStatusPage = (param) => {
    // Fetcing room id by the navigation param
    const roomId =  param.route.params.roomId
    console.log("Fetched room id: " + roomId)
    
    // Const 
    const [buildingId, setBuildingId] = useState("")
    const [buildingName, setBuildingName] = useState("")
    const [floor, setFloor] = useState("")
    const [roomName, setRoomName] = useState("")


    useEffect(()=>{
        RoomDBHandler.detail_room(roomId, "WanNeng").then(
            (response)=>{
                console.log(response)
                setBuildingId(response.buildingId)
                setBuildingName(response.buildingName)
                setFloor(response.floor)
                setRoomName(response.name)
            }
        ).catch(
            (error)=>{
                console.error("Encountered error in fetching room.")
                console.error(error)
            }
        )
    })


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
            <Text>This is the Room Status page</Text>
            <View style={{ alignItems: "center", justifyContent: "center" }}>
                <ElevatedCard>
                    <Text>Test CARD</Text>
                    <RoomStatusLabel currentStatus={ROOM_STATUS_OCCUPIED}></RoomStatusLabel>
                </ElevatedCard>
            </View>
        </AutoResizableWindow>
    );
};

const styles = StyleSheet.create({
    centered: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
});

export default RoomStatusPage;
