import React, { useState, useEffect } from 'react';
import db from "./SQLiteDatabase";
import {Alert} from 'react-native'

  db.transaction((tx) => {
    tx.executeSql(
      "CREATE TABLE IF NOT EXISTS Endereco (Id INTEGER PRIMARY KEY AUTOINCREMENT, Cep TEXT, Numero INT, Rua TEXT, Bairro TEXT, Cidade TEXT, Estado TEXT);"
    );
  });

const create = (obj) => {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          "INSERT INTO Endereco (Cep, Numero, Rua, Bairro, Cidade, Estado) values (?, ?, ?, ?, ?, ?);",
          [obj.Cep, obj.Numero, obj.Rua, obj.Bairro, obj.Cidade, obj.Estado],
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
        "UPDATE Endereco SET Cep=?, Numero=?, Rua = ?, Bairro = ?, Cidade = ?, Estado = ? WHERE Id=?;",
        [obj.Cep, obj.Numero, obj.Rua, obj.Bairro, obj.Cidade, obj.Estado, obj.EnderecoId],
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
        "DELETE FROM Endereco WHERE Id=?;",
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

export default { create, update, remove };