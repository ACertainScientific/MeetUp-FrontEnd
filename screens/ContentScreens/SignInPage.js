import React, { useState, useEffect } from "react";
import {
    Text,
    View,
    StyleSheet,
    Button,
    TextInput,
    TouchableOpacity,
    Dimensions,
} from "react-native";
import MeetUpNavBar from "../../Components/MeetUpNavBar";
import ElevatedCard from "../../Components/PageLineupComponents/ElevatedCard";
import AutoResizableWindow from "../../Components/PageStyling/AutoResizableWindow";
import THEME_COLOR from "../../Constants/Color";

const SignInPage = (param) => {
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

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return username.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
    }

    const MainContent = () => {
        return (
            <View>
                <MeetUpNavBar navigation={param.navigation} navigateTo={() => {
                param.navigation.navigate("MainPage")
                }}></MeetUpNavBar>
                <View style = {{
                    marginTop: "20px",
                    paddingBottom: "20px"
                }}>
                    <ElevatedCard>
                    <Text style={{ fontSize: 30 }}>Please sign-in</Text>
                    <View>
                        <TextInput
                            style={styles.userInput}
                            placeholder="Username"
                            onChangeText={(username) => setUsername(username)}
                            defaultValue={username}
                        />
                    </View>
                    <View>
                        <TextInput
                            style={styles.userInput}
                            placeholder="Password"
                            secureTextEntry={true}
                            onChangeText={(password) => setPassword(password)}
                        />
                    </View>

                    <TouchableOpacity
                        style={{
                            marginTop: "30px"
                        }}
                        onPress={() =>
                            param.navigation.navigate("ForgotPasswordPage")
                        }
                    >
                        <Text style={styles.forgot_button}>
                            Forgot Password?
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() =>
                            param.navigation.navigate("RegisterPage", {
                                this_param: "Sign Up!",
                            })
                        }
                    >
                        <Text style={styles.forgot_button}>
                            Not registered yet?
                        </Text>
                    </TouchableOpacity>

                    <View style={styles.backbtn}>
                        <Button
                            title="GO"
                            color={THEME_COLOR.main}
                            onPress={() => {
                                param.navigation.goBack();
                            }}
                        />
                    </View>
                    <View style={styles.backbtn}>
                        <Button
                            title="BACK"
                            onPress={() => {
                                param.navigation.goBack();
                            }}
                        />
                    </View>
                    </ElevatedCard>
                    
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
        marginTop: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    userInput: {
        borderRadius: 10,
        borderColor: THEME_COLOR.subcolor,
        borderWidth: 1,
        height: 45,
        marginTop: 12,
        padding: 10,
        alignSelf: "center",
        width: "150%",
    },
    backbtn: {
        marginTop: 12,
        width: "25%",
    },
    forgot_button: {
        height: 30,
        marginTop: 12,
        textDecorationLine: "underline",
    },
});

export default SignInPage;
