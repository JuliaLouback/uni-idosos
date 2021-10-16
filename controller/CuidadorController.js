import React, {useState} from "react";
import Endereco from '../database/Endereco'
import Telefone from "../database/Telefone";
import Cuidador from "../database/Cuidador";
import { Alert } from "react-native";

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
        TelefoneId: '',
        EnderecoId: ''
    }
    
    Endereco.create(endereco).then(EnderecoId => {
       
        Telefone.create(obj.Tel).then(TelefoneId => {
            cuidador.TelefoneId = TelefoneId
            cuidador.EnderecoId = EnderecoId

            Cuidador.create(cuidador).then(result => Alert.alert("Cadastro Efetuado", "Seu cadastro foi realizado com sucesso! Realize o login."))
            
        })
    });
}

export default { create };