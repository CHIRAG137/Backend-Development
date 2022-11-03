import validator from "validator";
const res1 = validator.isEmail("chiraggoel138@gmail.com");
console.log(res1);
const res2 = validator.isEmail("chiraggoel138gmail.com");
console.log(res2);
const res3 = validator.isEmail("chiraggoel138@gmailc.om");
console.log(res3);
const res4 = validator.isEmail("chiraggoel138@gmailcom");
console.log(res4);