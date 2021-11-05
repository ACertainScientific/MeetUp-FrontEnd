import React, { useState, useEffect } from "react";
import {
    View,
    StyleSheet,
    Button,
    Dimensions,
} from "react-native";
import MeetUpNavBar from "../../Components/MeetUpNavBar";
import AutoResizableWindow from "../../Components/PageStyling/AutoResizableWindow";
import THEME_COLOR from "../../Constants/Color";

import { FormProvider, useForm } from 'react-hook-form'
import { FormInput } from '../../Components/SignInHelpers/FormInput'
import ElevatedCard from "../../Components/PageLineupComponents/ElevatedCard";

const ForgotPasswordPage = (param) => {

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

    // keep all constants in variables
    const LOGIN_FIELDS = {
        email: 'email'
    };

    /* form will live inside an object returned by useForm() hook */
    const formMethods = useForm()

    const onSubmit = (form) => {
        // takes a whole form as an argument when it is valid
        console.log(form)

        // try {
        //     UserDBHandler.post_forgotpsw(form)
        //         .then((response) => {
        //             console.log("Post Forgot Passsword response:");
        //             console.log(response);
        //             var ForgotpswData = response;
        //             if (ForgotpswDat.status == 200) {
        //                 console.log("Send password success");
        //                 // setLoginStatus(true);
        //             }
        //         })
        //         .catch((error) => {
        //             // Error handeling in promise
        //             console.log("Error in post forgot password:");
        //             console.error(error);
        //         });
        // } catch {
        //     // General error handeling
        //     console.log("Failed handeling post forgot password");
        // }
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
                <View style = {{
                    marginTop: "20px",
                    paddingBottom: "20px"
                }}>

                    <ElevatedCard>

                    <View style={styles.centered}>
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
                        </FormProvider>

                        {/* Not wrapping Button as a child of the FormProvider
                            Pressing GO Button will submit the whole form interact 
                            with a button using good old props so it doesn’t have 
                            to know everything that happens inside the form  */}
                        <View style={styles.backbtn}>
                            <Button
                                title="Send Temporary Password via Email"
                                color={THEME_COLOR.main}
                                // handleSubmit function takes two callbacks as 
                                // arguments — onSubmit and onError
                                onPress={formMethods.handleSubmit(onSubmit, onErrors)}
                            />
                        </View>
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
        marginTop: 12
    },
});

export default ForgotPasswordPage