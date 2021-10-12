import React, {useState} from "react";
import { Text, View, StyleSheet, Button, TextInput, TouchableOpacity } from "react-native";
import MeetUpNavBar from "../../Components/MeetUpNavBar";
import AutoResizableWindow from "../../Components/PageStyling/AutoResizableWindow";
import THEME_COLOR from "../../Constants/Color";


const ForgotPasswordPage = param => {

    const [email, setEmail] = useState('');

    function validateForm() {
        return email.length > 0;
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
                <View style={styles.centered}>
                    <View>
                        <TextInput style={styles.userInput}
                            placeholder="Email"
                            onChangeText={email => setEmail(email)}
                            defaultValue={email}
                        />
                    </View>

                    <View style={styles.backbtn}>
                        <Button 
                            title="Send Temporary Password via Email"
                            color={THEME_COLOR.main}
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
        resizing_max_width="500"
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
        marginTop: 30
    },
})

export default ForgotPasswordPage