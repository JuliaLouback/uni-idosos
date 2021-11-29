import React, {useState} from "react";
import {View,Text, ScrollView, Button} from 'react-native'

import Titulo from '../../Titulo'
import styles from './style'

function Resultado ({navigation, route}){
    return(
        <View style={styles.container}>
            <Titulo titulo="Resultado de Escala Zarit"></Titulo>
            <View style={styles.subContainer}>
                <View style={styles.result}>
                    <Text style={styles.resultPunctuation}>{ route.params.Soma}</Text>
                    <Text style={[styles.resultInfo, { color: '#FB7366' }]}>{ route.params.Nivel}</Text>
                </View>
                <View style={styles.information}>
                    <View style={styles.informationTitle}>
                        <Text style={{ color: '#fff', fontWeight: 'bold' }}>SOBRECARGA CUIDADOR</Text>
                    </View>
                    <View style={styles.informationText}>
                        <View style={styles.informationInner}>
                            <Text style={{ color: '#4D4D4D' }}>0 a 14 pontos</Text>
                            <Text style={{ color: '#4D4D4D' }}>15 a 21 pontos</Text>
                            <Text style={{ color: '#4D4D4D' }}>22 ou mais pontos</Text>
                        </View>
                        <View style={styles.informationInner}>
                            <Text style={{ fontWeight: 'bold', color: '#4D4D4D' }}>Leve</Text>
                            <Text style={{ fontWeight: 'bold', color: '#4D4D4D' }}>Moderado</Text>
                            <Text style={{ fontWeight: 'bold', color: '#4D4D4D' }}>Grave</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.buttons}>
                    <Button title={'Recalcular'} color={'#FB7366'} onPress={() =>  navigation.navigate("Zarit")}/>
                </View>
            </View>
        </View>
    )
}

export default Resultado;