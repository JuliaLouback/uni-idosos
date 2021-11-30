import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    containerDois: {
        flex: 1,
        marginHorizontal:0,
        marginVertical: 5
    },
    btnLocalizacao: {
        justifyContent: "center",
        borderRadius: 70,
        marginHorizontal: 20,
        marginVertical:10,
        height: 200,
        width: '90%',
        position: "absolute",
        top: -200
    },
    image: {
        width: '100%',
        height: 100,
    },
    text: {
        color: "white",
        fontSize: 25,
        fontWeight: "bold",
        textAlign: "center",
        width:'100%',
        padding:5,
        backgroundColor: '#58DB76',
        marginTop: -30,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20
    },
    titulo:{
        color: "black",
        fontSize: 25,
        fontWeight: "bold",
        textAlign: "center",
        
    }
})

export default styles;