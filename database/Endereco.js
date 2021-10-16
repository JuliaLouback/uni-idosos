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

export default { create };