// Importing built in module
const fs=require('fs');

// Writing new text in a file
fs.writeFile('read.txt',"My name is Chirag Goel. I am a Sophomore at IIIT Ranchi.",(err,data)=>{
 console.log("Task Completed.");
});

// Writing new text just after the already written text 
fs.appendFile('read.txt',"I am a MERN stack developer.",(err,data)=>{
 console.log("Task Completed.");
});

// Reading a file in buffer text
fs.readFile('read.txt',(err,data)=>{
 console.log(data);
 console.log(err);
});

// Reading the file by converting buffer text to string
fs.readFile('read.txt',"utf-8",(err,data)=>{
 console.log(data);
 console.log(err);
});