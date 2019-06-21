'use strict';

/**
 * @function
 * @name convertCase
 * @param data {buffer} The string or buffer to be transformed to uppercase
 **/

const convertCase = data => Buffer.from(data.toString().toUpperCase());

module.exports = convertCase;
