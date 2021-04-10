var userdb = require('../model/model');

//create and save todo

exports.create = (req,res)=>{
//validate request
  if(!req.body){
      res.status(400).send({message:"Content can not be empty."});
  }
  //new user

  const task = new userdb({
      todo:req.body.todo,
      time:req.body.time
  })

  //save list
  task.save(task).then(data=>{
      //res.send(data);
      res.redirect('/');
  }).catch(err=>{
      res.status(500).send({message:"erro occured"});
  });       

}

//retrieve all list

exports.find = (req,res)=>{

    userdb.find()
    .then(data=>{
        res.send(data);
    }).catch(err=>{
        res.status(500).send({message:"erro occured while reteiving"});
    })

}


//delete the list

exports.delete = (req,res)=>{

    const id= req.params.id;

    userdb.findByIdAndDelete(id).then(data=>{
        if(!data){
            res.status(404).send({message:`can not delete with id ${id}`});
        }
        else{
            res.send({message:"todo deleted successfully."});
        }
    }).catch(err=>{
        res.status(500).send({message:"could not delete"});
    })

}