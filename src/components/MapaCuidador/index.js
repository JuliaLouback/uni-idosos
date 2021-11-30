import React, { useState,useEffect } from 'react';
import {PermissionsAndroid, Platform,Text, Image, TouchableOpacity, View} from 'react-native'
import openMap from 'react-native-open-maps';
import Geolocation from '@react-native-community/geolocation';
import Geocoder from 'react-native-geocoding';
import Titulo from '../Titulo'
import styles from './style'
import asyncStorage from "../../../services/asyncStorage";

function MapaCuidador ({navigation, route}){ 

    const [enderecoAtual, setEnderecoAtual] = useState('')
    const [enderecoIdoso, setEnderecoIdoso] = useState('');

    const callLocation = () => {
        if(Platform.OS === 'ios') {
          getLocation();
        } else {
          const requestLocationPermission = async () => {
            const granted = await PermissionsAndroid.request(
              PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
              {
                title: "Permissão de Acesso à Localização",
                message: "Este aplicativo precisa acessar sua localização.",
                buttonNeutral: "Pergunte-me depois",
                buttonNegative: "Cancelar",
                buttonPositive: "OK"
              }
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
              getLocation();
            } else {
              alert('Permissão de Localização negada');
            }
          };
          requestLocationPermission();
        }
      }
      
    const getLocation = () => {
        Geolocation.getCurrentPosition(
          (position) => {
            getAddressFromCoordinates(position.coords.latitude,position.coords.longitude )
          },
          (error) => alert(error.message),
          { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        );
        const watchID = Geolocation.watchPosition((position) => {
            getAddressFromCoordinates(position.coords.latitude,position.coords.longitude )
        });
    }

    function getAddressFromCoordinates(lat, long) {
        return new Promise((resolve) => {
          
          const url = `https://reverse.geocoder.ls.hereapi.com/6.2/reversegeocode.json?prox=${lat}%2C${long}%2C250&mode=retrieveAddresses&maxresults=1&gen=9&apiKey=41wwy4DdiarZQe0HRkVzVgMgvf0GeLH2z4Y-g3YhCSc`
          fetch(url)
            .then(res => res.json())
            .then((resJson) => {

                if (resJson
                    && resJson.Response
                    && resJson.Response.View
                    && resJson.Response.View[0]
                    && resJson.Response.View[0].Result
                    && resJson.Response.View[0].Result[0]) 
                {
                setEnderecoAtual(resJson.Response.View[0].Result[0].Location.Address.Label)
                resolve(resJson.Response.View[0].Result[0].Location.Address.Label)
              } else {
                resolve()
              }
            })
            .catch((e) => {
              console.log('Error in getAddressFromCoordinates', e)
              resolve()
            })
        })
      }

    function abrirMapa() {
      openMap({ start: enderecoAtual, end: enderecoIdoso });
    }

    useEffect(() => {

        let isMounted = true;    

        if (isMounted){
            const unsubscribe = navigation.addListener('focus', () => {
                callLocation()
                asyncStorage.getData("LocalizacaoIdoso").then(result => {
                  setEnderecoIdoso(result.endereco)
                })
            })

            return unsubscribe
        }
    }, [navigation]);      

    return (
      <>
      <Titulo titulo="Mapa"></Titulo>
      <View style={styles.containerDois}>
        <TouchableOpacity onPress={abrirMapa} style={styles.btnLocalizacao}>
            <Image source={require("../../img/localizacao.png")} style={styles.image}></Image>
            <Text style={styles.text}>Localizar Idoso</Text>
        </TouchableOpacity>
      </View>
      </>
    )
}

export default MapaCuidador