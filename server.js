const express = require('express')
const app = express()
const port = 3000
var day = new Date();
var numberOfDate = day.getDay();
let time = day.getHours()  /* + ":" + day.getMinutes() + ":" + day.getSeconds(); */  
const midelware=(request,response,next)=>{
    if(((numberOfDate>=1)&&(numberOfDate<=5))&&((time>=9)&&(time<=18))){
        console.log('passed')
        request.requestTime = Date.now()
        
        next();
    } 
    
    else{
        console.log('we work only from Monday to Friday from 9 to 17')
        }
}

app.use(express.static('public'));

app.get('', (req, res) => {
    res.sendFile(__dirname +'/public/home.html')
})




app.listen(port, () => console.info('listening on port ${port}'))
