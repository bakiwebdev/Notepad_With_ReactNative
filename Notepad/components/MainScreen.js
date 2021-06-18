import React from 'react'
import { StyleSheet, View, Text, ImageBackground } from 'react-native';
import BackgroundImage from '../assets/background.png'

const MainScreen = () => {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={BackgroundImage}
                style={styles.image}>
                <Text style={styles.text}>background image</Text>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column"
    },
    image: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center"
    },
    text: {
      color: "white",
      fontSize: 42,
      fontWeight: "bold",
      textAlign: "center",
      backgroundColor: "#000000a0"
    }
  });
export default MainScreen
