
import { View, Text, StyleSheet, Dimensions, Image} from 'react-native'
import React from 'react'

const Card =  ({data}) =>{

    const {image, name, description} = data;

    return(
        <View style={styles.container}>
        <View style={styles.cardContainer}>
             <Image style={styles.imageStyle} source={image} />
            <View style={styles.infoStyle}>
                <Text style={styles.cardName}>{name}</Text>
                <Text style={styles.cardCode}>{description}</Text>
            </View>
        </View>
        </View>
    )
}

const deviceWidth = Math.round(Dimensions.get('window').width)

const offset = 40;

const styles = StyleSheet.create({
    container: {
        width: deviceWidth - 30,
        alignItems: 'center',
        marginTop: 25,
        marginBottom:25
      },
    cardContainer: {
        width: '100%',
        minHeight: 230, 
        backgroundColor: '#F6FFF8',
        borderRadius: 25,
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 8 },
        shadowOpacity: 0.75,
        shadowRadius: 10.32,
        elevation: 5,
    },
    cardName: {
        color: 'black',
        fontSize: 18,
        fontWeight: '200',
        flexWrap: 'wrap',
    },
    cardCode: {
        
        color: 'black',
        fontSize: 18,
        fontWeight: '300',
        flexWrap: 'wrap'
        
    },
    imageStyle:{
        height: 150,
        width: deviceWidth - offset,
        borderTopRightRadius:25,
        borderTopLeftRadius:25,
        alignSelf: 'center',
        marginBottom: 10,
        opacity: 0.9,
    },
    infoStyle: {
        marginLeft: 10,
    }
})

export default Card;