import React, {useState} from "react";
import ContatosEmergencia from '../database/ContatosEmergencia'
import Telefone from "../database/Telefone";
import asyncStorage from "../services/asyncStorage";
import { Alert } from "react-native";

const create = (obj, navigation) => {

    const contatosEmergencia = {
        Nome: obj.Nome,
        Parentesco: obj.Parentesco,
        Telefone_Id: '',
        Idoso_Cpf: obj.Idoso_Cpf
    }
    
   
    Telefone.create(obj.Tel).then(telefone_id => {
        
        contatosEmergencia.Telefone_Id = telefone_id

        ContatosEmergencia.create(contatosEmergencia).then(result => {  
            console.info(contatosEmergencia)
            
        })
        
    })
}

const update = (obj) => {

    const telefone = {
        Telefone_Id: obj.Telefone_Id,
        Telefone: obj.Tel
    }

    const contatosEmergencia = {
        Nome: obj.Nome,
        Parentesco: obj.Parentesco,
        Telefone_Id: obj.Telefone_Id,
        Idoso_Cpf: obj.Idoso_Cpf,
        Id: obj.Id
    }
    
    Telefone.update(telefone).then(result => {
        ContatosEmergencia.update(contatosEmergencia).then(resultado => {
            
        })
    })     
}

const remove = (obj) => {
     
    Telefone.remove(obj.Telefone_Id).then(result => {
        ContatosEmergencia.remove(obj.Id).then(result => {
            
        })
    })
}

export default { create, update, remove };