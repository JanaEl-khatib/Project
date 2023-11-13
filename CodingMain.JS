// const {number2text} = require('src/number')

const { number2text } = require("arajs/src/number");

const  number  =  232;

console.log(number2text(number)); // مئتان و إثنان و ثلاثون

const  text  =  'مَرْحَبًا بِكُمْ';

const  strippedText  =  stripTashkeel(text);

console.log(strippedText); // مرحبا بكم