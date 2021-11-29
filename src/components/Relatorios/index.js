import React, { useState } from 'react';
import { View } from 'react-native';

//components
import TituloAmarelo from '../TituloAmarelo'
import { ButtonInfo } from '../Buttons/ButtonInfo'
import { ModalRelatorio } from './ModalRelatorio'

//styles
import styles from './style'

//icons
import { Sono } from '../Icons/Sono';
import { Agua } from '../Icons/Agua';
import { Peso } from '../Icons/Peso';
import { Neutro } from '../Icons/Neutro'

import dados from './DadosMocados'

export function Relatorios({ navigation, route }){

    const [modalVisible, setModalVisible] = useState(false);
    const fecharModal = () => { setModalVisible(false); }

    const [infoDiarias, setInfoDiarias] = useState(dados);
    const [tipoModal, setTipoModal] = useState('');

    const modalPeso = () => { setModalVisible(true), setTipoModal('peso'); }
    const modalSono = () => { setModalVisible(true), setTipoModal('sono'); }
    const modalHumor = () => { setModalVisible(true), setTipoModal('humor'); }
    const modalAgua = () => { setModalVisible(true), setTipoModal('agua'); }

    return(
        <View style={styles.container}>
            <TituloAmarelo titulo="Relatórios"></TituloAmarelo>
            <View style={styles.containerBotoes}>
                
                        <ButtonInfo 
                            title={'Peso'} 
                            onPress={modalPeso} 
                            fontWeight={'bold'} 
                            cor={'#FFB348'} 
                            corFonte={'#515050'} 
                            larguraMinima={150}
                            altura={140}
                        >
                            <Peso width={60} height={60} />
                        </ButtonInfo>

                        <ButtonInfo 
                            title={'Sono'} 
                            onPress={modalSono} 
                            fontWeight={'bold'} 
                            cor={'#FFB348'} 
                            corFonte={'#515050'} 
                            larguraMinima={150}
                            altura={140}
                        >
                            <Sono width={60} height={60} />
                        </ButtonInfo>

                        <ButtonInfo 
                            title={'Humor'} 
                            onPress={modalHumor} 
                            fontWeight={'bold'} 
                            cor={'#FFB348'} 
                            corFonte={'#515050'} 
                            larguraMinima={150}
                            altura={140}
                        >
                            <Neutro width={60} height={60} />
                        </ButtonInfo>

                        <ButtonInfo 
                            title={'Água'} 
                            onPress={modalAgua} 
                            fontWeight={'bold'} 
                            cor={'#FFB348'} 
                            corFonte={'#515050'} 
                            larguraMinima={150}
                            altura={140}
                        >
                            <Agua width={60} height={60} />
                        </ButtonInfo>

            </View>

            <ModalRelatorio 
                abrirModal={modalVisible}
                fecharModal={fecharModal}
                tipoModal={tipoModal}
                data={infoDiarias}
            />
        </View>
    )
}