import React, {useState} from "react";
import Endereco from '../database/Endereco'
import Telefone from "../database/Telefone";
import Cuidador from "../database/Cuidador";
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

    const cuidador = {
        Cpf: obj.Cpf,
        Nome: obj.Nome,
        Email: obj.Email,
        Senha: base64.encode(obj.Senha),
        Telefone: '',
        Endereco: ''
    }
    
    Endereco.create(endereco).then(endereco_id => {
       
        Telefone.create(obj.Tel).then(telefone_id => {
           
            cuidador.Endereco = {Endereco_Id: endereco_id, ...endereco }
            cuidador.Telefone = {Telefone_Id: telefone_id, Telefone: obj.Tel}

            Cuidador.create(cuidador).then(result => {  
                console.info(cuidador)
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

    const cuidador = {
        Cpf: obj.Cpf,
        Nome: obj.Nome,
        Email: obj.Email,
        Senha: base64.encode(obj.Senha),
        Endereco: { ...endereco},
        Telefone: {...telefone},
        Endereco_Id: obj.Endereco_Id,
        Telefone_Id: obj.Telefone_Id,
        isEnable: obj.isEnable
    }
    
    Endereco.update(endereco).then(result => {  
        Telefone.update(telefone).then(result => {
            Cuidador.update(cuidador).then(result => {
                asyncStorage.storeData("User", JSON.stringify(cuidador))
            })
        })    
    })
           
}

const remove = (obj) => {
     
    Endereco.remove(obj.Endereco_Id).then(result => {  
        Telefone.remove(obj.Telefone_Id).then(result => {
            Cuidador.remove(obj.Cpf).then(result => {
                asyncStorage.removeData("User")
            })
        })    
    })
}

const select = (cpf) => {

    Cuidador.findByUserCpf(cpf).then(cuidador => {
        Endereco.findById(cuidador.Endereco_Id).then(endereco => {
            Telefone.findById(cuidador.Telefone_Id).then(telefone => {
                asyncStorage.storeData("User", JSON.stringify({...cuidador, Endereco: endereco, Telefone: telefone }))
                //console.info( JSON.stringify({...cuidador, Endereco: endereco, Telefone: telefone }))
            })
        })
    })
}

export default { create, update, remove, select };