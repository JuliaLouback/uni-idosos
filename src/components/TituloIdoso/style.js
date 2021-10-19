import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative'
    },
    image: {
       zIndex: 0,
       marginBottom:20
    },
    text: {
        color: "white",
        fontSize: 25,
        lineHeight: 84,
        fontWeight: "bold",
        textAlign: "center",
        zIndex: 1,
        top: -5,
        right: 30,
        position: 'absolute',
    },
});

export default styles;