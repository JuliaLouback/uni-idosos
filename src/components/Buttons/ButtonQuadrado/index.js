import React from 'react';
import { Text, View, StyleSheet, Pressable, TouchableOpacity } from 'react-native';
import styles from './style'

export function ButtonQuadrado(props) {
  const { 
    altura = 100, 
    larguraMinima = 0, 
    larguraMaxima, 
    cor = 'gray', 
    corFonte = '#fff', 
    onPress, 
    title, 
    fontWeight, 
    icone = '' 
  } = props;
  
  return (
    <TouchableOpacity style={[styles.button, { backgroundColor: cor, height: altura, minWidth: larguraMinima, maxWidth: larguraMaxima}]} onPress={onPress}>
      <Image source={require('../../../img/sos.png')}/>
      <Text style={[styles.text, { fontWeight: fontWeight, color: corFonte }]}>{title}</Text>
    </TouchableOpacity>
  );
}