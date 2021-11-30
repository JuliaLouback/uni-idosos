import React, { useState, useEffect } from 'react';
import db from "./SQLiteDatabase";
import {Alert} from 'react-native'

  db.transaction((tx) => {
    tx.executeSql(
      "CREATE TABLE IF NOT EXISTS Info_Diarias (Id INTEGER PRIMARY KEY AUTOINCREMENT, Humor TEXT, Peso DECIMAL, Agua INTEGER, Sono TEXT, Sintomas TEXT, Data DATETIME);"
    );
  });

const create = (obj) => {

    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          "INSERT INTO Info_Diarias (Humor, Peso, Agua, Sono, Sintomas, Data) values (?, ?, ?, ?, ?, ?);",
          [obj.Humor, obj.Peso, obj.Agua, obj.Sono, obj.Sintomas, obj.Data],
          //-----------------------
          (_, { rowsAffected, insertId }) => {
            if (rowsAffected > 0) {
              resolve(insertId)
            }
            else reject("Error inserting obj: " + JSON.stringify(obj)); // insert falhou
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
        "SELECT * FROM Info_Diarias ;",
        //-----------------------
        (_, { rows }) => {
          if (rows.length > 0) {
            var temp = [];
            for (let i = 0; i < rows.length; ++i){
              temp.push(results.rows.item(i));
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

export default { create, select };