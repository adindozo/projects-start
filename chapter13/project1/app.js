let exp = require("express");
let app=exp();
let data=require("./paintings.json");

app.get("/", (req,res)=>{
    res.json(data);
})

app.get("/:id", (req,res)=>{
    
    res.json(data.find(el=>el.id===req.params.id));
})

app.get("/gallery/:artist", (req,res)=>{
    res.json(data.filter(el=>el.artist===req.params.artist))
})

app.get("year/:min/:max",(req,res)=>{
    res.json(data.filter(el=>req.params.min<el.year<req.params.max))
})
app.listen(8080,()=>{
    console.log("8080 port")
});