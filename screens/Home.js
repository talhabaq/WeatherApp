import { View, Text, StyleSheet, ImageBackground, Image, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import React, { useState } from 'react';
import Cards from './Cards';
import Icon from 'react-native-vector-icons/Ionicons';
const Home = (props) => {
    const [city, setCity] = useState('')
    const cities = [
        {
            name: 'New Delhi',
            image: require('../assets/images/image3.jpg')
        },
        {
            name: 'New York',
            image: require('../assets/images/image4.jpg')
        },
        {
            name: 'London',
            image: require('../assets/images/image5.jpg')
        },
        {
            name: 'San Francisco',
            image: require('../assets/images/image6.jpg')
        },
        {
            name: 'New Jersey',
            image: require('../assets/images/image7.jpg')
        }
    ]
    return (

        <ImageBackground
            source={require('../assets/images/image2.jpg')}
            style={styles.background}
            imageStyle={styles.imagebk}
        >
            <View style={styles.container}>
                <Icon name='menu' size={52} color='white' />
                <Image
                    source={require('../assets/images/user.jpg')}
                    style={styles.userImg}
                />
            </View>

            <Text style={styles.text}>
                Hello S.V
            </Text>
            <Text style={styles.desc}>Search the City By Name</Text>
            <View style={styles.textInput}>
                <TextInput
                    value={city}
                    placeholder='Search City'
                    placeholderTextColor={'white'}
                    onChangeText={(text) => setCity(text)}
                />
                <TouchableOpacity
                    onPress={() => props.navigation.navigate('Details', { name: city })}
                >
                    <Icon name='search' size={25} color={'white'}
                        style={styles.searchIcon}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.Location}>
                <Text style={styles.locationText}>My Locations</Text>
                <FlatList
                    horizontal
                    data={cities}
                    renderItem={({ item }) => (
                        <Cards
                            image={item.image}
                            name={item.name}
                            navigation={props.navigation}
                        />
                    )}
                />
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        height: hp(100),
        width: wp(100),
    },
    imagebk: {
        opacity: 0.6,
        backgroundColor: '#111111',
    },
    container: {
        left: wp(10),
        top: hp(5),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
        width: wp(85)
    },
    userImg: {
        height: 50,
        width: 50,
        borderRadius: 50
    },
    text: {
        fontSize: 40,
        color: 'white',
        top: hp(5),
        left: wp(5),
        top: hp(20)
    },
    desc: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'white',
        left: wp(5),
        top: hp(20)
    },
    searchIcon: {
        left: wp(45),
        top: hp(1)
    },
    textInput: {
        borderRadius: 15,
        height: hp(7),
        width: wp(90),
        borderWidth: 3,
        borderColor: "white",
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignSelf: 'center',
        top: hp(22)
    },
    locationText: {
        fontSize: 25,
        color: 'white',
        left: wp(5),
        fontWeight: "bold"
    },
    Location: {
        top: hp(40)
    }
});

export default Home;
