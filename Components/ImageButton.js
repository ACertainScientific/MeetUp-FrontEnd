import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, Alert, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ImageButton = () => {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate("MainPage")}>
        <Image
          source={{
            uri:
              'https://cdn.pixabay.com/photo/2020/05/04/23/06/spring-5131048_960_720.jpg',
          }}
          style={styles.image}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("MainPage")}>
        <Text style={styles.buttonText}>Click Me or the Image Above to Go Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 300,
    width: 300,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    borderRadius: 150/2,
    resizeMode: 'center'
  },
  button: {
    flex: 1,
    backgroundColor: "#C36241",
    padding: 12,
    alignSelf: 'center',
    borderRadius: 75
  },
  buttonText: {
    fontFamily: "Cochin"
  }
})


export default ImageButton;