import React, { useEffect, useState, useCallback } from "react";
import { Text, TextInput, View, StyleSheet, Button, Dimensions, TouchableOpacity} from "react-native";
import MeetUpNavBar from "../../Components/MeetUpNavBar";
import AutoResizableWindow from "../../Components/PageStyling/AutoResizableWindow";
import THEME_COLOR from "../../Constants/Color";

const RegisterPage = param => {

    let fetched_param = param.route.params.this_param
    console.log(fetched_param)  

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

    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [re_enter_password, setReEnterPassword] = useState('');

    function validateForm() {
        return email.length > 0 
        && username.length > 0 
        && password.length > 0
        && password == re_enter_password;
    }

    function handleSubmit(event) {
        event.preventDefault();
    }


    const MainContent = () => {
        return (
            <View>
                <MeetUpNavBar navigation={param.navigation}></MeetUpNavBar>
                <View style={styles.centered}>
                <Text style={{fontSize: 30}}>Please sign-up</Text>
                <View>
                    <TextInput style={styles.userInput}
                        placeholder="Email"
                        onChangeText={email => setEmail(email)}
                        defaultValue={email}
                    />
                </View>
                <View>
                    <TextInput style={styles.userInput}
                        placeholder="Username"
                        onChangeText={username => setUsername(username)}
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
                <View>
                    <TextInput
                        style={styles.userInput}
                        placeholder="Re-enter password"
                        secureTextEntry={true}
                        onChangeText={(re_enter_password) => setReEnterPassword(re_enter_password)}
                    />
                </View>
                <TouchableOpacity onPress={() => param.navigation.navigate("ForgotPasswordPage")}>
                    <Text style={styles.forgot_button}>Terms and conditions</Text>
                </TouchableOpacity>

                <View style={styles.backbtn}>
                    <Button 
                        title="SIGN UP"
                        color={THEME_COLOR.main}
                        onPress={() => {
                            param.navigation.goBack()
                        }}
                    />
                </View>
                    
                <View style={styles.backbtn}>
                    <Button 
                        title="BACK"
                        onPress={() => {
                            param.navigation.goBack()
                        }}
                    />
                </View>
                </View>
            </View>
        )
    }

    return (
        <AutoResizableWindow resizing_max_width="800">
            {MainContent()}
        </AutoResizableWindow>
    )
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
        width: '150%'
    },
    backbtn: {
        marginTop: 30,
        width: '25%'
    },
    forgot_button: {
        height: 30,
        marginTop: 12,
        textDecorationLine: 'underline'
    },
})

export default RegisterPage