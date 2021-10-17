import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding:20
    },
    image: {
       zIndex: 0,
       width: 600,
       height:500,
       marginTop:-80
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
        backgroundColor: '#FFB348',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderRadius: 10,   
        marginTop: 10
    },
    textButton:{
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    } 
});

export default styles;