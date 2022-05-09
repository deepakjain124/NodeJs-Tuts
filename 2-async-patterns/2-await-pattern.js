const {readFile,writeFile} =require("fs")
// const util = require('util')
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

// const getText=(path)=>{
//     return new Promise((resolve,reject)=>{
//       readFile(path,"utf8",(err,data)=>{
//         if(err){
//           reject(err)
//         }else{
//           resolve(data)
//         }
//       })
//     }
//     )
  
//   }
//   getText("./content/first.txt").then(res=>console.log(res)).catch(err=>console.log(err))
const start=async()=>{
    try{
        const first=await readFile("../content/first.txt","utf8")
        const second=await readFile("../content/second.txt","utf8")
      await writeFile("../content/result-mind-grenade.txt",
        `this is awesome :${first} ${second}`,
        {flag:'a'})
        console.log(first,second);

    }catch(err){
        console.log(err);
    }
}
start()