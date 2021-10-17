import React, {useState} from "react";
import { Alert } from "react-native";
import Cuidador from "../database/Cuidador";
import Endereco from "../database/Endereco";
import Telefone from "../database/Telefone";
import asyncStorage from "../services/asyncStorage";

const findByUser = (email, senha, navigation) => {
   
    Cuidador.findByUser(email, senha).then(cuidador => {
        
       Telefone.findById(cuidador.Telefone_Id).then(telefone => {
            Endereco.findById(cuidador.Endereco_Id).then(endereco => {
                cuidador.Endereco = { ...endereco, EnderecoId: cuidador.Endereco_Id },
                cuidador.Telefone = {  TelefoneId: cuidador.Telefone_Id , Telefone: telefone} 

                asyncStorage.storeData("User", JSON.stringify(cuidador))

                navigation.navigate("Home")
            })
        })
    }) 
}

export default {findByUser}