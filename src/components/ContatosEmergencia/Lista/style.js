import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
        flex: 1
    },
    textEmpty:{
        fontSize:20,
        color:'red',
        marginHorizontal:25
    },
    viewList:{
        marginHorizontal: 15,
        flex:4,
        flexDirection: 'row',
        justifyContent: 'center', 
        alignItems: 'center'  
    },
    viewButton:{
        marginTop: 40,
        flex:1,
        position: "relative"
    },
    btnCadastrar: {
        backgroundColor: '#fff',
        alignItems: 'center',
        width:'50%',
        paddingVertical: 10,
        borderRadius: 10,  
        borderColor: '#F63E3E',
        borderWidth: 1,
        position: "absolute",
        right: 20
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        elevation: 3,
        backgroundColor: '#FF2D55',
        flex: 1,
        margin: 5,
        marginBottom: 15,
        height: 150,
        minWidth: 160, 
        maxWidth: 140,
        marginHorizontal:20
      },
    titulo: {
        fontSize: 20,
        lineHeight: 25,
        fontWeight: 'bold',
        marginTop: 10,
        color: '#fff',
        letterSpacing: 0.25,
    },
    subtitulo: {
        fontSize: 16,
        lineHeight: 25,
        fontWeight: '500',
        marginTop: 0,
        color: '#fff',
        letterSpacing: 0.25,
    },
    txtCadastrar: {
        color: '#F63E3E',
        fontSize: 18
     },
})

export default styles