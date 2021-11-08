import React, {useState, useEffect} from "react";
import {View,TextInput, Text, ScrollView, TouchableOpacity, Alert} from 'react-native'
import { Formik } from 'formik'
import ContatosEmergenciaController from "../../../../controller/ContatosEmergenciaController";
import validations from "../../../validations/validations";
import Spinner from 'react-native-loading-spinner-overlay';

import TituloVermelho from '../../TituloVermelho'
import styles from './style'

function EditarContatosEmergencia ({ navigation, route }) {
    
    const [isLoading, setLoading] = useState(true);

    function editarContatosEmergencia(values){ 
        
        ContatosEmergenciaController.update({...values, Id:route.params.Id, Idoso_Cpf: route.params.Idoso_Cpf, Telefone_Id: route.params.Telefone_Id}, navigation)
        Alert.alert(
            "Edição Efetuada com sucesso",
            "Edição efetuada com sucesso!",
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

    function handleButtonDeletePress(){
        return Alert.alert(
            "Excluir Contato",
            "Tem certeza que deseja excluir esse contato?",
            [
              {
                text: "Sim",
                onPress: () => {
                    ContatosEmergenciaController.remove({Id: route.params.Id,Telefone_Id: route.params.Telefone_Id})
                    Alert.alert(
                        "Exclusão realizada com Sucesso",
                        "Exclusão realizada com sucesso!",
                        [
                            {
                                text: "Ok",
                                onPress: () => {
                                navigation.navigate("ListaContatosEmergencia")   
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
        <TituloVermelho titulo="Contatos de Emergência"></TituloVermelho>
            <Formik
                    validationSchema={validations.cadastroContatosEmergenciaValidationSchema}
                    initialValues={{ Nome: '', Parentesco: '', Tel: '' }}
                    onSubmit={values =>  editarContatosEmergencia(values) }
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
                            setFieldValue("Nome", route.params.Nome.toString())
                            setFieldValue("Parentesco", route.params.Parentesco.toString());
                            setFieldValue("Tel",route.params.Telefone.toString());
                            setLoading(false);  
                
                    }, [route]);

                return <>
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

export default EditarContatosEmergencia;