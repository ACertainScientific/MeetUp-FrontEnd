import React, { useEffect, useCallback, useState } from "react";
import {
    Text,
    View,
    StyleSheet,
    Button,
    Alert,
    Dimensions,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import ImageButton from "../../Components/ImageButton";
import CustomizedButton from "../../Components/SampleComponents/CustomizedButton";
import AutoResizableWindow from "../../Components/PageStyling/AutoResizableWindow";
import MeetUpNavBar from "../../Components/MeetUpNavBar";
import RoomDBHandler from "../../Models/DatabaseRelated/RoomDBHandler";
import { loginHandler } from "../../redux_store/actions/loginStatus";

const AnotherPage = (param) => {
    let fetched_param = param.route.params.this_param;
    console.log(fetched_param);
    // const currentLoginStatus = useSelector(
    //     (state) => state.loginStatus.logged_in
    // );

    const dispatch = useDispatch();
    const toggleLoginStatusHandler = useCallback(() => {
        dispatch(toggleLoginStatus("Now Logged In"));
    }, [dispatch]);

    const fetchLoginStatus = useCallback(async () => {
        // await dispatch(loginHandler("test1", "12345678"));
        await dispatch(loginHandler("string", "string"));
    }, [dispatch]);

    // const fetchLoginStatus = async () => {
    //     // Todo handle login status here
    //     await dispatch(loginHandler("string", "string"));
    // };

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
                <MeetUpNavBar navigation={param.navigation}></MeetUpNavBar>
                <View style={styles.centered}>
                    {/* <Button
                    title="GoBack!"
                    onPress={() => {
                        param.navigation.goBack()
                    }}
                />
                <View style={{width:'500px', alignItems:"center"}}>
                    <Text>This is another Page</Text>
                    <Text>Info passed from last page:</Text>
                    <Text>{fetched_param}</Text>
                </View>
                <View>
                    <Text>CurrentLoginStatus: </Text>
                    <View>{currentLoginStatus}</View>
                </View>
                <SomeComponent/> */}

                    <ImageButton />
                    {/* <View>
                        <Text>CurrentLoginStatus: </Text>
                        <View>{currentLoginStatus}</View>
                    </View> */}
                    {/* <SomeComponent /> */}
                    {/* <Button
                        title="ToggleLogin"
                        onPress={() => {
                            toggleLoginStatusHandler();
                        }}
                    /> */}
                    <CustomizedButton
                        title="SomeButton"
                        onPress={() => {
                            console.log("pressed");
                            fetchLoginStatus();
                        }}
                        style={{ backgroundColor: "red" }}
                    />
                    <Button
                        title="CheckDBACtion"
                        onPress={() => {
                            console.log("DB");
                            // console.log(GeneralDBHelper.GET_REQUEST())
                            // console.log(RoomDBHandler.list_room('',3,4,1,10,"WanNeng"))
                            console.log(
                                RoomDBHandler.detail_room(2, "WanNeng")
                            );
                        }}
                    ></Button>
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
    centered: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default AnotherPage;
