import React, {useState} from "react";
import { Text, View, StyleSheet, Button, TextInput, TouchableOpacity } from "react-native";
import MeetUpNavBar from "../../Components/MeetUpNavBar";
import AutoResizableWindow from "../../Components/PageStyling/AutoResizableWindow";
import THEME_COLOR from "../../Constants/Color";


const SignInPage = param => {

    let fetched_param = param.route.params.this_param
    console.log(fetched_param)  

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function validateForm() {
        return username.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
    }

    const MainContent = () => {
        return (
            <View>
                <MeetUpNavBar navigation={param.navigation}></MeetUpNavBar>
                <View style={styles.centered}>
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

                    <TouchableOpacity>
                        <Text style={styles.forgot_button}>Forgot Password?</Text>
                    </TouchableOpacity>

                    <View style={styles.backbtn}>
                        <Button 
                            title="GO!"
                            color={THEME_COLOR.main}
                            onPress={() => {
                                param.navigation.goBack()
                            }}
                        />
                    </View>
                        
                    <View style={styles.backbtn}>
                        <Button 
                            title="GO Back!"
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
        <AutoResizableWindow
        resizing_max_width="800"
        >
            {MainContent()}
        </AutoResizableWindow>
    )
}

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
    },
})

export default SignInPage