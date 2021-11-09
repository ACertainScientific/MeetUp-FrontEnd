import React, { useState, useEffect } from "react";
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

const Wrapper = styled.View`
  padding: 5px;
`

const RegisterPage = param => {

    let fetched_param = param.route.params.this_param
    // console.log(fetched_param)  

    const [myWindowWidth, setMyWindowWidth] = useState(
        Dimensions.get("window").width
    );
    const [myWindowHeight, setMyWindowHeight] = useState(
        Dimensions.get("window").height
    );

    // keep all constants in variables
    const LOGIN_FIELDS = {
        email: 'email',
        username: 'username',
        password: 'password',
        re_enter_password: 'password'
    };

    /* form will live inside an object returned by useForm() hook */
    const formMethods = useForm()

    const onSubmit = (form) => {
        // takes a whole form as an argument when it is valid
        console.log(form)
        // TO DO: Sign Up Post Request
        try {
            UserDBHandler.post_sign_up({email: form.email
                                        ,username: form.username
                                        , password: form.password
                                        , type: "1"})
                .then((response) => {
                    console.log("Post Sign Up response:");
                    console.log(response);
                    var SignUpData = response;
                    if (SignUpData.status == 200) {
                        console.log("Sign Up succeed");
                    }
                })
                .catch((error) => {
                    // Error handeling in promise
                    console.log("Error in post sign up:");
                    console.error(error);
                });
        } catch {
            // General error handeling
            console.log("Failed handeling post sign up");
        }
    }
  
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
                
                <View
                style = {{
                    marginTop: "20px",
                    paddingBottom: "20px",
                }}
                >
                    <ElevatedCard>
                    <View style={styles.centered}>
                        <Text style={{ fontFamily: "Cochin", fontSize: 22 }}>Let's Sign Up!</Text>
                        <Wrapper style={styles.centered}> 
                            {/* pass everything from formMethods to FormProvider using object spread operator */}
                            <FormProvider {...formMethods}>
                                <FormInput
                                    name={LOGIN_FIELDS.email}
                                    rules={{ 
                                        required: 'Email can NOT be empty!',
                                        pattern: {
                                            value: /\b[\w\\.+-]+@[\w\\.-]+\.\w{2,4}\b/,
                                            message: 'Must be formatted: abc@email.com',
                                        },
                                    }}
                                    placeholder="Email"
                                />
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
                                {/* TO DO: Implement Rule Checking for Matching Password and Re-enter Password */}
                                <FormInput
                                    name={LOGIN_FIELDS.re_enter_password}
                                    rules={{
                                        required: 'Password Re-enter can NOT be empty!',
                                        minLength: {
                                        message: 'Use at least 5 characters.',
                                        value: 5,
                                        },
                                    }}
                                    placeholder="Re-enter Password"
                                    secureTextEntry={true}
                                />
                            </FormProvider>

                            <TouchableOpacity 
                                onPress={() => param.navigation.navigate("ForgotPasswordPage")}
                            >
                                <Text style={styles.terms_button}>
                                    Terms and conditions
                                </Text>
                            </TouchableOpacity>

                            {/* Not wrapping Button as a child of the FormProvider
                                Pressing GO Button will submit the whole form interact 
                                with a button using good old props so it doesn’t have 
                                to know everything that happens inside the form  */}
                            <View style={styles.signupbtn}>
                                <Button
                                    title="Sign Up"
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
    signupbtn: {
        marginTop: 12,
        width: "30%",
    },
    backbtn: {
        marginTop: 12,
        width: "25%",
    },
    cardContainer: {
        alignItems: "center",
        justifyContent: "center"
    },
    terms_button: {
        height: 30,
        marginTop: 12,
        textDecorationLine: 'underline'
    },
})

export default RegisterPage