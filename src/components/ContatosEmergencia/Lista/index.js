import React, { useState, useEffect } from 'react';
import { View, FlatList,Text, TouchableOpacity, Image } from 'react-native';
import TituloVermelho from '../../TituloVermelho'
import ButtonQuadrado from '../../Buttons/ButtonQuadrado';
import styles from './style'
import ContatosEmergencia from '../../../../database/ContatosEmergencia';
import db from "../../../../database/SQLiteDatabase";
import { useIsFocused } from '@react-navigation/native';

function ListaContatosEmergencia({ navigation, route }){

    const [items, setItems] = useState([]);
    const [empty, setEmpty] = useState([]);

    const isFocused = useIsFocused();
    
    useEffect(() => {
      db.transaction((tx) => {
        tx.executeSql(
          'SELECT * FROM Contatos_emergencia INNER JOIN Telefone ON Contatos_emergencia.Telefone_Id = Telefone.Id',
          [],
          (tx, results) => {
            var temp = [];
            for (let i = 0; i < results.rows.length; ++i)
              temp.push(results.rows.item(i));
            setItems(temp);
  
            if (results.rows.length >= 1) {
              setEmpty(false);
            } else {
              setEmpty(true)
            }
  
          }
        );
  
      });
    }, [isFocused]);

    const renderItem = ({ item }) => (
       <Text>{item.Nome}</Text>
    )

    return <View style={styles.container}>
            <TituloVermelho titulo="Contatos de Emergência"></TituloVermelho>
            <View style={styles.viewButton}>
                <TouchableOpacity onPress={() => navigation.navigate("CadastroContatosEmergencia", {Cpf: route.params.Cpf})} style={styles.btnCadastrar}>
                    <Text style={styles.txtCadastrar}>Cadastrar</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.viewList}>
                <FlatList
                numColumns ={2}
                data={items}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) =>
                    <View key={item.Id}>
                        <TouchableOpacity onPress={() => navigation.navigate("EditarContatosEmergencia", item)} style={styles.button} >
                            <Image source={require('../../../img/sos.png')} style={{marginTop: 10, height: 35, width:50}} />
                            <Text style={styles.titulo}>{item.Nome.split(" ")[0]}</Text>
                            <Text style={styles.subtitulo}>{item.Parentesco.split(" ")[0]}</Text>
                        </TouchableOpacity>
                    </View>
            }
          />
            </View>
    </View>
}

export default ListaContatosEmergencia;
