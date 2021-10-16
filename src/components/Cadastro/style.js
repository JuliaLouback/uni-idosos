import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        marginTop: 130,
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
        backgroundColor: '#FB7366',
        alignItems: 'center',
        width:'50%',
        marginHorizontal: '25%',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10,   
        marginTop: 10
    },
    textButton:{
        color: '#fff',
        fontSize: 18,
    } 
});

export default styles;