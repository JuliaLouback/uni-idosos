import React from "react";
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    subContainer: {
        flex: 5,
        marginLeft: 35,
        marginRight: 35,
    },
    result: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
      
    },
    resultPunctuation: {
        fontSize: 96,
       
    },
    resultInfo: {
        fontSize: 36,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        
    },
    information: {
        flex: 1,
    },
    informationTitle: {
        flex: 0.15,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FB7366',
        margin: 5,
    },  
    informationText: {
        flex: 0.75,
        borderRadius: 10,
        flexDirection: 'row',
        backgroundColor: '#FFC5BF',
    },
    informationInner: {
        flex: 1,
        marginLeft: 55,
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    buttons: {
        flex: 1,
        justifyContent: 'flex-start'
    },
    buttonRecalcular: {
        padding: 20
    }
  });

export default styles;
