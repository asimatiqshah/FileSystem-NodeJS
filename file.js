const fs = require("fs");
// console.log(fs);

//WriteFile
//==================
// fs.writeFileSync("./test.txt","Hey Buddy whatsupp");
// fs.writeFile("./message.txt","This is Asyn Method",(err) => {
//     if (err) throw err;
//     console.log('The file has been saved!');
//   })


//Read File
//==========
// let result = fs.readFileSync("./message.txt","utf-8");
// console.log(result);

// fs.readFile("./test.txt","utf-8",(err,result)=>{
//     if(err) throw err;
//     console.log(result); 
// })


//Append File
//===========
// fs.appendFileSync("./message.txt","Data to append");
// fs.appendFileSync("./message.txt",new Date().getDate().toLocaleString());
// fs.appendFileSync("./message.txt",`${Date.now()} Hey There \n`);


//Copy File
//==============
// fs.cpSync("./test.txt","./copy.txt");
// fs.cpSync("./test.txt","./message.txt")


//Delete File
//=============
// fs.unlinkSync("./message.txt");


//For Status
//================
// let result = fs.statSync("./test.txt");
// let result = fs.statSync("./test.txt").isFile();    *isFile() give result in boolean(true/false)
// console.log(result);


//For Mading Folder
//====================
fs.mkdirSync("GoogleBaba/UK/Region");

