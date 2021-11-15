import React, { useState, useEffect } from 'react';
import { View, FlatList,Text, TouchableOpacity, Image, Linking } from 'react-native';
import TituloVermelho from '../../TituloVermelho'
import styles from './style'
import ContatosEmergencia from '../../../../database/ContatosEmergencia';
import Idoso from '../../../../database/Idoso';

function ListaContatosEmergencia({ navigation, route }){

    const [items, setItems] = useState([]);
    const [idoso, setIdoso] = useState('');
 
    useEffect(() => {

      let isMounted = true;    

      if (isMounted){
        const unsubscribe = navigation.addListener('focus', () => {
          Idoso.findByUserCuidadorCpf(route.params.Cpf).then(result => {
            setIdoso(result)
            ContatosEmergencia.select(route.params.Cpf).then(result => setItems(result))
          })
        }); 

        return unsubscribe; 
      }

    }, [navigation]);       

    return <View style={styles.container}>
            <TituloVermelho titulo="Contatos de Emergência"></TituloVermelho>
            <View style={styles.viewButton}>
              <TouchableOpacity onPress={() => navigation.navigate("CadastroContatosEmergencia", {Cpf: idoso.Cpf})} style={styles.btnCadastrar}>
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
                      <TouchableOpacity onPress={() => navigation.navigate("EditarContatosEmergencia", item)} onLongPress={() => Linking.openURL(`tel:${item.Telefone}`)}  style={styles.button} >
                        <Image source={require('../../../img/sos.png')} style={{marginTop: 10, height: 35, width:50}} />
                        <Text style={styles.titulo}>{item.Nome.split(" ")[0]}</Text>
                        <Text style={styles.subtitulo}>{item.Parentesco}</Text>
                      </TouchableOpacity>
                    </View>
            }
          />
            </View>
    </View>
}

export default ListaContatosEmergencia;
