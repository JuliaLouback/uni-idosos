import React, { useState, useEffect } from 'react';
import { View, FlatList,Text, TouchableOpacity, Image } from 'react-native';
import TituloIdoso from '../../TituloIdoso'
import styles from './style'
import Eventos from '../../../../database/Eventos';
import Idoso from '../../../../database/Idoso';

function ListaEventos({ navigation, route }){

    const [items, setItems] = useState([]);
    const [idoso, setIdoso] = useState('');

    useEffect(() => {

      let isMounted = true;    

      if (isMounted){
        const unsubscribe = navigation.addListener('focus', () => {
          Idoso.findByUserCuidadorCpf(route.params.Cpf).then(result => {
            setIdoso(result)
            Eventos.findEvento(route.params.Cpf).then(result => setItems(result))
          })
        })

        return unsubscribe;
      }
    }, [navigation]);        

    function getHours(item){
      if(item != undefined){
        let horario = item.split(" ")[1].split(":")
        return horario[0]+":"+horario[1]
      }
  
      return ""
    }

    function getDate(item){
      if(item != undefined){
        let data = item.split(" ")[0].split("-")
        var months = ['Jan','Fev','Mar','Abr','Maio','Jun','Jul','Ago','Set','Out','Nov','Dez'];

        return data[2]+"  "+months[data[1]-1]
      }
  
      return ""
    }

    return <View style={styles.container}>
            <TituloIdoso titulo="Eventos/Consultas"></TituloIdoso>
            <View style={styles.viewButton}>
              <TouchableOpacity onPress={() => navigation.navigate("CadastroEventos", {Cpf: idoso.Cpf})} style={styles.btnCadastrar}>
                <Text style={styles.txtCadastrar}>Cadastrar</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.viewList}>
                <FlatList
                data={items}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) =>
                    <View key={item.Id}>
                       <View style={styles.viewData}>
                        <Text style={styles.textData}>{getDate(item.Data)}</Text>
                      </View>
                      <TouchableOpacity onPress={() => navigation.navigate("EditarEventos", item)} style={styles.button} >
                        <View style={styles.viewDirection}>
                          <Text style={styles.titulo}>{getHours(item.Data)}</Text>
                          <Text style={styles.subtitulo}>{item.Titulo}</Text>
                        </View>
                      </TouchableOpacity>
                    </View>
            }
          />
            </View>
    </View>
}

export default ListaEventos;
