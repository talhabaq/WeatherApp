import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

import { API_KEY } from './Constants';
const Data = ({ title, value }) => (
    <View
        style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
        }}>
        <Text style={{ color: 'gray', fontSize: 22 }}>{title}</Text>
        <Text style={{ color: 'white', fontSize: 22 }}>{value}</Text>
    </View>
);
const Details = (props) => {
    const [data, setData] = useState();
    const { name } = props.route.params
    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${API_KEY}`).then(res => res.json())
            .then(res => setData(res))
            .catch(err => console.log(err));
    }, []);
    return (
        <ImageBackground
            source={require('../assets/images/image1.jpg')}
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
            {
                data ?
                    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                        <Text style={{ color: 'white' ,fontSize:25}}>{name}</Text>
                        <Text style={{fontWeight:"bold"}}>{data['weather'][0]['main']}</Text>
                        <Text style={{fontWeight:"bold"}}>{(data['main']['temp'] - 273).toFixed(2)}&deg; C</Text>
                        <View>
                            <Text style={{ color: 'white', fontSize: 22, marginBottom: 16 }}>Weather Details</Text>
                            <View style={{ width: wp(80)}}>
                                <Data value={data['wind']['speed']} title="Wind" />
                                <Data value={data['main']['pressure']} title="Pressure" />
                                <Data value={`${data['main']['humidity']}%`} title="Humidity" />
                                <Data value={data['visibility']} title="Visibility" />
                            </View>
                        </View>
                    </View>
                    : null
            }
        </ImageBackground>
    )
}
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
    cityName:
        { fontSize: 22, top: hp(5), left: wp(5), fontWeight: 'bold', color: "white" }
})
export default Details