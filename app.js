'use strict';

const Q = require('@nmq/q/client');

const fs = require('fs');

function readFile(file) {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (error, data) => {
      if(error){
        reject(error);
      } else {
        resolve(data);
      }
    });
  });  
}


function writeFile(file, text) {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, Buffer.from(text), (error, data) => {
      if(error){
        reject(error);
      }else {
        resolve();
      }
    });
  });
}

function convertCase(data){
  return data.toString().toUpperCase();
}

const alterFile = (file) => {
  readFile(file)
    .then(data => {
      writeFile(file, convertCase(data));
      Q.publish('file-save', file);
    })
    .catch(error => Q.publish('file-error'), 500);
};

let file = process.argv.slice(2).shift();
alterFile(file);
