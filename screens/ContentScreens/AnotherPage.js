import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import ImageButton from "../../Components/ImageButton";
import SomeComponent from "../../Components/SomeComponents";


const AnotherPage = param => {

    let fetched_param = param.route.params.this_param
    console.log(fetched_param)

    return (
        <View style={styles.centered}>
            {/* <Button
                title="GoBack!"
                onPress={() => {
                    param.navigation.goBack()
                }}
            />
            <View style={{width:'500px', alignItems:"center"}}>
                <Text>This is another Page</Text>
                <Text>Info passed from last page:</Text>
                <Text>{fetched_param}</Text>
            </View>
            
            <SomeComponent/> */}

            <ImageButton/>
        </View>
    )
}

const styles = StyleSheet.create({
    centered: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
})

export default AnotherPage