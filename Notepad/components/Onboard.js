import React from 'react';
import { StyleSheet, View } from 'react-native';
import OnboardImage from './HomePicture';
import OnboardContext from './OnboardContext';
import OnboardButton from './OnboardButton';

const Onboard = () => {
    return (
        <View >
            <OnboardImage />
            <View style={styles.context}>
                <OnboardContext />
            </View>
            {/* <View style={styles.buttonContainer}>
                <OnboardButton />
            </View> */}
        </View>
    );
};

const styles = StyleSheet.create(
    {
        container:
        {
            backgroundColor: '#FFFFFF',
            width: '100%',
            height: '100%',
            paddingTop: '10%',
            alignItems: 'center',
        },
        context:
        {
            justifyContent: 'center',
            alignItems: 'center'
        },
        buttonContainer:
        {
            marginTop: 30,
            alignItems: 'center',

        }
    }
)
export default Onboard;
