'use strict';

const fs = require('fs');

/**
 * @function
 * @name writeFile
 * @param file {path} The path to a file on the filesystem
 * @param data {buffer} The data to write to the file
 **/

const writeFile = (file, text) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, Buffer.from(text), (error, data) => {
      if(error){
        reject(error);
      }else {
        resolve();
      }
    });
  });
};

module.exports = writeFile;
