import React, { useEffect } from "react";
import {
    View,
    StyleSheet,
    Text,
    Button,
    Dimensions,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { useState } from "react";
import AutoResizableWindow from "../../Components/AutoResizableWindow";

const MainPage = (param) => {



    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: "DCC308", value: "DCC308" },
        { label: "SAGE3510", value: "SAGE3510" },
        { label: "WESTAUD", value: "WESTAUD" },
    ]);

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
                {/* The tool bar at the very top */}
                <View style={styles.toolbar}>
                    {/* Icon view, insert our logo here */}
                    <View style={styles.toolbarTitle}>
                        <Text>MeetUp</Text>
                    </View>

                    {/* Btn panel for the right hand side */}
                    <View style={styles.btnpanel}>
                        <Button title="A Button" style={styles.btn}></Button>
                        <Button
                            title="GOTO Another Page"
                            style={styles.btn}
                            onPress={()=>{
                                param.navigation.
                                navigate("AnotherPage",{this_param:"HI!"})
                            }}
                        ></Button>
                    </View>
                </View>
                {/* End of the tool bar */}

                {/* The slogan bar */}
                <View style={styles.infoBar}>
                    <Text>The info panel, enter some text here!</Text>
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

    // if (myWindowWidth >= 889) {
    //     return (
    //         <View style={styles.container}>
    //             <View style={{ width: '800px' }}>{MainContent()}</View>
    //         </View>
    //     );
    // }
    // else {
    //     return (
    //         <View style={styles.container}>
    //             <View style={{ width: myWindowWidth * 0.9 }}>{MainContent()}</View>;
    //         </View>
    //     )
    // }

    return (
        <AutoResizableWindow
        resizing_max_width="500"
        >
            {MainContent()}
        </AutoResizableWindow>
    )

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },

    toolbar: {
        width: "100%",
        flexDirection: "row",
        borderBottomWidth: 2,
        borderColor: "Black",
        justifyContent: "space-between",
    },
    toolbarTitle:{
        flex:2
    },
    btnpanel: {
        flexDirection: "row",
        paddingTop: "10px",
        paddingBottom: "2px",
        justifyContent: "space-between",
        flex:1
    },
    btn: {
        height: "20px",
        // width: "20px",
        margin: "10px",
        marginVertical: "10px",
        marginHorizontal: "20px",
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
});

export default MainPage;
