/**
 * @fileoverview App global data flag setter
 * @package
 */

const LIVE = false;

/**
 * Global application data
 */
const INITIAL_APP_DATA = {

}

/**
 * Set data in key for object globally
 * @param {string} prop is key in INITIAL_APP_DATA variable
 * @param {any} value is value of key
 */
const SET_APP_DATA = (prop, value) => { INITIAL_APP_DATA[prop] = value; };

/**
 * Get data in key for object globally
 * @param {string} prop is key in INITIAL_APP_DATA variable
 */
const GET_APP_DATA = (prop) => INITIAL_APP_DATA[prop];

export {
  LIVE,
  SET_APP_DATA,
  GET_APP_DATA
}