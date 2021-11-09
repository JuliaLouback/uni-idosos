import React, { useState, useEffect } from 'react';
import { View, FlatList,Text, TouchableOpacity, Image } from 'react-native';
import TituloIdoso from '../../TituloIdoso'
import styles from './style'
import db from "../../../../database/SQLiteDatabase";
import { useIsFocused } from '@react-navigation/native';
import Eventos from '../../../../database/Eventos';

function ListaEventos({ navigation, route }){

    const [items, setItems] = useState([]);
    const [empty, setEmpty] = useState([]);
    const [idoso, setIdoso] = useState('');
    const isFocused = useIsFocused('');

    useEffect(() => {

      let isMounted = true;
      
      if(isMounted){
        const unsubscribe = navigation.addListener('focus', () => {
          db.transaction((tx) => {
            tx.executeSql(
              "SELECT * FROM Idoso WHERE Cuidador_Cpf="+route.params.Cpf+";",
              [],
              (tx, { rows }) => {         
                if (rows.length > 0) {
                  setIdoso(rows.item(0))
                }
              },
            );
          });

          db.transaction((tx) => {
            tx.executeSql(
              'SELECT * FROM Eventos WHERE Idoso_Cpf = (Select Cpf from Idoso WHERE Cuidador_Cpf = ' + route.params.Cpf + ')  ORDER BY Data asc' ,
              [],
              (tx, results) => {
                var temp = [];
                for (let i = 0; i < results.rows.length; ++i){
                  temp.push(results.rows.item(i));
                }
                setItems(temp);
                
                if (results.rows.length >= 1) {
                  setEmpty(false);
                } else {
                  setEmpty(true)
                }            
              } 
            );
          });
        });
      }

      return () => { isMounted = false }; // cleanup toggles value, if unmounted
    },[])

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
