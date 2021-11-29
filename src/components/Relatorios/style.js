import React from 'react';
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerBotoes: {
        flex: 5, 
        marginLeft: 30, 
        marginRight: 30,
        marginTop: 50,

        flexDirection: 'row',
        flexWrap: 'wrap',

        justifyContent: 'center',
    },
})

export default styles