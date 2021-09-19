import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import SomeComponent from "../../Components/SomeComponents";


const AnotherPage = param => {
    return (
        <View style={styles.centered}>
            <Button
                title="GoBack!"
                onPress={() => {
                    param.navigation.goBack()
                }}
            />
            <View style={{width:'500px', alignItems:"center"}}>
                <Text>This is another Page</Text>
            </View>
            
            <SomeComponent/>
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