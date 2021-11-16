import React from 'react';
import { Text, View, StyleSheet, Pressable, TouchableOpacity } from 'react-native';

export function ButtonInfo(props) {
  
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
      {props.children}
      <Text style={[styles.text, { fontWeight: fontWeight, color: corFonte }]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    elevation: 3,
    backgroundColor: 'grey',
    flex: 1,
    margin: 5,
    marginBottom: 15,
  },
  text: {
    fontSize: 14,
    lineHeight: 25,
    fontWeight: '100',
    letterSpacing: 0.25,
  },
});