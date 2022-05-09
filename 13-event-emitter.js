const EventEmitter=require("events")

const customEmitter=new EventEmitter()
 //on-listen for an event
 //emit-emit an event

 customEmitter.on("response",(name,age)=>{
 console.log((`data received name:${name},age:${age}`));
 })
 customEmitter.on("response",()=>{
 console.log((`some other logic here`));
})

 customEmitter.emit("response","deepak",21)