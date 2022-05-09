const path=require("path");
console.log(path.sep)

const filepath=path.join(__dirname)
console.log(filepath)

//BASENAME is for get last file or folder
const basename=path.basename(filepath)
console.log(basename);

//RESOLVE is to get full path 
const absolute=path.resolve("content","subfolder","text.txt")
console.log(absolute);