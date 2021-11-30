import React, { useState } from 'react';
import { 
    Text, 
    View, 
    TouchableOpacity,
    Picker } from 'react-native';

//components
import TituloAmarelo from '../TituloAmarelo'
import { ModalInfo } from './ModalInfo'
import { ButtonInfo } from '../Buttons/ButtonInfo'

//styles
import styles from './style'

//icons
import { Neutro } from '../Icons/Neutro'
import { Sono } from '../Icons/Sono';
import { Agua } from '../Icons/Agua';
import { Peso } from '../Icons/Peso';
import { Sintomas } from '../Icons/Sintomas';
import { Alcool } from '../Icons/Alcool';
import { Vacina } from '../Icons/Vacina';
import { Virus } from '../Icons/Virus';
import { Remedio } from '../Icons/Remedio';
import { Adicionar } from '../Icons/Adicionar';

function InformacoesDiarias({ navigation, route }){

    const [modalVisible, setModalVisible] = useState(false);
    const [tipoBotao, setTipoBotao] = useState('');
    const abrirModalHumor = () => { setModalVisible(true), setTipoBotao('humor') }
    const abrirModalSono = () => { setModalVisible(true), setTipoBotao('sono') }
    const abrirModalAgua = () => { setModalVisible(true), setTipoBotao('agua') }
    const abrirModalSintomas = () => { setModalVisible(true), setTipoBotao('sintomas') }
    const abrirModalPeso = () => { setModalVisible(true), setTipoBotao('peso') }
    const abrirModalConfirmar = () => { setModalVisible(true), setTipoBotao('confirmar')  }
    const fecharModalHumor = () => { setModalVisible(false) }

    return(
        <View style={styles.container}>
            <TituloAmarelo titulo="Informações Diárias"></TituloAmarelo>
            <View style={{ flex: 5, marginLeft: 30, marginRight: 30 }}>
                <View style={styles.botoesGrande}>
                    
                    <View style={styles.internalContainer}>

                        <ButtonInfo 
                            title={'Humor'} 
                            onPress={abrirModalHumor} 
                            fontWeight={'bold'} 
                            cor={'#FFB348'} 
                            corFonte={'#515050'} 
                            larguraMinima={100} 
                            larguraMaxima={100}
                        >
                            <Neutro width={50} height={50} />
                        </ButtonInfo>

                        <ButtonInfo 
                            title={'Sono'} 
                            onPress={abrirModalSono} 
                            fontWeight={'bold'} 
                            cor={'#FFB348'} 
                            corFonte={'#515050'} 
                            larguraMinima={100} 
                            larguraMaxima={100}
                        >
                            <Sono />
                        </ButtonInfo>

                        <ButtonInfo 
                            title={'Água'} 
                            onPress={abrirModalAgua} 
                            fontWeight={'bold'} 
                            cor={'#FFB348'} 
                            corFonte={'#515050'} 
                            larguraMinima={100} 
                            larguraMaxima={100}
                        >
                            <Agua />
                        </ButtonInfo>

                        <ButtonInfo 
                            title={'Sintomas'} 
                            onPress={abrirModalSintomas} 
                            fontWeight={'bold'} 
                            cor={'#649AFC'} 
                            corFonte={'#515050'} 
                            larguraMinima={100} 
                            larguraMaxima={100}
                        >
                            <Sintomas />
                        </ButtonInfo>

                        <ButtonInfo 
                            title={'Peso'} 
                            onPress={abrirModalPeso} 
                            fontWeight={'bold'} 
                            cor={'#FFB348'} 
                            corFonte={'#515050'} 
                            larguraMinima={100} 
                            larguraMaxima={100}
                        >
                            <Peso />
                        </ButtonInfo>

                        <ButtonInfo 
                            title={'CONFIRMAR'} 
                            onPress={abrirModalConfirmar} 
                            fontWeight={'bold'} 
                            cor={'#58DB76'} 
                            corFonte={'#F9F9F9'} 
                            larguraMinima={100} 
                            larguraMaxima={100}
                        />
                    
                    </View>

                </View>
                <View style={styles.outros}>

                    <Text style={styles.subTitulo}>Outros</Text>
                    <View style={styles.botoesOutros}>

                        <TouchableOpacity style={styles.botaoOutros}>
                          <Alcool />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.botaoOutros}>
                          <Virus />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.botaoOutros}>
                          <Vacina />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.botaoOutros}>
                          <Remedio />
                        </TouchableOpacity>
                        <TouchableOpacity style={[
                                    styles.botaoOutros, {   
                                    backgroundColor: '#F9F9F9', 
                                    borderWidth: 2, 
                                    borderColor: '#FB7366',
                                    borderStyle: 'dashed',
                        }]}>
                          <Adicionar />
                        </TouchableOpacity>

                    </View>

                </View>
            </View>
           
            <ModalInfo 
                  abrirModal={modalVisible} 
                  fecharModal={fecharModalHumor}
                  tipoBotao={tipoBotao}
                />
            
        </View>
    )
}

export default InformacoesDiarias
