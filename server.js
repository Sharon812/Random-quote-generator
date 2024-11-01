const express = require('express')
const app = express()
const fs = require('fs')
const hbs = require('hbs')
const env = require('dotenv').config()
app.use(express.static('public'))

app.set('view engine','hbs')

function logmss(message){
    const now = new Date();
    const curdate = now.toISOString().split('T')[0];
    const curtime = now.toTimeString().split(' ')[0];
    const logent = `[${curdate}] [${curtime}] ${message }\n`;

    fs.appendFile('logs.txt',logent, (error) => {
        if(error){
            console.log("error occured",error);
        }
    })
}

app.get('/',(req,res) => {
    logmss("home route accessed")
    res.render('index')
    
});

const port = process.env.PORT || 3009;

app.listen(port, () => {
    console.log(`server is running or port ${port}`)
})
