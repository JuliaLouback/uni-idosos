import React, {useState} from "react";
import {View, Text, Image, TouchableOpacity, TextInput, Alert, ScrollView} from 'react-native'
import LoginController from "../../../controller/LoginController";
import styles from './style'

function LoginCuidador ({navigation}){

    const [Email, setEmail]            = useState('');
    const [Senha, setSenha]              = useState('');

    function handleEmailChange(Email){ setEmail(Email); } 
    function handleSenhaChange(Senha){ setSenha(Senha); } 

    function handleButtonPress(){ 
        if(Email === '' || Senha === ''){
            Alert.alert("Preencha todos os campos", "Preencha todos os campos para realizar o login!");
        } else {
            LoginController.findByUser(Email, Senha, navigation) 
        }
    }

    return(
        <ScrollView style={styles.container}>
            <Image source={require('../../img/backgroundLogin.png')} style={styles.image}/>
            <Text style={styles.text}>Olá Cuidador</Text>
            <Text style={styles.subtitle}>efetue seu login para um melhor acompanhamento</Text>

            <TextInput style={styles.input} placeholder="E-mail" keyboardType="email-address" onChangeText={handleEmailChange}/>
            <TextInput style={styles.input} placeholder="Senha" keyboardType="default" onChangeText={handleSenhaChange}/>

            <TouchableOpacity style={styles.button}  onPress={handleButtonPress}>
                <Text style={styles.textButton}>Login</Text>
            </TouchableOpacity>
            <View style={{flexDirection: 'row', alignItems: 'center', marginHorizontal: 30, marginVertical: 10}}>
                <View style={{flex: 1, height: 1, backgroundColor: "#FF8383"}} />
                    <View>
                        <Text style={{width: 50, textAlign: 'center', fontSize: 20, color: "#FF8383"}}>OU</Text>
                    </View>
                <View style={{flex: 1, height: 1, backgroundColor: "#FF8383"}} />
            </View>
            <TouchableOpacity style={styles.buttonCadastro}  onPress={() => navigation.navigate("Cadastro")}>
                <Text style={styles.textButtonCadastro}>Registre-se</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

export default LoginCuidador;