import React, { useState,useEffect } from 'react';
import {PermissionsAndroid, Platform,Text} from 'react-native'
import openMap from 'react-native-open-maps';
import Geolocation from '@react-native-community/geolocation';
import Geocoder from 'react-native-geocoding';

function Mapa ({navigation}){ 

    const [currentLatitude, setCurrentLatitude] = useState(0)
    const [currentLongitude, setCurrentLongitude] = useState(0)

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
            console.info("lat:"+lat)
            console.info("long:"+long)

          const url = `https://reverse.geocoder.ls.hereapi.com/6.2/reversegeocode.json?prox=${lat}%2C${long}%2C250&mode=retrieveAddresses&maxresults=1&gen=9&apiKey=41wwy4DdiarZQe0HRkVzVgMgvf0GeLH2z4Y-g3YhCSc`
          fetch(url)
            .then(res => res.json())
            .then((resJson) => {

                if (resJson
                    && resJson.Response
                    && resJson.Response.View
                    && resJson.Response.View[0]
                    && resJson.Response.View[0].Result
                    && resJson.Response.View[0].Result[0]) {
                    console.info(resJson.Response.View[0].Result[0].Location.Address.Label)
                resolve(resJson.Response.View[0].Result[0].Location.Address.Label)
              } else {
                  console.info("deu ruim")
                resolve()
              }
            })
            .catch((e) => {
              console.log('Error in getAddressFromCoordinates', e)
              resolve()
            })
        })
      }

    useEffect(() => {

        let isMounted = true;    

        if (isMounted){
            const unsubscribe = navigation.addListener('focus', () => {
                callLocation()
            })

            return unsubscribe
        }
    }, [navigation]);      

    return <Text>Julia</Text>
}

export default Mapa