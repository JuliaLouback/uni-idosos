import React from "react";
import {View, Text, Image, TouchableOpacity} from 'react-native'
import styles from './style'

function PreLogin ({navigation}){
    return(
        <View style={styles.container}>
            <Image source={require('../../img/prelogin.png')} style={styles.image}/>
            <Text style={styles.txtBemVindo}>Bem-vindo (a)</Text>
            <Text style={styles.txtPerfil}>Escolha seu Perfil</Text>
            
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("LoginIdoso")}>
                <Text style={styles.textButton}>Idoso</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.button}  onPress={() => navigation.navigate("LoginCuidador")}>
                <Text style={styles.textButton}>Cuidador</Text>
            </TouchableOpacity>
        </View>
    );
}

export default PreLogin;