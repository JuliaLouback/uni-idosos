import React, {useState} from "react";
import InfoDiarias from '../database/InfoDiarias'

const create = (obj) => {

    const info = {
        Humor: obj.humor,
        Peso: obj.peso,
        Agua: obj.agua,
        Sono: obj.sono,
        Sintomas: obj.sintomas,
        Data: obj.data
    }
    
    InfoDiarias.create(info).then(result => {  
        console.info(info)
    })
            
}

