import React, {useState} from "react";
import {View, TouchableOpacity, Text, Image, ScrollView} from 'react-native'
import Titulo from '../Titulo'
import styles from './style'

function HomeCuidador ({navigation}){
    return (
            <>
            <ScrollView style={styles.container}>
                <Titulo titulo="Home"></Titulo>
                <View style={styles.changeDirection}>
                    <Text style={styles.nomeUsuario}>Olá, Usuário</Text>
                    <TouchableOpacity onPress={() => navigation.navigate("Teste")} style={styles.btnPerfil}>
                        <Text style={styles.txtPerfil}>Perfil</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.changeDirection}>
                    <TouchableOpacity onPress={() => navigation.navigate("Teste")} style={styles.btnContatos}>
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
                        <Text style={styles.txtZarit}>ZARIT</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.changeDirection}>
                    <TouchableOpacity onPress={() => navigation.navigate("Teste")} style={styles.btnLocalizacao}>
                        <Image source={require('../../img/grafico.png')}/>
                        <Text style={styles.txtRelatorios}>Localização</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            </>
    )

}

export default HomeCuidador;