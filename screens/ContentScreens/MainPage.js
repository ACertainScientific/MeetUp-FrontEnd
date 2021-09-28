import React, { useEffect } from "react";
import {
    View,
    StyleSheet,
    Text,
    Dimensions,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { useState } from "react";
import NavBar from "../../Components/NavBar";
import AutoResizableWindow from "../../Components/AutoResizableWindow";

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
                <NavBar navigation={param.navigation}></NavBar>
                {/* End of the tool bar */}

                {/* The slogan bar */}
                <View style={styles.infoBar}>
                    <Text>Which room would you like to use today?</Text>
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
        resizing_max_width="800"
        >
            {MainContent()}
        </AutoResizableWindow>
    )

};

const styles = StyleSheet.create({
    toolbar: {
        width: "100%",
        flexDirection: "row",
        borderBottomWidth: 3,
        borderColor: "#dc143c",
        justifyContent: "space-between",
    },
    toolbarTitle:{
        flex: 5
    },
    btnpanel: {
        flexDirection: "row",
        paddingTop: "5px",
        paddingBottom: "5px",
        justifyContent: "space-between",
        flex: 2
    },
    btn: {
        height: "20px",
        // width: "20px",
        margin: "10px",
        marginVertical: "10px",
        marginHorizontal: "20px"
    },
    titleTextMeet: {
        color: '#808080',
        fontSize: 35,
        fontStyle: "italic",
        fontWeight: "bold"
    },
    titleTextUp: {
        color: '#dc143c',
        fontSize: 35,
        fontStyle: "italic",
        fontWeight: "bold"
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
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
    }
});

export default MainPage;
