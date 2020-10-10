import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Entypo } from '@expo/vector-icons';

const ResultsDetail = ({ result }) => {
    return (
        <View style={styles.container} >
            <Image style={styles.image} source={{ uri: result.image_url }} />
            <Text style={styles.name} >{result.name}</Text>
            <Text>{result.rating} <Entypo name="star" size={16} color="orange" />, {result.review_count} Reviews</Text>
        </View>
    )
}

export default ResultsDetail

const styles = StyleSheet.create({
    image: {
        width: 250,
        height: 120,
        borderRadius: 4,
        marginBottom: 5
    },
    name: {
        fontWeight: 'bold',
        fontSize: 16
    },
    container: {
        marginLeft: 15
    }
})
