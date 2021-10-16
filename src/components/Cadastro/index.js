import React, {useState} from "react";
import {View,TextInput, Text, ScrollView, TouchableOpacity, Alert} from 'react-native'
import CuidadorController from "../../../controller/CuidadorController";
import styles from './style'

function Cadastro (){

    const [Nome, setNome]            = useState('');
    const [Cpf, setCpf]              = useState('');
    const [Email, setEmail]          = useState('');
    const [Senha, setSenha]          = useState('');
    const [ConfSenha, setConfSenha]  = useState('');
    const [Cep, setCep]         = useState('0'); 
    const [Numero, setNumero]   = useState(0);
    const [Rua, setRua]         = useState('');
    const [Bairro, setBairro]   = useState('');
    const [Cidade, setCidade]   = useState('');
    const [Estado, setEstado]   = useState('');
    const [Tel, setTelefone]    = useState('');


    function handleNomeChange(Nome){ setNome(Nome); } 
    function handleCpfChange(Cpf){ setCpf(Cpf); } 
    function handleEmailChange(Email){ setEmail(Email); } 
    function handleSenhaChange(Senha){ setSenha(Senha); } 
    function handleConfSenhaChange(ConfSenha){ setConfSenha(ConfSenha); } 
    function handleCepChange(Cep){ setCep(Cep); } 
    function handleNumeroChange(Numero){ setNumero(Numero); } 
    function handleRuaChange(Rua){ setRua(Rua); } 
    function handleBairroChange(Bairro){ setBairro(Bairro); } 
    function handleCidadeChange(Cidade){ setCidade(Cidade); } 
    function handleEstadoChange(Estado){ setEstado(Estado); } 
    function handleTelefoneChange(Tel){ setTelefone(Tel); } 

    function handleButtonPress(){ 
        
        if(Nome === '' || Cpf === '' || Email === '' || Senha === '' || ConfSenha === '' || Cep === '' || Numero === '' || Rua === '' || Bairro === '' || Cidade === '' ||  Estado === '' || Tel === ''){
            Alert.alert("Preencha todos os campos", "Preencha todos os campos para realizar o cadastro!");
        } else if(Senha !== ConfSenha){
            Alert.alert("Senhas não coincidem", "Assegure-se de que os campos Senha e Confirmar senha são idênticos!");
        }
        else {
            CuidadorController.create({Cep,Numero,Rua,Bairro,Cidade,Estado,Tel, Cpf, Nome, Email, Senha})
        }
    }

    return(
        <>
        <ScrollView style={styles.container}>
            <TextInput style={styles.input} placeholder="Nome" keyboardType="default" onChangeText={handleNomeChange}/>
            <TextInput style={styles.input} placeholder="CPF" keyboardType="default" onChangeText={handleCpfChange}/>
            <TextInput style={styles.input} placeholder="E-mail" keyboardType="email-address" onChangeText={handleEmailChange}/>
            <TextInput style={styles.input} placeholder="Senha" keyboardType="default" onChangeText={handleSenhaChange}/>
            <TextInput style={styles.input} placeholder="Confirmar Senha" keyboardType="default" onChangeText={handleConfSenhaChange}/>
            
            <TextInput style={styles.input} placeholder="Telefone" keyboardType="phone-pad" onChangeText={handleTelefoneChange}/>
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