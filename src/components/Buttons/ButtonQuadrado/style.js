import React from 'react';
import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 20,
      elevation: 3,
      backgroundColor: '#FF2D55',
      flex: 1,
      margin: 5,
      marginBottom: 15,
      height: 140,
      minWidth: 0, 
      maxWidth: 140
    },
    text: {
      fontSize: 14,
      lineHeight: 25,
      fontWeight: '100',
      letterSpacing: 0.25,
    },
});

export default styles