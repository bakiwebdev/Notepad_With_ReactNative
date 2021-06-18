import React from 'react'
import {StyleSheet, Text, TouchableOpacity, Alert} from 'react-native'

const OnboardButton = () => {

    const buttonClickHandler = () => 
    {
        Alert.alert(
            'ይቅርታ',
            'ይህ መተግበርያ ገና በመሰራት ላይ ነው! ለበለጠ መረጃ በ biruketblem@gmail.com ላይ መልእክቶን ያስቀምጡ'
        );
    }
    return (
        <TouchableOpacity
            style={styles.roundedButton}
            onPress={buttonClickHandler}>
            <Text style={styles.buttonText}>
                አስጀምር
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create(
    {
        roundedButton: 
        {
            display: 'flex',
            alignItems: 'center',
            width: 200,
            paddingVertical: 14,
            paddingHorizontal: 40,
            backgroundColor: '#1B9CFC',
            borderRadius: 1000,
            elevation: 2,
            shadowColor: '#000',
            shadowOffset: {width: 2, height: 2},
            shadowOpacity: 0.25,
            shadowRadius: 3.5,
        },
        buttonText : 
        {
            color: '#fff',
            fontWeight: 'bold',
            fontSize: 16
        }
    }
)
export default OnboardButton
