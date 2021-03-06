import React, {useState} from "react";
import {View,TextInput, Text, ScrollView, TouchableOpacity, Alert, Picker} from 'react-native'
import { TextInputMask } from 'react-native-masked-text'
import { Formik } from 'formik'

import ContatosEmergenciaController from "../../../../controller/ContatosEmergenciaController";

import validations from "../../../validations/validations";

import TituloVermelho from '../../TituloVermelho'
import styles from './style'

function CadastroContatosEmergencia ({navigation, route}){

    function cadastroContatosEmergencia(values){ 
        values.Idoso_Cpf = route.params.Cpf
        ContatosEmergenciaController.create(values)
        Alert.alert(
            "Cadastro Efetuado com sucesso",
            "Cadastro efetuado com sucesso!",
            [
                {
                    text: "Ok",
                    onPress: () => {
                        navigation.navigate("ListaContatosEmergencia");
                    },
                },   
            ]
        );
    }

    return(
        <>
        <ScrollView style={styles.container}>
        <TituloVermelho titulo="Contatos de EmergĂȘncia"></TituloVermelho>
            <Formik
                    validationSchema={validations.cadastroContatosEmergenciaValidationSchema}
                    initialValues={{ Nome: '', Parentesco: '',Tel: '' }}
                    onSubmit={values =>  cadastroContatosEmergencia(values) }
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
                    name="Parentesco"
                    style={styles.input}
                    placeholder="Parentesco"
                    keyboardType="default"
                    onChangeText={handleChange('Parentesco')}
                    onBlur={handleBlur('Parentesco')}
                    value={values.Parentesco}
                    maxLength={45}
                />
                {errors.Parentesco &&
                    <Text style={{ fontSize: 15, color: 'red', marginHorizontal: 30, marginVertical:2 }}>{errors.Parentesco}</Text>
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

export default CadastroContatosEmergencia;