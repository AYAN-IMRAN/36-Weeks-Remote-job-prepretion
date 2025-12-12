const express = require('express')
const jwt = require("jsonwebtoken")
const app = express()


app.use(express.json())

const MY_SECRET_KEY = "abcd12323828"

app.post('/signup', (req,res)=>{
const {email ,name ,age ,password} = req.body

let token = jwt.sign({email,name ,age},MY_SECRET_KEY)

if(!token){
    res.json({
        mssg:"Token not found"
    })
}else{
    res.json({
        token
    })
}

console.log(token);

})

app.get('/profile',(req, res)=>{
    let {token} = req.body

    if (!token) {
        res.json({
            mssg:"login first"
        })
    }

    let data = jwt.verify(token,MY_SECRET_KEY)

    res.json({
        data
    })
})









app.listen(3000)