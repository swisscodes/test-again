console.log('heyyyyy')

import dataDisplay from "./display.js"
import fetchData from "./fetchingData.js"
let url = 'https://filltext.com/?rows=20&fname={firstName}&lname={lastName}&category=[%221%22,%222%22,%223%22]'
let result = await fetchData(url)
console.log(result)
dataDisplay(result)