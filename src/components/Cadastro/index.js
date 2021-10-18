import React, {useState} from "react";
import {View,TextInput, Text, ScrollView, TouchableOpacity, Alert} from 'react-native'
import { cpf } from 'cpf-cnpj-validator'; 
import { Formik } from 'formik'

import CuidadorController from "../../../controller/CuidadorController";
import validations from "../../validations/validations";

import Titulo from '../Titulo'
import styles from './style'

function Cadastro ({navigation}){

    function cadastroUser(values){ 
        
        if(values.Senha !== values.ConfSenha){
            Alert.alert("Senhas não coincidem", "Assegure-se de que os campos Senha e Confirmar senha são idênticos!");
        }
        else {
            console.log(cpf.isValid(values.Cpf))
            if(!cpf.isValid(values.Cpf)){
                Alert.alert("CPF Inválido", "Entre com CPF Válido.")
            }
            else {
                CuidadorController.create(values);
                Alert.alert(
                    "Cadastro Efetuado",
                    "Seu cadastro foi realizado com sucesso! Realize o login.",
                    [
                        {
                        text: "Ok",
                        onPress: () => {
                            navigation.navigate("LoginCuidador");
                        },
                        },   
                    ]
                );
            }
        }
    }

    return(
        <>
        <ScrollView style={styles.container}>
        <Titulo titulo="Cadastro de Cuidador"></Titulo>
            <Formik
                    validationSchema={validations.cadastroValidationSchema}
                    initialValues={{ Nome: '', Cpf: '', Email: '', Senha: '', ConfSenha: '', Tel: '', Cep: '', Numero: '', Rua: '', Bairro: '', Cidade: '', Estado: '' }}
                    onSubmit={values =>  cadastroUser(values) }
                >
                {({
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    values,
                    errors,
                    isValid,
                }) => (
                <>
                <TextInput 
                    name="Nome"
                    style={styles.input}
                    placeholder="Nome"
                    keyboardType="default"
                    onChangeText={handleChange('Nome')}
                    onBlur={handleBlur('Nome')}
                    value={values.Nome}
                    maxLength={45}
                />
                {errors.Nome &&
                    <Text style={{ fontSize: 15, color: 'red', marginHorizontal: 30, marginVertical:2 }}>{errors.Nome}</Text>
                }

                <TextInput 
                    name="Cpf"
                    style={styles.input} 
                    placeholder="CPF"
                    keyboardType="numeric"
                    onChangeText={handleChange('Cpf')}
                    onBlur={handleBlur('Cpf')}
                    value={values.Cpf}   
                    maxLength={45}  
                />
                {errors.Cpf &&
                    <Text style={{ fontSize: 15, color: 'red', marginHorizontal: 30, marginVertical:2 }}>{errors.Cpf}</Text>
                }

                <TextInput 
                    name="Email"
                    style={styles.input}
                    placeholder="E-mail"
                    keyboardType="email-address"
                    onChangeText={handleChange('Email')}
                    onBlur={handleBlur('Email')}
                    value={values.Email}
                    maxLength={45}     
                />
                {errors.Email &&
                    <Text style={{ fontSize: 15, color: 'red', marginHorizontal: 30, marginVertical:2 }}>{errors.Email}</Text>
                }
                
                <TextInput 
                    name="Senha"
                    style={styles.input} 
                    placeholder="Senha" 
                    keyboardType="default" 
                    secureTextEntry={true}
                    onChangeText={handleChange('Senha')}
                    onBlur={handleBlur('Senha')}
                    value={values.Senha}    
                    maxLength={45}
                />
                {errors.Senha &&
                    <Text style={{ fontSize: 15, color: 'red', marginHorizontal: 30, marginVertical:2 }}>{errors.Senha}</Text>
                }

                <TextInput 
                    name="ConfSenha"
                    style={styles.input}
                    placeholder="Confirmar Senha"
                    keyboardType="default"
                    secureTextEntry={true}
                    onChangeText={handleChange('ConfSenha')}
                    onBlur={handleBlur('ConfSenha')}
                    value={values.ConfSenha} 
                    maxLength={45}
                />
                {errors.ConfSenha &&
                    <Text style={{ fontSize: 15, color: 'red', marginHorizontal: 30, marginVertical:2 }}>{errors.ConfSenha}</Text>
                }

                <TextInput 
                    name="Tel"
                    style={styles.input} 
                    placeholder="Telefone"
                    keyboardType="phone-pad"
                    onChangeText={handleChange('Tel')}
                    onBlur={handleBlur('Tel')}
                    value={values.Tel} 
                    maxLength={45}
                />
                {errors.Tel &&
                    <Text style={{ fontSize: 15, color: 'red', marginHorizontal: 30, marginVertical:2 }}>{errors.Tel}</Text>
                }
                
                <View style={styles.divDirection}>

                    <TextInput 
                        name="Cep"
                        style={styles.inputAddress} 
                        placeholder="CEP"
                        keyboardType="numeric" 
                        onChangeText={handleChange('Cep')}
                        onBlur={handleBlur('Cep')}
                        value={values.Cep} 
                        maxLength={45}
                    />

                    <TextInput 
                        name="Numero"
                        style={styles.inputAddress}
                        placeholder="Número" 
                        keyboardType="numeric"
                        onChangeText={handleChange('Numero')}
                        onBlur={handleBlur('Numero')}
                        value={values.Numero}  
                        maxLength={45}   
                    />
                </View>

                <View style={styles.divDirection}>
                    {errors.Cep &&
                        <Text style={{ fontSize: 15, color: 'red', marginHorizontal: 10, marginVertical:2, flex: 1 }}>{errors.Cep}</Text>
                    }
                    {errors.Numero &&
                        <Text style={{ fontSize: 15, color: 'red', marginHorizontal: 10, marginVertical:2, flex: 1 }}>{errors.Numero}</Text>
                    }
                </View>

                <TextInput 
                    name="Rua"
                    style={styles.input}
                    placeholder="Rua"
                    keyboardType="default" 
                    onChangeText={handleChange('Rua')}
                    onBlur={handleBlur('Rua')}
                    value={values.Rua}
                    maxLength={45} 
                />
                {errors.Rua &&
                    <Text style={{ fontSize: 15, color: 'red', marginHorizontal: 30, marginVertical:2 }}>{errors.Rua}</Text>
                }

                <TextInput 
                    name="Bairro"
                    style={styles.input} 
                    placeholder="Bairro"
                    keyboardType="default"
                    onChangeText={handleChange('Bairro')}
                    onBlur={handleBlur('Bairro')}
                    value={values.Bairro} 
                    maxLength={45}
                />
                {errors.Bairro &&
                    <Text style={{ fontSize: 15, color: 'red', marginHorizontal: 30, marginVertical:2 }}>{errors.Bairro}</Text>
                }

                <TextInput 
                    name="Cidade"
                    style={styles.input} 
                    placeholder="Cidade"
                    keyboardType="default"
                    onChangeText={handleChange('Cidade')}
                    onBlur={handleBlur('Cidade')}
                    value={values.Cidade} 
                    maxLength={45}
                />
                {errors.Cidade &&
                    <Text style={{ fontSize: 15, color: 'red', marginHorizontal: 30, marginVertical:2 }}>{errors.Cidade}</Text>
                }

                <TextInput 
                    name="Estado"
                    style={styles.input} 
                    placeholder="Estado"
                    keyboardType="default"
                    onChangeText={handleChange('Estado')}
                    onBlur={handleBlur('Estado')}
                    value={values.Estado} 
                    maxLength={45}
                />
                {errors.Estado &&
                    <Text style={{ fontSize: 15, color: 'red', marginHorizontal: 30, marginVertical:2 }}>{errors.Estado}</Text>
                }

                <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                    <Text style={styles.textButton}>Cadastrar</Text>
                </TouchableOpacity>
                </>
            )}
            </Formik>
        </ScrollView>
       
        </>
    );
}

export default Cadastro;