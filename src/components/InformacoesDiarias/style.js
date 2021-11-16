import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    botoesGrande: {
      flex: 3, 
      justifyContent: 'center'
    },
    internalContainer: {
      flexWrap: 'wrap',
      flexDirection: 'row',
      justifyContent: 'flex-start',
    },
    outros: {
      flex: 2, 
    },
    subTitulo: {
      color: '#515050',
      fontWeight: 'bold',
      fontSize: 24
    },
    botoesOutros: {
      flexWrap: 'wrap',
      flexDirection: 'row',
      justifyContent: 'flex-start',
    },
    botaoOutros: {
      width: 50,
      height: 50,
      borderRadius: 13.5,
      marginTop: 20,
      marginRight: 10,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#FB7366'
    },
  });
  
export default styles