import React, {useState} from "react";
import Endereco from '../database/Endereco'
import Telefone from "../database/Telefone";
import Idoso from "../database/Idoso";
import { Alert } from "react-native";
import asyncStorage from "../services/asyncStorage";
import base64 from 'react-native-base64'

const create = (obj) => {

    const endereco = {
        Cep: obj.Cep,
        Numero: obj.Numero,
        Rua: obj.Rua,
        Bairro: obj.Bairro, 
        Cidade: obj.Cidade,
        Estado: obj.Estado
    }

    const idoso = {
        Cpf: obj.Cpf,
        Nome: obj.Nome,
        Email: obj.Email,
        Senha: base64.encode(obj.Senha),
        Cuidador_Cpf: obj.Cuidador_Cpf,
        Telefone: '',
        Endereco: ''
    }
    
    Endereco.create(endereco).then(endereco_id => {
       
        Telefone.create(obj.Tel).then(telefone_id => {
           
            idoso.Endereco = {Endereco_Id: endereco_id, ...endereco }
            idoso.Telefone = {Telefone_Id: telefone_id, Telefone: obj.Tel}

            Idoso.create(idoso).then(result => {  
                console.info(idoso)
                //asyncStorage.storeData("User", JSON.stringify(cuidador))
            })
            
        })
    });
}

const update = (obj) => {

    const endereco = {
        Endereco_Id: obj.Endereco_Id,
        Cep: obj.Cep,
        Numero: obj.Numero,
        Rua: obj.Rua,
        Bairro: obj.Bairro, 
        Cidade: obj.Cidade,
        Estado: obj.Estado
    }

    const telefone = {
        Telefone_Id: obj.Telefone_Id,
        Telefone: obj.Tel
    }

    const idoso = {
        Cpf: obj.Cpf,
        Nome: obj.Nome,
        Email: obj.Email,
        Senha: base64.encode(obj.Senha),
        Endereco: { ...endereco},
        Telefone: {...telefone},
        Endereco_Id: obj.Endereco_Id,
        Telefone_Id: obj.Telefone_Id,
        isEnable: obj.isEnable,
        Cuidador_Cpf: obj.Cuidador_Cpf
    }
    
    Endereco.update(endereco).then(result => {  
        Telefone.update(telefone).then(result => {
            Idoso.update(idoso).then(result => {
                asyncStorage.storeData("User", JSON.stringify(idoso))
            })
        })    
    })
           
}

const remove = (obj) => {
     
    Endereco.remove(obj.Endereco_Id).then(result => {  
        Telefone.remove(obj.Telefone_Id).then(result => {
            Idoso.remove(obj.Cpf).then(result => {
                asyncStorage.removeData("User")
            })
        })    
    })
}

const select = (cpf) => {

    Idoso.findByUserCpf(cpf).then(idoso => {
        Endereco.findById(idoso.Endereco_Id).then(endereco => {
            Telefone.findById(idoso.Telefone_Id).then(telefone => {
                asyncStorage.storeData("User", JSON.stringify({...idoso, Endereco: endereco, Telefone: telefone }))
                //console.info( JSON.stringify({...cuidador, Endereco: endereco, Telefone: telefone }))
            })
        })
    })
}

export default { create, update, remove, select };