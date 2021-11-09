import React, {useState} from "react";
import Eventos from '../database/Eventos'

const create = (obj) => {

    const eventos = {
        Titulo: obj.Titulo,
        Descricao: obj.Descricao,
        Data: obj.Data,
        Idoso_Cpf: obj.Idoso_Cpf
    }
    
    Eventos.create(eventos).then(result => {  
        console.info(eventos)
    })
            
}

const update = (obj) => {

    const eventos = {
        Titulo: obj.Titulo,
        Descricao: obj.Descricao,
        Data: obj.Data,
        Idoso_Cpf: obj.Idoso_Cpf,
        Id: obj.Id
    }

    Eventos.update(eventos).then(result => {})  
}

const remove = (obj) => {
    Eventos.remove(obj).then(result => {})
}

export default { create, update, remove };