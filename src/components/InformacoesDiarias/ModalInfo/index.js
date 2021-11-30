import React, { useState, useEffect } from 'react';
import {  
    Text,  
    View, 
    Modal, 
    TouchableOpacity, 
    Picker, Alert } from 'react-native';

//styles
import styles from './style'

//components
import Slider from '@react-native-community/slider';
import InfoDiariasController from '../../../../controller/InfoDiariasController'
import InfoDiarias from '../../../../database/InfoDiarias'
import asyncStorage from "../../../../services/asyncStorage";

//icons
import { Copo } from '../../Icons/Copo';
import { SemSono } from '../../Icons/SemSono';
import { Sonolento } from '../../Icons/Sonolento';
import { ComSono } from '../../Icons/ComSono';
import { Triste } from '../../Icons/Triste';
import { Neutro } from '../../Icons/Neutro';
import { Bravo } from '../../Icons/Bravo';
import { Feliz } from '../../Icons/Feliz';
import { Alegre } from '../../Icons/Alegre';


export const ModalInfo = (props) => {

    const { abrirModal, fecharModal, marginTop = '112%', tipoBotao, children } = props;

    let data = new Date();
    let year = data.getFullYear();
    let month = data.getMonth()+1;
    let dt = data.getDate();

    if (dt < 10) {
    dt = '0' + dt;
    }
    if (month < 10) {
    month = '0' + month;
    }

    let dataFinal = year+'-' + month + '-'+dt + 'T00:00:00Z'

    const [info, setInfo] = useState({
        humor: '',
        peso: '',
        agua: '',
        sono: '',
        sintomas: '',
        data: dataFinal
    });

    return(
        <Modal transparent={true} animationType='slide' visible={abrirModal}>
            
            <View style={[styles.modal, { marginTop: marginTop }]}>

                <View style={styles.containerBotaoX}>

                    <TouchableOpacity style={styles.botaoX} onPress={fecharModal}>
                        <Text style={styles.textoBotao}>X</Text>
                    </TouchableOpacity>

                </View>
                <View style={styles.escolhas}>
                        {
                            (tipoBotao) == 'humor' ? <Humor info={info} setInfo={setInfo} fechamodal={fecharModal} /> 
                            :
                            (tipoBotao) == 'sono' ? <Sono info={info} setInfo={setInfo} fechamodal={fecharModal} /> 
                            : 
                            (tipoBotao) == 'agua' ? <Agua info={info} setInfo={setInfo} fechamodal={fecharModal} /> 
                            : 
                            (tipoBotao) == 'sintomas' ? <Sintomas info={info} setInfo={setInfo} fechamodal={fecharModal} /> 
                            : 
                            (tipoBotao) == 'peso' ? <Peso info={info} setInfo={setInfo} fechamodal={fecharModal} /> 
                            : 
                            (tipoBotao) == 'confirmar' ? <Confirmar info={info} setInfo={setInfo} fechamodal={fecharModal} /> 
                            : <></>
                        }
                    </View>
            </View>

        </Modal>
    )
}

