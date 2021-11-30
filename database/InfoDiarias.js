import React, { useState, useEffect } from 'react';
import db from "./SQLiteDatabase";
import {Alert} from 'react-native'

  db.transaction((tx) => {
    //tx.executeSql("DROP table Info_Diarias")
    tx.executeSql(
      "CREATE TABLE IF NOT EXISTS Info_Diarias (Id INTEGER PRIMARY KEY AUTOINCREMENT, Humor INTEGER, Peso DECIMAL, Agua INTEGER, Sono INTEGER, Sintomas TEXT, Data DATETIME, Idoso_Cpf TEXT);"
    );
  });

const create = (obj) => {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          "INSERT INTO Info_Diarias (Humor, Peso, Agua, Sono, Sintomas, Data, Idoso_Cpf) values (?, ?, ?, ?, ?, ?, ?);",
          [obj.humor, obj.peso, obj.agua, obj.sono, obj.sintomas, obj.data, obj.idoso_Cpf],
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

const select = (cpf) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      //comando SQL modificável
      tx.executeSql(
        "SELECT * FROM Info_Diarias WHERE Idoso_Cpf = ?;",
        [cpf],
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

const selectData = (cpf, data) => {
  console.log(data)
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      //comando SQL modificável
      tx.executeSql(
        "SELECT * FROM Info_Diarias WHERE Idoso_Cpf = ? and Data = ?;",
        [cpf, data],
        //-----------------------
        (_, { rows }) => {
          if (rows.length > 0) {

            resolve(false)
          }
          else {
            resolve(true)
          } // nenhum registro encontrado
        },
        (_, error) => reject(error) // erro interno em tx.executeSql
      );
    });
  });
};

export default { create, select, selectData };