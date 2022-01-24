import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"

const Tasks = ({ text }) => {
    return (<>
        {
            <View style={styles.item}>
                <View style={styles.itemLeft}>
                    <TouchableOpacity style={styles.square}></TouchableOpacity>
                    <Text style={styles.text}>{text}</Text>
                </View>
                <View style={styles.circular}></View>
            </View>
        }
    </>);
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 20
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: "center",
        flexWrap: "wrap"
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: "blue",
        opacity: 0.4,
        marginRight: 15,
        borderRadius: 5
    },
    text: {
        maxWidth: 80
    },
    circular: {
        width: 12,
        height: 12,
        borderColor: 'blue',
        borderWidth: 1,
        borderRadius: 5
    },

})

export default Tasks;
