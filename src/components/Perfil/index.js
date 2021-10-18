import React, {useState, useEffect} from "react";
import {View,TextInput, Text, ScrollView, TouchableOpacity, Alert, Switch} from 'react-native'
import CuidadorController from "../../../controller/CuidadorController";
import asyncStorage from "../../../services/asyncStorage";

import Titulo from '../Titulo'
import styles from './style'

function Perfil ({ navigation, route }){
    
    const [editarSenha, setEditarSenha] = useState(false);
    const [isEnabled, setIsEnabled] = useState(false);

    const [Nome, setNome]            = useState('');
    const [Cpf, setCpf]              = useState('');
    const [Email, setEmail]          = useState('');
    const [Senha, setSenha]          = useState('');
    const [ConfSenha, setConfSenha]  = useState('');
    const [Cep, setCep]         = useState('');
    const [Numero, setNumero]   = useState('');
    const [Rua, setRua]         = useState('');
    const [Bairro, setBairro]   = useState('');
    const [Cidade, setCidade]   = useState('');
    const [Estado, setEstado]   = useState('');
    const [Tel, setTelefone]    = useState('');
    const [Endereco_Id, setEnderecoId]  = useState('');
    const [Telefone_Id, setTelefoneId]  = useState('');

    useEffect(() => {
        asyncStorage.getData("User").then(result =>{
            setNome(result.Nome.toString());
            setCpf(result.Cpf.toString());
            setEmail(result.Email.toString());
            setCep(result.Endereco.Cep.toString());
            setNumero(result.Endereco.Numero.toString());
            setRua(result.Endereco.Rua.toString());
            setBairro(result.Endereco.Bairro.toString());
            setCidade(result.Endereco.Cidade.toString());
            setEstado(result.Endereco.Estado.toString());
            setTelefone(result.Telefone.Telefone.toString());
            setEnderecoId(result.Endereco_Id);
            setTelefoneId(result.Telefone_Id);     
        })
    }, [route])

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

    const toggleSwitch = () => {
        setIsEnabled(previousState => !previousState)
        setEditarSenha(previousState => !previousState)
    }

    function handleButtonPress(){ 
        
        if(Nome === '' || Cpf === '' || Email === '' || Cep === '' || Numero === '' || Rua === '' || Bairro === '' || Cidade === '' ||  Estado === '' || Tel === ''){
            Alert.alert("Preencha todos os campos", "Preencha todos os campos para realizar a edição!");
        } else if(Senha !== ConfSenha){
            Alert.alert("Senhas não coincidem", "Assegure-se de que os campos Senha e Confirmar senha são idênticos!");
        }
        else {
            CuidadorController.update({Endereco_Id,Cep,Numero,Rua,Bairro,Cidade,Estado,Telefone_Id,Tel,Cpf,Nome,Email,Senha, isEnable: isEnabled})
        
            console.info({Endereco_Id,Cep,Numero,Rua,Bairro,Cidade,Estado,Telefone_Id,Tel,Cpf,Nome,Email,Senha, isEnable: isEnabled})
            Alert.alert(
                "Edição realizada com Sucesso", 
                "Edição Realizada com sucesso!",
                [
                    {
                      text: "Ok",
                      onPress: () => {
                          navigation.navigate("Home", {Nome}) 
                      },
                    },   
                ])
        }
    }

    function handleButtonDeletePress(){
        return Alert.alert(
            "Excluir Conta",
            "Tem certeza que deseja excluir sua conta?",
            [
              {
                text: "Sim",
                onPress: () => {
                    CuidadorController.remove({Cpf, Endereco_Id, Telefone_Id})
                    Alert.alert("Exclusão realizada com Sucesso", "Exclusão realizada com sucesso!")
                    navigation.navigate("LoginCuidador") 
                },
              },
              {
                text: "Não",
              },
            ]
        )
    }

    return(
        <>
        <ScrollView style={styles.container}>
        <Titulo titulo="Perfil Cuidador"></Titulo>
            <TextInput style={styles.input} placeholder="Nome" keyboardType="default" onChangeText={handleNomeChange} value={Nome}/>
            <TextInput style={styles.input} placeholder="CPF" keyboardType="default" onChangeText={handleCpfChange}  value={Cpf} editable={false} />
            <TextInput style={styles.input} placeholder="E-mail" keyboardType="email-address" onChangeText={handleEmailChange}  value={Email}/>
            
            <TextInput style={styles.input} placeholder="Telefone" keyboardType="phone-pad" onChangeText={handleTelefoneChange} value={Tel}/>
            <View style={styles.divDirection}>
                <TextInput style={styles.inputAddress} placeholder="CEP" keyboardType="default" onChangeText={handleCepChange} value={Cep}/>
                <TextInput style={styles.inputAddress} placeholder="Número" keyboardType="numeric" onChangeText={handleNumeroChange} value={Numero}/>
            </View>

            <TextInput style={styles.input} placeholder="Rua" keyboardType="default" onChangeText={handleRuaChange} value={Rua}/>
            <TextInput style={styles.input} placeholder="Bairro" keyboardType="default" onChangeText={handleBairroChange} value={Bairro}/>
            <TextInput style={styles.input} placeholder="Cidade" keyboardType="default" onChangeText={handleCidadeChange} value={Cidade}/>
            <TextInput style={styles.input} placeholder="Estado" keyboardType="default" onChangeText={handleEstadoChange} value={Estado}/>

            <View style={styles.divDirection}>
                <Text style={styles.text}>Alterar Senha</Text>
                <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            </View>

            <TextInput style={styles.input} placeholder="Senha" keyboardType="default" onChangeText={handleSenhaChange} editable={editarSenha} secureTextEntry={true}/>
            <TextInput style={styles.input} placeholder="Confirmar Senha" keyboardType="default" onChangeText={handleConfSenhaChange} editable={editarSenha} secureTextEntry={true}/> 

            <View style={styles.divDirection}>
                <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
                    <Text style={styles.textButton}>Editar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={handleButtonDeletePress}>
                    <Text style={styles.textButton}>Excluir</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
       
        </>
    );
}

export default Perfil;