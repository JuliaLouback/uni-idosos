import React, {useState} from "react";
import Cuidador from "../database/Cuidador";
import Idoso from "../database/Idoso";
import CuidadorController from "./CuidadorController";
import IdosoController from "./IdosoController";
import base64 from 'react-native-base64'

const findByUser = (email, senha, navigation) => {
   
    Cuidador.findByUser(email, base64.encode(senha)).then(cuidador => {
        CuidadorController.select(cuidador.Cpf)
        navigation.navigate("Home", cuidador.Nome)
    }) 
}

const findByUserIdoso = (email, senha, navigation) => {
    Idoso.findByUser(email, base64.encode(senha)).then(idoso => {
        IdosoController.select(idoso.Cpf)
        navigation.navigate("HomeIdoso", idoso.Nome)
    }) 
}


export default {findByUser, findByUserIdoso}