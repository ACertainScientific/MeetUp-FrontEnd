import React from "react";
import { View, Button, StyleSheet, Text } from "react-native";
import AutoResizableWindow from "../../Components/PageStyling/AutoResizableWindow";
import MeetUpNavBar from "../../Components/MeetUpNavBar";
import ElevatedCard from "../../Components/PageLineupComponents/ElevatedCard";
import THEME_COLOR from "../../Constants/Color";

const RoomStatusPage = (param) => {
    return (
        <AutoResizableWindow>
            <MeetUpNavBar navigation={param.navigation} navigateTo={() => {
                param.navigation.navigate("MainPage")
            }}>
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
