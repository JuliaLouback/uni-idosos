import React from 'react';
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingRight: 20,
        paddingLeft: 20,   
        backgroundColor: '#FFB348',
    },
    containerBotaoX: {
        flex: 0.1,
        flexDirection: 'row',
        justifyContent: 'space-between',
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
    titulo: {
        fontSize: 36,
        paddingLeft: 35,
        fontWeight: 'bold',
        color: '#FFF'
    },
    containerGrafico: {
        flex: 0.9,
        
    },
    GraficoData: {
        flex: 0.3,
        alignItems: 'center',
        justifyContent: 'center',
    },
    Grafico: {
        flex: 0.7
    },
    input: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
        flex: 1
    },
    textData: {
        fontSize: 19,
        color: '#515050',
        fontWeight: 'bold',
        marginRight: 20
    },
    medias: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    number: {
        fontSize: 80,
        color: '#FFF',
    },
    descricao: {
        fontSize: 16,
        color: '#515050',
        fontStyle: 'italic',
        
    },
    icons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 35, 
        paddingRight: 35,
    },
})

export default styles