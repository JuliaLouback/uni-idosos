import React, {useState} from "react";
import {View,TextInput, Text, ScrollView, TouchableOpacity, Alert, Platform} from 'react-native'
import { Formik } from 'formik'
import { format } from "date-fns";

import EventosController from "../../../../controller/EventosController";
import DatePicker from 'react-native-date-picker'

import validations from "../../../validations/validations";

import TituloIdoso from '../../TituloIdoso'
import styles from './style'

function CadastroEventos ({navigation, route}){

    const [date, setDate] = useState(new Date())

    function cadastroEventos(values){ 
       
        var dates = new Date(date);
        var formattedDate = format(dates, "yyyy-MM-dd HH:mm:ss");    

        console.info(formattedDate)

        values.Data = formattedDate
        values.Idoso_Cpf = route.params.Cpf
        
        EventosController.create(values)
        Alert.alert(
            "Cadastro Efetuado com sucesso",
            "Cadastro efetuado com sucesso!",
            [
                {
                    text: "Ok",
                    onPress: () => {
                        navigation.navigate("ListaEventos");
                    },
                },   
            ]
        );
    }

    return(
        <>
        <ScrollView style={styles.container}>
        <TituloIdoso titulo="Eventos/Consultas"></TituloIdoso>
            <Formik
                    validationSchema={validations.cadastroEventosValidationSchema}
                    initialValues={{ Titulo: '', Descricao: ''}}
                    onSubmit={values =>  cadastroEventos(values) }
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
                    name="Titulo"
                    style={styles.input}
                    placeholder="Titulo"
                    keyboardType="default"
                    onChangeText={handleChange('Titulo')}
                    onBlur={handleBlur('Titulo')}
                    value={values.Titulo}
                    maxLength={45}
                />
                {errors.Titulo &&
                    <Text style={{ fontSize: 15, color: 'red', marginHorizontal: 30, marginVertical:2 }}>{errors.Titulo}</Text>
                }

                <TextInput 
                    name="Descricao"
                    style={styles.textArea}
                    placeholder="Descrição"
                    keyboardType="default"
                    onChangeText={handleChange('Descricao')}
                    onBlur={handleBlur('Descricao')}
                    value={values.Descricao}
                    multiline={true}
                    numberOfLines={3}
                />
                {errors.Descricao &&
                    <Text style={{ fontSize: 15, color: 'red', marginHorizontal: 30, marginVertical:2 }}>{errors.Descricao}</Text>
                }

                <Text style={styles.text}>Data e Horário</Text>
                <DatePicker 
                    name="Data"
                    date={date}
                    onDateChange={data => setDate(data)}
                    androidVariant='nativeAndroid'
                    style={{marginLeft:50, marginVertical:10}}
                    fadeToColor="#e0e0e0"
                    textColor="#649AFC" 
                />

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

export default CadastroEventos;