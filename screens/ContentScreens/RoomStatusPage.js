import React from "react";
import { View, Button, StyleSheet, Text } from "react-native";
import AutoResizableWindow from "../../Components/PageStyling/AutoResizableWindow";
import MeetUpNavBar from "../../Components/MeetUpNavBar";

import ElevatedCard from "../../Components/PageLineupComponents/ElevatedCard";

const RoomStatusPage = param =>{

    return (
        <AutoResizableWindow>
            <MeetUpNavBar navigation={param.navigation}>

            </MeetUpNavBar>
            <Text>
                This is the Room Status page
            </Text>
            <ElevatedCard>
                <Text>
                    Test CARD
                </Text>
            </ElevatedCard>
        </AutoResizableWindow>
    )
}

const styles = StyleSheet.create({
    centered:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    },
})

export default RoomStatusPage