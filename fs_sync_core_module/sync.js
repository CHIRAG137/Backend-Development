// Importing built in module
const fs=require('fs');

// Writing new text in a file
fs.writeFileSync('read.txt',"My name is Chirag Goel. I am a sophomore at IIIT Ranchi");

// Writing new text just after the already written text 
fs.appendFileSync('read.txt'," I am a MERN stack developer.");

// Reading a file in buffer text
const data1=fs.readFileSync('read.txt');
console.log(data1);

// Reading the file by converting buffer text to string
const data2=fs.readFileSync('read.txt','utf-8');
console.log(data2);

// Alternate method for Reading the file by converting buffer text to string
const data3=fs.readFileSync('read.txt');
console.log(data3.toString());

// Renaming the file name
fs.renameSync('read.txt','after_rename.txt');

// DEleting the file
fs.unlinkSync('<file_name>');

// Folder delete
fs.rmdirSync('<folder_name>');
