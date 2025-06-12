let express=require("express");
let body=require("body-parser");
let app=express();
app.set("view engine","ejs")

app.use(express.static ("public"))
app.use(body.urlencoded({extended:true}))

app.get("/",(req,res)=>{
    res.render("cal.ejs",{calBill:0})
})
app.post("/save",(req,res) => {
    let {qty,rate}=req.body 
    let b=qty*rate;
    res.render("cal.ejs",{calBill:b});
})
app.listen(3000,()=>{
    console.log("server started.....");
})
