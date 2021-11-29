import React, {useState} from "react";
import {View,Text, ScrollView, TouchableOpacity} from 'react-native'
import RadioForm from 'react-native-simple-radio-button';

import Titulo from '../../Titulo'
import styles from './style'

function Teste ({navigation}){

    const [questaoUm, setQuestaoUm] = useState(1)
    const [questaoDois, setQuestaoDois] = useState(1)
    const [questaoTres, setQuestaoTres] = useState(1)
    const [questaoQuatro, setQuestaoQuatro] = useState(1)
    const [questaoCinco, setQuestaoCinco] = useState(1)
    const [questaoSeis, setQuestaoSeis] = useState(1)
    const [questaoSete, setQuestaoSete] = useState(1)

    var radio_props = [
        {label: 'Nunca', value: 1 },
        {label: 'Raramente', value: 2 },
        {label: 'As vezes', value: 3 },
        {label: 'Frequentemente', value: 4 },
        {label: 'Sempre', value: 5 }
    ];

    function handleSubmit(){

        let soma = questaoUm + questaoDois + questaoTres + questaoQuatro + questaoCinco + questaoSeis + questaoSete
        let nivel = ""

        if(soma < 15){
            nivel = "Leve"
        } else if (soma >= 15 && soma < 22){
            nivel = "Moderado"
        } else {
            nivel = "Grave"
        }
        
        navigation.navigate("ZaritResultado", {Soma: soma, Nivel: nivel})  
    }

    return(
        <>
        <ScrollView style={styles.container}>
            <Titulo titulo="Teste de Escala Zarit"></Titulo>
            <Text style={styles.titulo}>Preencha os campos abaixo de acordo com sua experiência. Não existe respostas certas ou erradas.</Text>
            <Text style={styles.pergunta}>Sente que por causa do tempo que utiliza com o idoso já não tem tempo para você?</Text>
            <View style={styles.view}>
                <RadioForm
                    radio_props={radio_props}
                    initial={0}
                    formHorizontal={true}
                    labelHorizontal={false}
                    buttonColor={'#FB7366'}
                    selectedButtonColor={'#FB7366'}
                    buttonSize={15}
                    animation={true}
                    onPress={value => setQuestaoUm(value)}
                />
            </View>

            <Text style={styles.pergunta}>Sente-se estressado por ter que cuidar do idoso e ao mesmo tempo ser responsável por outras tarefas?</Text>
            <View style={styles.view}>
                <RadioForm
                    radio_props={radio_props}
                    initial={0}
                    formHorizontal={true}
                    labelHorizontal={false}
                    buttonColor={'#FB7366'}
                    selectedButtonColor={'#FB7366'}
                    buttonSize={15}
                    animation={true}
                    onPress={value => setQuestaoDois(value)}
                />
            </View>

            <Text style={styles.pergunta}>Acha que a situação atual afeta sua relação com amigos ou outros familiares de forma negativa?</Text>
            <View style={styles.view}>
                <RadioForm
                    radio_props={radio_props}
                    initial={0}
                    formHorizontal={true}
                    labelHorizontal={false}
                    buttonColor={'#FB7366'}
                    selectedButtonColor={'#FB7366'}
                    buttonSize={15}
                    animation={true}
                    onPress={value => setQuestaoTres(value)}
                />
            </View>

            <Text style={styles.pergunta}>Sente que sua saúde tem sido afetada por ter que cuidar do idoso?</Text>
            <View style={styles.view}>
                <RadioForm
                    radio_props={radio_props}
                    initial={0}
                    formHorizontal={true}
                    labelHorizontal={false}
                    buttonColor={'#FB7366'}
                    selectedButtonColor={'#FB7366'}
                    buttonSize={15}
                    animation={true}
                    onPress={value => setQuestaoQuatro(value)}
                />
            </View>

            <Text style={styles.pergunta}>Sente que tem perdido o controle da sua vida desde que a doença do idoso se manifestou?</Text>
            <View style={styles.view}>
                <RadioForm
                    radio_props={radio_props}
                    initial={0}
                    formHorizontal={true}
                    labelHorizontal={false}
                    buttonColor={'#FB7366'}
                    selectedButtonColor={'#FB7366'}
                    buttonSize={15}
                    animation={true}
                    onPress={value => setQuestaoCinco(value)}
                />
            </View>

            <Text style={styles.pergunta}>No geral, sente-se muito sobrecarregado por ter que cuidar do idoso?</Text>
            <View style={styles.view}>
                <RadioForm
                    radio_props={radio_props}
                    initial={0}
                    formHorizontal={true}
                    labelHorizontal={false}
                    buttonColor={'#FB7366'}
                    selectedButtonColor={'#FB7366'}
                    buttonSize={15}
                    animation={true}
                    onPress={value => setQuestaoSeis(value)}
                />
            </View>

            <Text style={styles.pergunta}>Sente-se exausto quanto tem de estar junto do idoso?</Text>
            <View style={styles.view}>
                <RadioForm
                    radio_props={radio_props}
                    initial={0}
                    formHorizontal={true}
                    labelHorizontal={false}
                    buttonColor={'#FB7366'}
                    selectedButtonColor={'#FB7366'}
                    buttonSize={15}
                    animation={true}
                    onPress={value => setQuestaoSete(value)}
                />
            </View>

            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.textButton}>Enviar</Text>
            </TouchableOpacity>
        </ScrollView>
       
        </>
    );
}

export default Teste;