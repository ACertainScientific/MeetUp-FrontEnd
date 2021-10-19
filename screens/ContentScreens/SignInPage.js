// https://koprowski.it/react-native-form-validation-with-react-hook-form-usecontroller/

/*
    *** Please run
            npm install --save styled-components
            npm install react-hook-form
            npm install --save prop-types
        before expo
 */

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
import AutoResizableWindow from "../../Components/PageStyling/AutoResizableWindow";
import THEME_COLOR from "../../Constants/Color";

import { FormProvider, useForm } from 'react-hook-form'
import styled from 'styled-components/native'
import { FormInput } from '../../Components/SignInHelpers/FormInput'
import ElevatedCard from "../../Components/PageLineupComponents/ElevatedCard";

const Wrapper = styled.View`
  padding: 5px;
`

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

    // const [username, setUsername] = useState("");
    // const [password, setPassword] = useState("");

    const LOGIN_FIELDS = {
        username: "username",
        password: 'password',
    };
      
    const formMethods = useForm()

    const onSubmit = (form) => {
      console.log(form)
    }
  
    const onErrors = (errors) => {
      console.warn(errors)
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

                    <View style={styles.centered}>
                        <Text style={{ fontFamily: "Cochin", fontSize: 22 }}>Let's Sign In!</Text>
                        <Wrapper style={styles.centered}> 
                            <FormProvider {...formMethods}>
                                <FormInput
                                    name={LOGIN_FIELDS.username}
                                    rules={{ 
                                        required: 'Username can NOT be empty!',
                                        minLength: {
                                            message: 'Use at least 3 characters.',
                                            value: 3,
                                            },
                                    }}
                                    placeholder="Username"
                                />
                                <FormInput
                                    name={LOGIN_FIELDS.password}
                                    rules={{
                                        required: 'Password can NOT be empty!',
                                        minLength: {
                                        message: 'Use at least 8 characters.',
                                        value: 8,
                                        },
                                    }}
                                    placeholder="Password"
                                />
                            </FormProvider>
                            <TouchableOpacity onPress={() =>
                                    param.navigation.navigate("ForgotPasswordPage")
                                }>
                                <Text style={styles.forgot_button}>
                                    Forgot Password?
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() =>
                                    param.navigation.navigate("RegisterPage", {
                                        this_param: "Sign Up!",
                                    })
                                }>
                                <Text style={styles.forgot_button}>
                                    Not Registered Yet?
                                </Text>
                            </TouchableOpacity>

                            <View style={styles.backbtn}>
                                <Button
                                    title="GO"
                                    color={THEME_COLOR.main}
                                    onPress={formMethods.handleSubmit(onSubmit, onErrors)}
                                />
                            </View>
                        </Wrapper>
                        <Text style={{ fontSize: 30 }}>Please sign-in</Text>
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
