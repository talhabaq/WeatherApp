import { View, Text, Image, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

const Cards = ({ name, image, navigation }) => {
    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('Details',{name})}
        >
            <ImageBackground
                source={image} style={styles.images}
                imageStyle={{ borderRadius: 16 }}
            >
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={styles.name}>{name}</Text>
                </View>
            </ImageBackground>

        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    images: {
        height: hp(20),
        width: wp(40),

        marginLeft: 20
    },
    name: {
        fontWeight: '900',
        fontSize: 25,
        color: "white"
    }
})
export default Cards