import React from "react";
import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    modal: {
        flex: 1,
        backgroundColor: '#FFB348',
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35,
    },
    containerBotaoX: {
        flex: 1.2,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        marginRight: 20,
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35,
    },
    botaoX: {
        width: 35,
        height: 35,
        borderRadius: 17.5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF',
    },
    textoBotao: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#FFB348'
    },
    escolhas: {
        flex: 4.8
    },
    containerBotaoConfirmar: {
        flex: 2.5,
        paddingLeft: 70,
        paddingRight: 70,
        alignItems: 'center',
        justifyContent: 'center',
    },
    botaoConfirmar: {
        width: '100%',
        height: '75%',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF' 
    },
    containerTitulo: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    titulo: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#515050'
    },
    containerModalConteudo: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerModal: {
        flex: 1
    },
    input:{
        height: 65,
        borderWidth: 1,
        borderColor: '#D1D1D6',
        margin: 10,
        borderRadius: 20,
        padding: 15,
    },
});


export default styles