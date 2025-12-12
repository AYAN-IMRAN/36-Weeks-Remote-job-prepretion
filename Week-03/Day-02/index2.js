const express = require('express')
const z = require('zod')

const app = express()
app.use(express.json())

const loginSchema = z.object({
    email:z.string().email(),
    password:z.string().min(6)
})

app.get('/' ,(req, res)=> {
    res.send("hello from server")
    console.log("/ route hit succesfully")
})
app.get('/login' ,(req, res)=> {
    const data = loginSchema.safeParse(req.body);
    if(!data.success){
        console.log("data is defined");
        res.status(401).send("Enter infomation please")
    }
    console.log(data);
    res.send("Login Succefully")
})

app.listen(3000,()=> {
console.log("server running on port 3000")
})