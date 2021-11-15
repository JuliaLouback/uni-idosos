import React, { useState, useEffect } from 'react';
import db from "./SQLiteDatabase";
import {Alert} from 'react-native'

  db.transaction((tx) => {
    tx.executeSql(
      "CREATE TABLE IF NOT EXISTS Eventos (Id INTEGER PRIMARY KEY AUTOINCREMENT, Titulo TEXT, Descricao TEXT, Data DATETIME, Idoso_Cpf TEXT);"
    );
  });

const create = (obj) => {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          "INSERT INTO Eventos (Titulo,Descricao,Data,Idoso_Cpf) values (?,?,?,?);",
          [obj.Titulo,obj.Descricao,obj.Data,obj.Idoso_Cpf],
          //-----------------------
          (_, { rowsAffected, insertId }) => {
            if (rowsAffected > 0) resolve(insertId);
            else reject("Error inserting obj: " + JSON.stringify(obj)); // insert falhou
          },
          (_, error) => reject(error) // erro interno em tx.executeSql
        );
      });
    });
};

const update = (obj) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      //comando SQL modificável
      tx.executeSql(
        "UPDATE Eventos SET Titulo=?,Descricao=?,Data=? WHERE Id=?;",
        [obj.Titulo,obj.Descricao,obj.Data, obj.Id],
        //-----------------------
        (_, { rowsAffected }) => {
          if (rowsAffected > 0) resolve(rowsAffected);
          else { 
            //Alert.alert(obj.TelefoneId.toString())
            reject("Error updating obj: id=" + id);} // nenhum registro alterado
        },
        (_, error) => reject(error) // erro interno em tx.executeSql
      );
    });
  });
};

const remove = (id) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      //comando SQL modificável
      tx.executeSql(
        "DELETE FROM Eventos WHERE Id=?;",
        [id],
        //-----------------------
        (_, { rowsAffected }) => {
          resolve(rowsAffected);
        },
        (_, error) => reject(error) // erro interno em tx.executeSql
      );
    });
  });
};

const findEvento = (cpf) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM Eventos WHERE Idoso_Cpf = (Select Cpf from Idoso WHERE Cuidador_Cpf = ' + cpf + ')  ORDER BY Data asc' ,
        [],
        
        (_, { rows }) => {
       
          if (rows.length > 0) {
            
            var temp = [];
            for (let i = 0; i < rows.length; ++i){
              temp.push(rows.item(i));
            }

            console.info(temp)
            resolve(temp);
          }else {
            reject("Obj not found: brand=" + brand);
          }
        } ,
        (_, error) => reject(error) // erro interno em tx.executeSql 
        
      );
    }); 
  });
};

export default { create, update, remove, findEvento };