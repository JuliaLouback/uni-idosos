import React, { useState, useEffect } from 'react';
import db from "./SQLiteDatabase";
import {Alert} from 'react-native'

  db.transaction((tx) => {
    tx.executeSql(
      "CREATE TABLE IF NOT EXISTS Telefone (Id INTEGER PRIMARY KEY AUTOINCREMENT, Telefone LONG);"
    );
  });

const create = (obj) => {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          "INSERT INTO Telefone (Telefone) values (?);",
          [obj.Telefone],
          //-----------------------
          (_, { rowsAffected, insertId }) => {
            if (rowsAffected > 0) {
                Alert.alert("deu certo" + insertId)
                resolve(insertId);
            }
            else reject("Error inserting obj: " + JSON.stringify(obj)); // insert falhou
          },
          (_, error) => reject(error) // erro interno em tx.executeSql
        );
      });
    });
};

export default { create };