const Humor = (props) => {

    const { info, setInfo, fechamodal } = props;

    const [valor, setValor] = useState(3)

    const addHumor = () => {

        if(info.humor == ''){
            setInfo({...info, humor: valor})
            fechamodal()
            Alert.alert('Sucesso!','Sucesso!')
        } else {
            Alert.alert('Campo já preenchido','Campo já preenchido')
            fechamodal()
            console.log(info)
        }

    }

    return(
        <View style={styles.containerModal}>
            <View style={styles.containerTitulo}>
                <Text style={styles.titulo}>Como está seu humor hoje?</Text>
            </View>
            <View style={styles.containerModalConteudo}>
                {
                    (valor) == 1 ? <Bravo />
                    :
                    (valor) == 2 ? <Triste />
                    :
                    (valor) == 3 ? <Neutro />
                    :
                    (valor) == 4 ? <Alegre />
                    :
                    (valor) == 5 ? <Feliz />
                    : <></>
                }
                <Slider
                    style={{width: '75%', height: 40}}
                    minimumValue={1}
                    maximumValue={5}
                    minimumTrackTintColor="#FFF"
                    maximumTrackTintColor="#000000"
                    value={valor}
                    onValueChange={ (valorSelecionado) => {setValor(parseInt(valorSelecionado.toFixed(0), '10'))}}
                    thumbTintColor='#FFF'
                />
            </View>
            <View style={styles.containerBotaoConfirmar}>
                <TouchableOpacity style={styles.botaoConfirmar} onPress={addHumor}>
                    <Text style={styles.textoBotao}>Confirmar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const Sono = (props) => {

    const { info, setInfo, fechamodal } = props;

    const [valor, setValor] = useState(1)

    const addSono = () => {

        if(info.sono == ''){
            setInfo({...info, sono: valor})
            fechamodal()
            Alert.alert('Sucesso!','Sucesso!')
        } else {
            Alert.alert('Campo já preenchido','Campo já preenchido')
            fechamodal()
            console.log(info)
        }

    }

    return(
         <View style={styles.containerModal}>
            <View style={styles.containerTitulo}>
                <Text style={styles.titulo}>Como está seu sono hoje?</Text>
            </View >
            <View style={styles.containerModalConteudo}>
                {
                    (valor) == 1 ? <SemSono />
                    :
                    (valor) == 2 ? <Sonolento />
                    :
                    (valor) == 3 ? <ComSono />
                    : <></>
                }
                <Slider
                        style={{width: '75%', height: 40}}
                        minimumValue={1}
                        maximumValue={3}
                        minimumTrackTintColor="#FFF"
                        maximumTrackTintColor="#000000"
                        value={valor}
                        onValueChange={ (valorSelecionado) => {setValor(parseInt(valorSelecionado.toFixed(0), '10'))}}
                        thumbTintColor='#FFF'
                    />
            </View>
            <View style={styles.containerBotaoConfirmar}>
                <TouchableOpacity style={styles.botaoConfirmar} onPress={addSono}>
                    <Text style={styles.textoBotao}>Confirmar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const Agua = (props) => {

    const { info, setInfo, fechamodal } = props;

    const [valor, setValor] = useState(1)

    const addAgua = () => {

        if(info.agua == ''){
            setInfo({...info, agua: valor})
            fechamodal()
            Alert.alert('Sucesso!','Sucesso!')
        } else {
            Alert.alert('Campo já preenchido','Campo já preenchido')
            fechamodal()
            console.log(info)
        }

    }

    return(
         <View style={styles.containerModal}>
            <View style={styles.containerTitulo}>
                <Text style={styles.titulo}>Tomou quantos copos d’agua hoje?</Text>
            </View>
            <View style={styles.containerModalConteudo}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    {
                        (valor) == 21 ? 
                            <Text style={{ fontSize: 60, fontWeight: 'bold', color: '#FFF' }}>+{(valor - 1)}</Text>
                            :
                            <Text style={{ fontSize: 60, fontWeight: 'bold', color: '#FFF' }}>{valor}</Text>
                    }
                    <View style={{ marginLeft: 5, alignItems: 'center'}}>
                        <Copo />
                        <Text style={{ color: '#FFF' }}>200 ml</Text>
                    </View>
                </View>
                <Slider
                    style={{width: '75%', height: 40}}
                    minimumValue={1}
                    maximumValue={21}
                    minimumTrackTintColor="#FFF"
                    maximumTrackTintColor="#000000"
                    value={valor}
                    onValueChange={ (valorSelecionado) => {setValor(parseInt(valorSelecionado.toFixed(0), '10'))}}
                    thumbTintColor='#FFF'
                />
            </View>
            <View style={styles.containerBotaoConfirmar}>
                <TouchableOpacity style={styles.botaoConfirmar} onPress={addAgua}>
                    <Text style={styles.textoBotao}>Confirmar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const Sintomas = (props) => {

    const { info, setInfo, fechamodal } = props;

    const [sintomas, setSintomas] = useState([
        'Não',
        'Febre',
        'Falta de ar',
        'Tosse',
        'Tontura',
        'Desmaio ',
        'Dor no peito',
    ])

    const [selectedValue, setSelectedValue] = useState(0);

    let sintomasItem = sintomas.map(
        (item, k) => <Picker.Item label={item} value={k} key={k} />
      )

      const addSintomas = () => {

        if(info.sintomas == ''){
            setInfo({...info, sintomas: sintomas[selectedValue]})
            fechamodal()
            Alert.alert('Sucesso!','Sucesso!')
        } else {
            Alert.alert('Campo já preenchido','Campo já preenchido')
            fechamodal()
            console.log(info)
        }

    }

    return(
         <View style={styles.containerModal}>
            <View style={styles.containerTitulo}>
                <Text style={styles.titulo}>Está sentindo alguma coisa? Informe aqui.</Text>
            </View>
            <View style={styles.containerModalConteudo}>
                <Picker
                    selectedValue={selectedValue}
                    style={{ height: 50, width: '75%', alignSelf: 'center', color: '#FFF', }}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                >
                    {sintomasItem}
                </Picker>
            </View>
            <View style={styles.containerBotaoConfirmar}>
                <TouchableOpacity style={styles.botaoConfirmar} onPress={addSintomas}>
                    <Text style={styles.textoBotao}>Confirmar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const Peso = (props) => {

    const { info, setInfo, fechamodal } = props;

    const [valor, setValor] = useState(1)

    const addPeso = () => {

        if(info.peso == ''){
            setInfo({...info, peso: valor})
            fechamodal()
            Alert.alert('Sucesso!','Sucesso!')
        } else {
            Alert.alert('Campo já preenchido','Campo já preenchido')
            fechamodal()
            console.log(info)
        }

    }

    return(
         <View style={styles.containerModal}>
            <View style={styles.containerTitulo}>
                <Text style={styles.titulo}>Qual é seu peso?</Text>
            </View>
            <View style={styles.containerModalConteudo}>
            <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
                <Text style={{ fontSize: 60, fontWeight: 'bold', color: '#FFF' }}>{valor}</Text>
                <Text style={{ fontSize: 30, color: '#FFF' }}>kg</Text>
            </View>
            <Slider
                        style={{width: '75%', height: 40}}
                        minimumValue={1}
                        maximumValue={150}
                        minimumTrackTintColor="#FFF"
                        maximumTrackTintColor="#000000"
                        value={valor}
                        onValueChange={ (valorSelecionado) => {setValor(parseFloat(valorSelecionado.toFixed(1), '10'))}}
                        thumbTintColor='#FFF'
                    />
            </View>
            <View style={styles.containerBotaoConfirmar}>
                <TouchableOpacity style={styles.botaoConfirmar} onPress={addPeso}>
                    <Text style={styles.textoBotao}>Confirmar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const Confirmar = (props) => {

    const { info, setInfo, fechamodal } = props;
    
    return(
        <View style={styles.containerModal}>
           <View style={styles.containerTitulo}>
               <Text style={styles.titulo}>Confirmar informações Diárias?</Text>
           </View>
           <View style={styles.containerModalConteudo}>
           
           </View>
           <View style={styles.containerBotaoConfirmar}>
               <TouchableOpacity style={[styles.botaoConfirmar, { marginBottom: 125 }]} onPress={() => {
                    asyncStorage.getData("User").then(result => {
                        if(result != null) { 
                            setInfo({...info, idoso_Cpf: result.Cpf.toString()})

                            InfoDiarias.selectData(result.Cpf.toString(), info.data ).then(resultado => {  
                                if(resultado){
                                    InfoDiarias.create(info).then(result => {  
                                        console.info(result)
                                    })
                                } else {
                                    Alert.alert("Informações Cadastradas","Informações já cadastradas, volte amanhã")
                                }
                            })
                        }
                    }), fechamodal()
                    /*InfoDiarias.create(info).then(result => {  
                        
                    }), fechamodal()
                    */
               }}>
                   <Text style={styles.textoBotao}>Confirmar</Text>
               </TouchableOpacity>
           </View>
       </View>
   )

}