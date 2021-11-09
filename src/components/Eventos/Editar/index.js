import React, {useState, useEffect} from "react";
import {View,TextInput, Text, ScrollView, TouchableOpacity, Alert} from 'react-native'
import { Formik } from 'formik'
import EventosController from "../../../../controller/EventosController";
import validations from "../../../validations/validations";
import Spinner from 'react-native-loading-spinner-overlay';
import DatePicker from 'react-native-date-picker'
import { format } from "date-fns";

import TituloIdoso from '../../TituloIdoso'
import styles from './style'

function EditarEventos ({ navigation, route }) {
    
    const [isLoading, setLoading] = useState(true);
    const [date, setDate] = useState(new Date())

    function editarEventos(values){ 
        
        var dates = new Date(date);
        var formattedDate = format(dates, "yyyy-MM-dd HH:mm:ss");    

        values.Data = formattedDate
        values.Idoso_Cpf = route.params.Cpf
        values.Id = route.params.Id

        console.info(route.params.Id)

        EventosController.update(values)
        Alert.alert(
            "Edição Efetuada com sucesso",
            "Edição efetuada com sucesso!",
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

    function handleButtonDeletePress(){
        return Alert.alert(
            "Excluir Contato",
            "Tem certeza que deseja excluir esse contato?",
            [
              {
                text: "Sim",
                onPress: () => {
                    EventosController.remove(route.params.Id)
                    Alert.alert(
                        "Exclusão realizada com Sucesso",
                        "Exclusão realizada com sucesso!",
                        [
                            {
                                text: "Ok",
                                onPress: () => {
                                navigation.navigate("ListaEventos")   
                                },
                            },   
                        ]
                    )
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
        <Spinner
          visible={isLoading}
          textContent={'Carregando...'}
          textStyle={styles.spinnerTextStyle}
        />
        <TituloIdoso titulo="Eventos/Consultas"></TituloIdoso>
            <Formik
                validationSchema={validations.cadastroEventosValidationSchema}
                initialValues={{ Titulo: '', Descricao: '' }}
                onSubmit={values =>  editarEventos(values) }
            >
                {({
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    values,
                    errors,
                    isValid,
                    setFieldValue
                }) => {

                    useEffect(() => {
                            setFieldValue("Titulo", route.params.Titulo.toString())
                            setFieldValue("Descricao", route.params.Descricao.toString());
                            let data = new Date(route.params.Data.split(" ")[0]+"T"+(route.params.Data.split(" ")[1]))
                            setDate(data)
                            setLoading(false);  
                
                    }, [route]);

                return <>
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

        
                    <View style={styles.divDirection}>
                        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                            <Text style={styles.textButton}>Editar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={handleButtonDeletePress}>
                            <Text style={styles.textButton}>Excluir</Text>
                        </TouchableOpacity>
                    </View>
                </>
            }}
            </Formik>
        </ScrollView>
       
        </>
    );
}

export default EditarEventos;