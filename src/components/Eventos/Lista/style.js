import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
        flex: 1
    },
    viewDirection:{
        flexDirection: 'row',
        flex: 1,
        marginHorizontal:30
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
        borderColor: '#649AFC',
        borderWidth: 1,
        position: "absolute",
        right: 20
    },
    viewData:{
        alignItems: 'flex-start',
        justifyContent: 'center',
        borderRadius: 10,
        borderWidth: 1,
        backgroundColor: '#649AFC',
        borderColor: '#649AFC',
        flex: 1,
        margin: 5,
        marginBottom: 5,
        height: 30,
        minWidth: '92%', 
        marginHorizontal:20,
    },
    textData:{
        fontSize: 16,
        marginLeft: 10,
        fontWeight: 'bold',
        color: '#fff'
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#D1D1D6',
        flex: 1,
        margin: 5,
        marginBottom: 15,
        height: 80,
        minWidth: '92%', 
        marginHorizontal:20
      },
    titulo: {
        fontSize: 20,
        lineHeight: 25,
        fontWeight: '400',
        marginTop: 25,
        color: '#000',
        letterSpacing: 0.25,
        flex: 2,
        textAlign: 'left'
    },
    subtitulo: {
        fontSize: 18,
        lineHeight: 25,
        fontWeight: '400',
        marginTop: 22,
        color: '#000',
        letterSpacing: 0.25,
        flex: 5,
        textAlign: 'left'
    },
    txtCadastrar: {
        color: '#649AFC',
        fontSize: 18
    },
})

export default styles