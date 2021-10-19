
import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        marginBottom: 20
    },
    input: {
        height: 40,
        margin: 12,
        marginHorizontal: 30,
        padding: 10,
        borderWidth: 1,
        borderColor: '#D1D1D6',
        borderRadius: 10, 
    },
    inputAddress: {
        height: 40,
        margin: 12,
        padding: 10,
        borderWidth: 1,
        borderColor: '#D1D1D6',
        borderRadius: 10, 
        flex: 1
    },
    divDirection:{
      flexDirection: 'row',
      marginHorizontal: 18,
    },
    button:{
        backgroundColor: '#649AFC',
        alignItems: 'center',
        marginHorizontal: 30,
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderRadius: 10,   
        marginTop: 10
    },
    textButton:{
        color: '#fff',
        fontSize: 20,
    } 
});

export default styles;