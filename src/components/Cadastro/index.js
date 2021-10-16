import React, {useState} from "react";
import {View,TextInput, Text, ScrollView, TouchableOpacity, Alert} from 'react-native'
import styles from './style'
import Endereco from '../../../database/Endereco'

function Cadastro (){

    const [Cep, setCep] = useState('0'); 
    const [Numero, setNumero] = useState(0);
    const [Rua, setRua] = useState('');
    const [Bairro, setBairro] = useState('');
    const [Cidade, setCidade] = useState('');
    const [Estado, setEstado] = useState('');

    function handleCepChange(Cep){ setCep(Cep); } 
    function handleNumeroChange(Numero){ setNumero(Numero); } 
    function handleRuaChange(Rua){ setRua(Rua); } 
    function handleBairroChange(Bairro){ setBairro(Bairro); } 
    function handleCidadeChange(Cidade){ setCidade(Cidade); } 
    function handleEstadoChange(Estado){ setEstado(Estado); } 

    function handleButtonPress(){ 
        Endereco.create({Cep,Numero,Rua,Bairro,Cidade,Estado})
    }

    return(
        <>
        <ScrollView style={styles.container}>
            <TextInput style={styles.input} placeholder="Nome" keyboardType="default"/>
            <TextInput style={styles.input} placeholder="CPF" keyboardType="default"/>
            <TextInput style={styles.input} placeholder="E-mail" keyboardType="email-address"/>
            <TextInput style={styles.input} placeholder="Senha" keyboardType="default"/>
            <TextInput style={styles.input} placeholder="Confirmar Senha" keyboardType="default"/>
            
            <TextInput style={styles.input} placeholder="Telefone" keyboardType="phone-pad"/>
            <View style={styles.divDirection}>
                <TextInput style={styles.inputAddress} placeholder="CEP" keyboardType="default" onChangeText={handleCepChange}/>
                <TextInput style={styles.inputAddress} placeholder="Número" keyboardType="numeric" onChangeText={handleNumeroChange}/>
            </View>

            <TextInput style={styles.input} placeholder="Rua" keyboardType="default" onChangeText={handleRuaChange}/>
            <TextInput style={styles.input} placeholder="Bairro" keyboardType="default" onChangeText={handleBairroChange}/>
            <TextInput style={styles.input} placeholder="Cidade" keyboardType="default" onChangeText={handleCidadeChange}/>
            <TextInput style={styles.input} placeholder="Estado" keyboardType="default" onChangeText={handleEstadoChange}/>

            <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
                <Text style={styles.textButton}>Cadastrar</Text>
            </TouchableOpacity>
        </ScrollView>
       
        </>
    );
}

export default Cadastro;