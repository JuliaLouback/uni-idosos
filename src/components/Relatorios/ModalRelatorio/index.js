import React, { useState, useEffect } from 'react';
import { StyleSheet } from "react-native";
import {  
    Text,  
    View, 
    Modal, 
    TouchableOpacity,
    TextInput } from 'react-native';

// components
import Grafico from '../Grafico'

//styles
import styles from './style'

//Icons
import { SemSono } from '../../Icons/SemSono';
import { Sonolento } from '../../Icons/Sonolento';
import { ComSono } from '../../Icons/ComSono';
import { Triste } from '../../Icons/Triste';
import { Neutro } from '../../Icons/Neutro';
import { Bravo } from '../../Icons/Bravo';
import { Feliz } from '../../Icons/Feliz';
import { Alegre } from '../../Icons/Alegre';

export const ModalRelatorio = (props) => {

    const { abrirModal, fecharModal, nome = 'Título modal', data, tipoModal } = props;
    
    const [listSono, setListSono] = useState(data.map(item => item.Sono));
    const [listPeso, setListPeso] = useState(data.map(item => item.peso));
    const [listHumor, setListHumor] = useState(data.map(item => item.humor));
    const [listAgua, setListAgua] = useState(data.map(item => item.agua));
    
    const add = (accumulator, a) => {
        return accumulator + a;
    }

    const mediaPeso = () => {

        const soma = listPeso.reduce(add, 0);
        const quantidade = listPeso.length;

        return (soma/quantidade).toFixed(2);
    }

    const mediaAgua = () => {

        const soma = listAgua.reduce(add, 0);
        const quantidade = listAgua.length;

        return Math.round(soma/quantidade);
    }

    return(

        <Modal transparent={true} animationType='slide' visible={abrirModal}>
            
            <View style={styles.container}>
                
                <View style={styles.containerBotaoX}>
                    <Text style={styles.titulo}>
                        {
                            (tipoModal) == 'peso'? 'Peso'
                            :
                            (tipoModal) == 'sono'? 'Sono'
                            :
                            (tipoModal) == 'humor'? 'Humor'
                            : 'Água'
                        }
                    </Text>
                    <TouchableOpacity style={styles.botaoX} onPress={fecharModal}>
                        <Text style={styles.textoBotao}>X</Text>
                    </TouchableOpacity>

                </View>
                <View style={styles.containerGrafico}>
                    
                    <View style={styles.GraficoData}>
                        
                        <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 35, paddingRight: 35}}>
                            
                            <Text style={styles.textData}>
                                Relatório dos últimos 30 dias 
                            </Text>

                        </View>
                        
                    </View>

                    <View style={styles.Grafico}>
                        {
                            (tipoModal) == 'peso'? 
                            <View style={styles.medias}>
                                <Text style={styles.number}>{mediaPeso()}</Text>
                                <Text style={styles.descricao}>*Média de peso.</Text>
                            </View>
                            :
                            (tipoModal) == 'agua'? 
                            <View style={styles.medias}>
                                <Text style={styles.number}>{mediaAgua()}</Text>
                                <Text style={styles.descricao}>*Média de Copos de água por dia.</Text>
                            </View>
                            :
                            <View>
                                <Grafico
                                tipo={tipoModal}
                                list={
                                    (tipoModal) == 'sono'? listSono
                                    :
                                    listHumor
                                }
                                />
                                {
                                 (tipoModal) == 'sono'? 
                                 <View style={styles.icons}>
                                    <SemSono width={50} height={50} />
                                    <Sonolento width={50} height={50} />
                                    <ComSono width={50} height={50} />
                                 </View>
                                 :
                                 <View style={styles.icons}>
                                     <Bravo width={40} height={40} />
                                     <Triste width={40} height={40} />
                                     <Neutro width={40} height={40} />
                                     <Alegre width={40} height={40} />
                                     <Feliz  width={40} height={40} />
                                 </View>
                                }
                            </View>
                        }
                    </View>

                </View>

            </View>

        </Modal>
    )
}