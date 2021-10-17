import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        zIndex: 0,
        marginTop: -80,
        marginBottom:20
    },
    text: {
        color: "white",
        fontSize: 30,
        lineHeight: 84,
        fontWeight: "bold",
        textAlign: "center",
        zIndex: 1,
        top: 70,
        left: 30,
        position: 'absolute',
    },
    subtitle: {
        color: "white",
        fontSize: 25,
        fontWeight: "400",
        textAlign: "left",
        lineHeight: 40,
        zIndex: 1,
        top: 130,
        left: 30,
        position: 'absolute',
    },
    textOr:{
        color: "#FF8383",
        fontSize: 25,
        fontWeight: "400",
        textAlign: "center",
    },
    txtBemVindo: {
        fontSize:18
    },
    txtPerfil: {
        fontSize:25,
        fontWeight: 'bold',
        marginBottom:20
    },
    button:{
        backgroundColor: '#5E7AFE',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 15,
        borderRadius: 10,   
        marginTop: 10,
        marginHorizontal: 30
    },
    buttonCadastro:{
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: '#ABABAB',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 15,
        borderRadius: 10,   
        marginTop: 10,
        marginHorizontal: 30
    },
    textButton:{
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    },
    textButtonCadastro:{
        color: '#ABABAB',
        fontSize: 20,
        fontWeight: 'bold'
    },
    input: {
        height: 50,
        margin: 8,
        marginHorizontal: 30,
        padding: 10,
        borderWidth: 1,
        borderColor: '#D1D1D6',
        borderRadius: 10, 
    }, 
});

export default styles;