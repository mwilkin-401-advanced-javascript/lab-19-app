'use strict';

const fs = require('fs');

/**
 * @function
 * @name readFile
 * @param file {path} The path to a file on the filesystem
 **/

const readFile = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (error, data) => {
      if(error){
        reject(error);
      } else {
        resolve(data);
      }
    });
  });  
};

module.exports = readFile;
