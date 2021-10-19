import React, {useState, useEffect} from "react";
import {View,TextInput, Text, ScrollView, TouchableOpacity, Alert, Switch} from 'react-native'
import { Formik } from 'formik'
import IdosoController from "../../../controller/IdosoController";
import asyncStorage from "../../../services/asyncStorage";
import validations from "../../validations/validations";
import Spinner from 'react-native-loading-spinner-overlay';

import TituloIdoso from '../TituloIdoso';
import styles from './style'

function PerfilIdoso ({ navigation, route }) {
    
    const [editarSenha, setEditarSenha] = useState(false);
    const [isEnabled, setIsEnabled] = useState(false);
    const [isLoading, setLoading] = useState(true);

    const [Cpf, setCpf]  = useState('');
    const [Endereco_Id, setEnderecoId]  = useState('');
    const [Telefone_Id, setTelefoneId]  = useState('');

    const toggleSwitch = () => {
        setIsEnabled(previousState => !previousState)
        setEditarSenha(previousState => !previousState)
    }

    function editarUser(values){ 
        
        if(values.Senha !== values.ConfSenha) Alert.alert("Senhas não coincidem", "Assegure-se de que os campos Senha e Confirmar senha são idênticos!")
        else {
            console.info({...values, Endereco_Id, Telefone_Id, isEnable: isEnabled})

            IdosoController.update({...values, Endereco_Id, Telefone_Id, isEnable: isEnabled})
           
            Alert.alert(
                "Edição realizada com Sucesso", 
                "Edição Realizada com sucesso!",
                [
                    {
                      text: "Ok",
                      onPress: () => {
                          navigation.navigate("HomeIdoso", values.Nome) 
                      },
                    },   
                ]
            )
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
                    Alert.alert(
                        "Exclusão realizada com Sucesso",
                        "Exclusão realizada com sucesso!",
                        [
                            {
                              text: "Ok",
                              onPress: () => {
                                asyncStorage.removeData("User")
                                navigation.navigate("LoginIdoso")  
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
        <TituloIdoso titulo="Perfil Idoso"></TituloIdoso>
            <Formik
                    validationSchema={validations.editarIdosoValidationSchema}
                    initialValues={{ Nome: '', Cpf: '', Email: '', Senha: '', ConfSenha: '', Tel: '', Cep: '', Numero: '', Rua: '', Bairro: '', Cidade: '', Estado: '', Cuidador_Cpf: '' }}
                    onSubmit={values =>  editarUser(values) }
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
                        asyncStorage.getData("User").then(result =>{
                            setFieldValue("Nome", result.Nome? result.Nome.toString() : '')
                            setFieldValue("Cpf", result.Cpf.toString());
                            setFieldValue("Email",result.Email.toString());
                            setFieldValue("Cep", result.Endereco.Cep.toString());
                            setFieldValue("Numero", result.Endereco.Numero.toString());
                            setFieldValue("Rua", result.Endereco.Rua.toString());
                            setFieldValue("Bairro",result.Endereco.Bairro.toString());
                            setFieldValue("Cidade",result.Endereco.Cidade.toString());
                            setFieldValue("Estado", result.Endereco.Estado.toString());
                            setFieldValue("Tel",result.Telefone.Telefone.toString());
                            setFieldValue("Cuidador_Cpf",result.Cuidador_Cpf.toString());
                            setCpf(result.Cpf.toString());
                            setEnderecoId(result.Endereco_Id);
                            setTelefoneId(result.Telefone_Id);   
                            setLoading(false);  
                        })
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
                        name="Cpf"
                        style={styles.input} 
                        placeholder="CPF"
                        keyboardType="numeric"
                        onChangeText={handleChange('Cpf')}
                        onBlur={handleBlur('Cpf')}
                        value={values.Cpf}    
                        editable={false} 
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
                    name="Cuidador_Cpf"
                    style={styles.input} 
                    placeholder="Cuidador CPF"
                    keyboardType="numeric"
                    onChangeText={handleChange('Cuidador_Cpf')}
                    onBlur={handleBlur('Cuidador_Cpf')}
                    value={values.Cuidador_Cpf}   
                    maxLength={45}  
                />
                {errors.Cuidador_Cpf &&
                    <Text style={{ fontSize: 15, color: 'red', marginHorizontal: 30, marginVertical:2 }}>{errors.Cuidador_Cpf}</Text>
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

                <TextInput 
                    name="Senha"
                    style={styles.input} 
                    placeholder="Senha" 
                    keyboardType="default" 
                    secureTextEntry={true}
                    onChangeText={handleChange('Senha')}
                    onBlur={handleBlur('Senha')}
                    value={values.Senha}   
                    editable={editarSenha} 
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
                    editable={editarSenha} 
                    maxLength={45}
                />
                {errors.ConfSenha &&
                    <Text style={{ fontSize: 15, color: 'red', marginHorizontal: 30, marginVertical:2 }}>{errors.ConfSenha}</Text>
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

export default PerfilIdoso;