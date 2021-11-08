import React, { useState, useEffect } from 'react';
import db from "./SQLiteDatabase";
import {Alert} from 'react-native'

  db.transaction((tx) => {
    tx.executeSql(
      "CREATE TABLE IF NOT EXISTS Contatos_emergencia (Id INTEGER PRIMARY KEY AUTOINCREMENT, Nome TEXT, Parentesco INT, Telefone_Id TEXT, Idoso_Cpf TEXT);"
    );
  });

const create = (obj) => {
    console.info("herrr")
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          "INSERT INTO Contatos_emergencia (Nome, Parentesco, Telefone_Id, Idoso_Cpf) values (?, ?, ?, ?);",
          [obj.Nome, obj.Parentesco, obj.Telefone_Id, obj.Idoso_Cpf],
          //-----------------------
          (_, { rowsAffected, insertId }) => {
            if (rowsAffected > 0) {
              resolve(insertId)
              console.info("deu certo emergencia")
            }
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
        "UPDATE Contatos_emergencia SET Nome=?, Parentesco=?, Telefone_Id = ?, Idoso_Cpf = ? WHERE Id=?;",
        [obj.Nome, obj.Parentesco, obj.Telefone_Id, obj.Idoso_Cpf, obj.Id],
        //-----------------------
        (_, { rowsAffected }) => {
          if (rowsAffected > 0) resolve(rowsAffected);
          else reject("Error updating obj: id=" + id); // nenhum registro alterado
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
        "DELETE FROM Contatos_emergencia WHERE Id=?;",
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

const select = () => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      //comando SQL modificável
      tx.executeSql(
        "SELECT * FROM Contatos_emergencia ;",
        //-----------------------
        (_, { rows }) => {
          console.info(rows)
          if (rows.length > 0) {
            var temp = [];
            for (let i = 0; i < rows.length; ++i){
              temp.push(results.rows.item(i));
              console.warn("aqui")
            }
            resolve(temp)
          }
          else reject("Obj not found: brand=" + brand); // nenhum registro encontrado
        },
        (_, error) => reject(error) // erro interno em tx.executeSql
      );
    });
  });
};

export default { create, update, remove, select };