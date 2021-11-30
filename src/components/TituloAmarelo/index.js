import React from "react";
import {View, Text, Image} from 'react-native'
import styles from './style'

function Titulo ({titulo}){
    return(
        <View style={styles.container}>
            <Image source={require('../../img/backgroundYellow.png')} style={styles.image}/>
            <Text style={styles.text}>{titulo}</Text>
        </View>
    );
}

export default Titulo;