import React, {useState, useEffect} from "react";
import {View,TextInput, Text, ScrollView, TouchableOpacity, Alert} from 'react-native'
import CuidadorController from "../../../controller/CuidadorController";
import Titulo from '../Titulo'
import styles from './style'

function Perfil ({ navigation, route }){

    const CpfCuidador = route.params ? route.params.Cpf : undefined;
    const TelefoneId = route.params ? route.params.Telefone.TelefoneId : undefined;
    const EnderecoId = route.params ? route.params.Endereco.EnderecoId : undefined;
    
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

    useEffect(() => {
    if(!route.params) return;
        setNome(route.params.Nome);
        setCpf(route.params.Cpf);
        setEmail(route.params.Email);
        setCep(route.params.Endereco.Cep);
        setNumero(route.params.Endereco.Numero);
        setRua(route.params.Endereco.Rua);
        setBairro(route.params.Endereco.Bairro);
        setCidade(route.params.Endereco.Cidade);
        setEstado(route.params.Endereco.Estado);
        setTelefone(route.params.Telefone.Telefone);
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

    function handleButtonPress(){ 
        
        if(Nome === '' || Cpf === '' || Email === '' || Cep === '' || Numero === '' || Rua === '' || Bairro === '' || Cidade === '' ||  Estado === '' || Tel === ''){
            Alert.alert("Preencha todos os campos", "Preencha todos os campos para realizar a edição!");
        } else if(Senha !== ConfSenha){
            Alert.alert("Senhas não coincidem", "Assegure-se de que os campos Senha e Confirmar senha são idênticos!");
        }
        else {
            CuidadorController.update({EnderecoId,Cep,Numero,Rua,Bairro,Cidade,Estado,TelefoneId,Tel,Cpf,Nome,Email,Senha})
            Alert.alert("Edição realizada com Sucesso", "Edição Realizada com sucesso!")
            navigation.navigate("Home") 
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
                    CuidadorController.remove({CpfCuidador, EnderecoId, TelefoneId})
                    Alert.alert("Exclusão realizada com Sucesso", "Exclusão realizada com sucesso!")
                    navigation.navigate("Home") 
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

            <Text style={styles.text}>Alterar Senha</Text>
            <TextInput style={styles.input} placeholder="Senha" keyboardType="default" onChangeText={handleSenhaChange}/>
            <TextInput style={styles.input} placeholder="Confirmar Senha" keyboardType="default" onChangeText={handleConfSenhaChange}/> 

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