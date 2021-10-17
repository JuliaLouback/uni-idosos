import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        marginBottom: 20
    },
    changeDirection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal:20,
        marginVertical: 12
    },  
    containerDois: {
        flex: 1,
        marginHorizontal:18,
        marginVertical: 5
    },  
    nomeUsuario: {
        fontSize: 25,
        fontWeight: 'bold'
    },
    btnPerfil: {
        backgroundColor: '#fff',
        alignItems: 'center',
        width:'50%',
        paddingVertical: 10,
        borderRadius: 10,  
        borderColor: '#000',
        borderWidth: 1 
    },
    btnContatos: {
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#F63E3E',
        padding:20,
        borderRadius: 15,
        marginHorizontal: 10
    },
    btnRemedios: {
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#FFB348',
        padding:20,
        borderRadius: 15,
        marginHorizontal: 0
    },
    btnEventos: {
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#649AFC',
        padding:20,
        borderRadius: 15,
        marginHorizontal: 10
    },
    btnRelatorios: {
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#E276A4',
        padding:20,
        borderRadius: 15,
        marginHorizontal: 10
    },
    btnZarit: {
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#FB7366',
        padding:20,
        borderRadius: 15,
        marginHorizontal: 10
    },
    txtPerfil: {
       color: '#000',
       fontSize: 18
    },
    txtRowOne: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 15,
        marginTop: 10
    },
    txtRelatorios: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 10
    },
    txtZarit:{
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: 'center',
        marginVertical: '20%'
    },
    btnLocalizacao: {
        flex: 1,
        justifyContent: "center",
        borderRadius: 15,
        marginHorizontal: 15,
        marginVertical:10
    },
    image: {
        width: '100%'
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
    }
})

export default styles;