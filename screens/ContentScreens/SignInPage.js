// https://koprowski.it/react-native-form-validation-with-react-hook-form-usecontroller/

/*
    *** Please run
            npm install --save styled-components
            npm install react-hook-form
            npm install --save prop-types
        before expo
 */

import React, { useState, useEffect, useCallback } from "react";
import {
    Text,
    View,
    StyleSheet,
    Button,
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
import UserDBHandler from "../../Models/DatabaseRelated/UserDBHandler";
import { loginHandler } from "../../redux_store/actions/loginStatus";
import { useDispatch } from "react-redux";

const Wrapper = styled.View`
  padding: 5px;
`

const SignInPage = (param) => {
    let fetched_param = param.route.params.this_param;

    const [myWindowWidth, setMyWindowWidth] = useState(
        Dimensions.get("window").width
    );
    const [myWindowHeight, setMyWindowHeight] = useState(
        Dimensions.get("window").height
    );
    
    const dispatch = useDispatch();

    // Put all constants into Constants/Screens/SignInPageConstants (need to create this file)
    // keep all constants in variables
    const LOGIN_FIELDS = {
        username: 'username',
        password: 'password',
    };

    const [loginStatus, setLoginStatus] = useState(false);

    /* form will live inside an object returned by useForm() hook */
    const formMethods = useForm()

    const onSubmit = (form) => {
        // takes a whole form as an argument when it is valid
        console.log(form)
        // TO DO: login
        // try {
        //     UserDBHandler.post_login(form)
        //         .then((response) => {
        //             console.log("Post Login response:");
        //             console.log(response);
        //             var LoginData = response;
        //             if (LoginData.status == 200) {
        //                 console.log("Sign in success");
        //                 // setLoginStatus(true);
        //             }
        //         })
        //         .catch((error) => {
        //             // Error handeling in promise
        //             console.log("Error in post login:");
        //             console.error(error);
        //         });
        // } catch {
        //     // General error handeling
        //     console.log("Failed handeling post login");
        // }
        fetchLoginStatus(form.username, form.password)
        
    }

    const fetchLoginStatus = useCallback(async (username, password) => {
        // await dispatch(loginHandler("test1", "12345678"));
        await dispatch(loginHandler(username, password));
    }, [dispatch]);
  
    const onErrors = (errors) => {
        // handle errors in the form
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
                            {/* pass everything from formMethods to FormProvider using object spread operator */}
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
                                        message: 'Use at least 5 characters.',
                                        value: 5,
                                        },
                                    }}
                                    placeholder="Password"
                                    secureTextEntry={true}
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

                            {/* Not wrapping Button as a child of the FormProvider
                                Pressing GO Button will submit the whole form interact 
                                with a button using good old props so it doesn’t have 
                                to know everything that happens inside the form  */}
                            <View style={styles.backbtn}>
                                <Button
                                    title="GO"
                                    color={THEME_COLOR.main}
                                    // handleSubmit function takes two callbacks as 
                                    // arguments — onSubmit and onError
                                    onPress={formMethods.handleSubmit(onSubmit, onErrors)}
                                />
                            </View>
                        </Wrapper>
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
