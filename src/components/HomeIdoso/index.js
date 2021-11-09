import React, {useState,useEffect} from "react";
import {View, TouchableOpacity, Text, Image, ScrollView, Alert} from 'react-native'
import asyncStorage from "../../../services/asyncStorage";

import TituloIdoso from '../TituloIdoso'
import styles from './style'

function HomeIdoso ({ navigation, route }){

    const [nomeUsuario, setNomeUsuario] = useState('')
    const [user, setUser] = useState('')

    useEffect(() => {
        asyncStorage.getData("User").then(result => {
            if(result != null) { 
                setNomeUsuario(result.Nome)
                setUser(result)
            }
        })
    })

    return (
            <>
            <ScrollView style={styles.container}>
                <TituloIdoso titulo="Home"></TituloIdoso>
                <View style={styles.changeDirection}>
                    <Text style={styles.nomeUsuario}>Olá, {route.params ? route.params.split(" ")[0] : nomeUsuario.split(" ")[0]}</Text>
                    <TouchableOpacity onPress={() => navigation.navigate("PerfilIdoso")} style={styles.btnPerfil}>
                        <Text style={styles.txtPerfil}>Perfil</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.changeDirection}>
                    <TouchableOpacity onPress={() => navigation.navigate("ListaContatosEmergencia", {Cpf: user.Cuidador_Cpf})} style={styles.btnContatos}>
                        <Image source={require('../../img/sos.png')}/>
                        <Text style={styles.txtRowOne}>Contatos</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("Teste")} style={styles.btnRemedios}>
                        <Image source={require('../../img/pill.png')}/>
                        <Text style={styles.txtRowOne}>Remédios</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("Teste")} style={styles.btnEventos}>
                        <Image source={require('../../img/calendario.png')}/>
                        <Text style={styles.txtRowOne}>Eventos</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.changeDirection}>
                    <TouchableOpacity onPress={() => navigation.navigate("Teste")} style={styles.btnRelatorios}>
                        <Image source={require('../../img/grafico.png')}/>
                        <Text style={styles.txtRelatorios}>Relatórios</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("Teste")} style={styles.btnZarit}>
                        <Image source={require('../../img/alarme.png')}/>
                        <Text style={styles.txtRelatorios}>Informações</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.containerDois}>
                    <TouchableOpacity onPress={() => navigation.navigate("Teste")} style={styles.btnLocalizacao}>
                        <Image source={require("../../img/localizacao.png")} style={styles.image}></Image>
                        <Text style={styles.text}>Localização</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            </>
    )

}

export default HomeIdoso;