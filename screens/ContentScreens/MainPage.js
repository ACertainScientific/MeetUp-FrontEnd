import React, { useEffect, useCallback } from "react";
import {
    View,
    StyleSheet,
    Text,
    Dimensions,
    Button
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { useState } from "react";
import NavBar from "../../Components/NavBar";
import AutoResizableWindow from "../../Components/PageStyling/AutoResizableWindow";
import THEME_COLOR from "../../Constants/Color";

import { useDispatch, useSelector } from "react-redux";
import { RoomSanitized, RoomOccupied, RoomUnsanitized } from "../../redux_store/actions/roomStatus";

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

    const [myWindowWidth, setMyWindowWidth] = useState(
        Dimensions.get("window").width
    );
    const [myWindowHeight, setMyWindowHeight] = useState(
        Dimensions.get("window").height
    );

    {/* Test Redux */}
    // state.roomStatus from App.js 
    const currentRoomStatus = useSelector(state=>state.roomStatus.room_status)

    const dispatch = useDispatch()
    const roomSanitizedHandler = useCallback(()=>{
        dispatch(RoomSanitized())
    }, [dispatch])

    const roomOccupiedHandler = useCallback(()=>{
        dispatch(RoomOccupied())
    }, [dispatch])

    const roomUnsanitizedHandler = useCallback(()=>{
        dispatch(RoomUnsanitized())
    }, [dispatch])

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
                {/* The tool bar at the very top */}
                <NavBar navigation={param.navigation}>
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
                            param.navigation.navigate("AnotherPage", {
                                this_param: "HI!",
                            });
                        }}
                    ></Button>
                </NavBar>
                {/* End of the tool bar */}

                {/* The slogan bar */}
                <View style={styles.infoBar}>
                    <Text>Which room would you like to use today?</Text>
                    {/* Test Redux */}
                    <View style={{marginTop: 16}}>
                        <Text style={{fontFamily: "Cochin", fontSize: 16}}>CURRENT ROOM STATUS: </Text>
                        <View style={styles.roomStatusDisplay}> {currentRoomStatus} </View>
                    </View>
                    <View style={styles.buttonContainer}>
                        <Button
                        color='#FFD580'
                        title="Click To Leave the Room"
                        onPress={()=>{
                            roomOccupiedHandler()
                        }}
                        />
                        <Button 
                        color='#FF2400'
                        title="Click To Occupy the Room"
                        onPress={()=>{
                            roomSanitizedHandler()
                        }}
                        />
                        <Button
                        color='#AFE1AF'
                        title="Click To Sanitize the Room"
                        onPress={()=>{
                            roomUnsanitizedHandler()
                        }}
                        />
                    </View>
                </View>
                {/* End of the slogan bar */}

                {/* The selection bar */}
                <View style={styles.selectionBar}>
                    <View style={{ width: "20%" }}>
                        <DropDownPicker
                            open={open}
                            value={value}
                            items={items}
                            setOpen={setOpen}
                            setValue={setValue}
                            setItems={setItems}
                        />
                    </View>
                    <View style={{ width: "20%" }}>
                        <DropDownPicker
                            open={open}
                            value={value}
                            items={items}
                            setOpen={setOpen}
                            setValue={setValue}
                            setItems={setItems}
                        />
                    </View>
                    <View style={{ width: "20%" }}>
                        <DropDownPicker
                            open={open}
                            value={value}
                            items={items}
                            setOpen={setOpen}
                            setValue={setValue}
                            setItems={setItems}
                        />
                    </View>

                    <Text>ADD more dropdowns accordingly</Text>
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
        margin: "10px",
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
        borderWidth: 1,
        borderColor: "gray",
    },
    space: {
        width: 10
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    roomStatusDisplay: {
        fontSize: 18, 
        borderWidth: 1, 
        borderRadius: 6,
        paddingHorizontal: 12,
        marginVertical: 12,
        alignSelf: "center"
    },
    btn: {
        height: "20px",
        // width: "20px",
        margin: "10px",
        marginVertical: "10px",
        marginHorizontal: "20px"
    }
});

export default MainPage;
