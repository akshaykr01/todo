//making request using axios

const axios = require('axios');


exports.home = (req,res)=>
{
        //make a get request
        axios.get('http://localhost:3000/api/list')
        .then(function(response){
                console.log(response.data);
                res.render('index',{list:response.data});
        })
        .catch(err=>{
                res.send(err);
        })

        
}