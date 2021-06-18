import React from 'react'
import {StyleSheet, View, Image} from 'react-native';
import HomeImage from '../assets/landing_picture.png';

const HomePicture = () => {
    return (
        <View >
            <Image
                style={styles.imageStyle}
                source={HomeImage}
                />
        </View>
    )
}

const styles = StyleSheet.create(
    {
        imageStyle : 
        {
            height: '100%',
            width: '100%',
        }
    }
)

export default HomePicture
