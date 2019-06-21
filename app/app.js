'use strict';
require('dotenv').config();

const Q = require('@nmq/q/client');
// const fs = require('fs');
const convertCase = require('../lib/convertCase.js');
const readFile = require('../lib/read.js');
const writeFile = require('../lib/write.js');

// function readFile(file) {
//   return new Promise((resolve, reject) => {
//     fs.readFile(file, (error, data) => {
//       if(error){
//         reject(error);
//       } else {
//         resolve(data);
//       }
//     });
//   });  
// }


// function writeFile(file, text) {
//   return new Promise((resolve, reject) => {
//     fs.writeFile(file, Buffer.from(text), (error, data) => {
//       if(error){
//         reject(error);
//       }else {
//         resolve();
//       }
//     });
//   });
// }

// function convertCase(data){
//   return data.toString().toUpperCase();
// }


/**
 * It sends an object to the Socket.io server
 * on completion or error.
 * @function
 * @name alterFile
 * @param file {path} The path to a file on the filesystem
 */

const alterFile = (file) => {
  readFile(file)
    .then(data => {
      writeFile(file, convertCase(data));
      Q.publish('files','file-save', file);
    })
    .catch(error => Q.publish('files','file-error'), 500);
};

module.exports = alterFile;

// let file = process.argv.slice(2).shift();
// alterFile(file);
