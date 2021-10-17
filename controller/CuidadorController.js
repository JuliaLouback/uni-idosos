import React, {useState} from "react";
import Endereco from '../database/Endereco'
import Telefone from "../database/Telefone";
import Cuidador from "../database/Cuidador";
import { Alert } from "react-native";
import asyncStorage from "../services/asyncStorage";

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
        Senha: obj.Senha,
        Telefone: '',
        Endereco: ''
    }
    
    Endereco.create(endereco).then(EnderecoId => {
       
        Telefone.create(obj.Tel).then(TelefoneId => {
           
            Cuidador.create(cuidador).then(result => {
                Alert.alert("Cadastro Efetuado", "Seu cadastro foi realizado com sucesso! Realize o login.")
                cuidador.Endereco = { ...endereco, EnderecoId: EnderecoId },
                cuidador.Telefone = {  TelefoneId: TelefoneId , Telefone: obj.Tel} 

                asyncStorage.storeData("User", JSON.stringify(cuidador))
            })
            
        })
    });
}

const update = (obj) => {

    const endereco = {
        EnderecoId: obj.EnderecoId,
        Cep: obj.Cep,
        Numero: obj.Numero,
        Rua: obj.Rua,
        Bairro: obj.Bairro, 
        Cidade: obj.Cidade,
        Estado: obj.Estado
    }

    const telefone = {
        TelefoneId: obj.TelefoneId,
        Telefone: obj.Tel
    }

    const cuidador = {
        Cpf: obj.Cpf,
        Nome: obj.Nome,
        Email: obj.Email,
        Senha: obj.Senha,
        Endereco: endereco,
        Telefone: telefone
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
     
    Endereco.remove(obj.EnderecoId).then(result => {
      
        Telefone.remove(obj.TelefoneId).then(result => {
            Cuidador.remove(CpfCuidador).then(result => {
                asyncStorage.removeData("User")
            })
        })    
    })
}

export default { create, update, remove };