import React, {useState, useEffect} from "react";
import asyncStorage from "../../../services/asyncStorage";
import {View, Text, Image, TouchableOpacity, TextInput, Alert, ScrollView} from 'react-native'
import { Formik } from 'formik'

import LoginController from "../../../controller/LoginController";
import validations from "../../validations/validations";
import styles from './style'

function LoginIdoso ({navigation}){

    return(
        <ScrollView style={styles.container}>
            <Image source={require('../../img/backgroundLoginIdoso.png')} style={styles.image}/>
            <Text style={styles.text}>Olá Idoso (a)</Text>
            <Text style={styles.subtitle}>efetue seu login para um melhor acompanhamento</Text>

            <Formik
                validationSchema={validations.loginValidationSchema}
                initialValues={{ email: '', senha: '' }}
                onSubmit={values =>  LoginController.findByUserIdoso(values.email, values.senha, navigation) }
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
                name="email"
                style={styles.input}
                placeholder="E-mail"
                keyboardType="email-address"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
            />
            {errors.email &&
                <Text style={{ fontSize: 15, color: 'red', marginHorizontal: 30, marginVertical:2 }}>{errors.email}</Text>
            }

            <TextInput
                name="senha"
                style={styles.input}
                placeholder="Senha"
                keyboardType="default"
                secureTextEntry={true}
                onChangeText={handleChange('senha')}
                onBlur={handleBlur('senha')}
                value={values.senha}
            />

            {errors.senha &&
                <Text style={{ fontSize: 15, color: 'red', marginHorizontal: 30, marginVertical:2 }}>{errors.senha}</Text>
            }

            <TouchableOpacity style={styles.button}  onPress={handleSubmit}>
                <Text style={styles.textButton}>Login</Text>
            </TouchableOpacity>
            </>
            )}
            </Formik>
            <View style={{flexDirection: 'row', alignItems: 'center', marginHorizontal: 30, marginVertical: 10}}>
                <View style={{flex: 1, height: 1, backgroundColor: "#649AFC"}} />
                    <View>
                        <Text style={{width: 50, textAlign: 'center', fontSize: 20, color: "#649AFC"}}>OU</Text>
                    </View>
                <View style={{flex: 1, height: 1, backgroundColor: "#649AFC"}} />
            </View>
            <TouchableOpacity style={styles.buttonCadastro}  onPress={() => navigation.navigate("CadastroIdoso")}>
                <Text style={styles.textButtonCadastro}>Registre-se</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

export default LoginIdoso;