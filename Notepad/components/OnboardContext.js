import React from 'react'
import {Text, View, StyleSheet} from 'react-native'

const OnboardContext = () => {
    return (
        <View style={styles.cotainer} >
            <Text style={styles.header}>ማስታወሻ</Text>
            <Text style={styles.detail}>ፈጣን እና ቀልጣፋ ማስታወሻ መያዣ አፕ ፡፡</Text>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        cotainer : {
            justifyContent: 'center',
            alignItems: 'center'
        },
        header : {
            fontSize: 30,
            fontWeight: 'bold',
            marginBottom: 10,
        },
        detail : {
            fontSize: 20,
        }
    }
)

export default OnboardContext
