import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value)
  } catch (e) {
    // saving error
  }
}

const removeData = async (key) => {
  try {
    await AsyncStorage.removeItem(key)
  } catch (e) {
    // saving error
  }
}


const getData = async (value) => {
    try {
        const jsonValue = await AsyncStorage.getItem(value)
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(e) {
        // error reading value
    }
}

export default { storeData, getData, removeData };