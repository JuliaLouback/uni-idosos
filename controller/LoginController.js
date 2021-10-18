import React, {useState} from "react";
import Cuidador from "../database/Cuidador";
import CuidadorController from "./CuidadorController";
import base64 from 'react-native-base64'

const findByUser = (email, senha, navigation) => {
   
    Cuidador.findByUser(email, base64.encode(senha)).then(cuidador => {
        CuidadorController.select(cuidador.Cpf)
        navigation.navigate("Home")
    }) 
}

export default {findByUser}