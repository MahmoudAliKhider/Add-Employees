const router = require("express").Router()
const empModels = require("../models/employee")
const objectId = require('mongoose').Types.ObjectId

router.post('/add',async(req,res)=>{
    const newEmployee = new empModels(req.body)

    try {
        const saveData = await newEmployee.save()
        res.status(200).json(saveData)
    } catch (err) {
        res.status(400).json(err)
    }
})

router.get("/",async(req,res)=>{
  const Allemployee = await empModels.find()

  try {
    res.status(200).json(Allemployee)
    
  } catch (err) {
    res.status(400).json(err)
    
  }
})
//Search By Id
router.get('/:id',async(req,res)=>{
    if(objectId.isValid(req.params.id)){
       
            try {
                const getuser = await empModels.findById(req.params.id)
                res.status(200).json(getuser)
                
              } catch (err) {
                res.status(400).json(err)
                
              }
        

     }else{
                res.status(400).send("You can only update your profil")
        
          }
})

module.exports= router