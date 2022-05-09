// const _=require("lodash")
// const items=[1,[2,[3,[4]]]]
// const newitem=_.flattenDeep(items)
// console.log(newitem);
// console.log("wefwf");
// started operating system process
var http = require("http");
var fs = require("fs");

http
  .createServer((req, res) => {
    // const text=fs.readFileSync("./content/big.txt","utf8")
    // res.end(text)
    const filestream = fs.createReadStream("./content/big.txt", "utf8");
    filestream.on("open", () => {
      filestream.pipe(res)
    });
    filestream.on("error",()=>{
      res.end(err)
    })
  })
  .listen(5000);
