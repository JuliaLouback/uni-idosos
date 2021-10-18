import React, {useState} from "react";
import Cuidador from "../database/Cuidador";
import CuidadorController from "./CuidadorController";

const findByUser = (email, senha, navigation) => {
   
    Cuidador.findByUser(email, senha).then(cuidador => {
        CuidadorController.select(cuidador.Cpf)
        navigation.navigate("Home")
    }) 
}

export default {findByUser}