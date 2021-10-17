import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import db from "./SQLiteDatabase";

db.transaction((tx) => {
  //tx.executeSql("DROP TABLE Cuidador;");
  tx.executeSql(
    "CREATE TABLE IF NOT EXISTS Cuidador (Cpf TEXT PRIMARY KEY, Nome TEXT, Email TEXT, Senha TEXT, Telefone_Id INT, Endereco_Id INT);"
  );
});

const create = (obj) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "INSERT INTO Cuidador (Cpf, Nome, Email, Senha, Telefone_Id, Endereco_Id) values (?, ?, ?, ?, ?, ?);",
        [obj.Cpf, obj.Nome, obj.Email, obj.Senha, obj.TelefoneId, obj.EnderecoId],
        //-----------------------
        (_, { rowsAffected, insertId }) => {
          if (rowsAffected > 0) {
            resolve(insertId);
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
        "UPDATE Cuidador SET Nome=?, Email=?, Senha = ? WHERE Cpf=?;",
        [obj.Nome, obj.Email, obj.Senha, obj.Cpf],
        //-----------------------
        (_, { rowsAffected }) => {
          if (rowsAffected > 0) {
        
          resolve(rowsAffected);}
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
        "DELETE FROM Cuidador WHERE Cpf=?;",
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