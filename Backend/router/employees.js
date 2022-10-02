const router = require("express").Router()
const empModels = require("../models/employee")

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
  const Allemployee = new empModels.find()

  try {
    res.status(200).json(Allemployee)
    
  } catch (err) {
    res.status(400).json(err)
    
  }
})


module.exports= router