
const express=require('express')
const axios=require('axios')
const router=express.Router()

const Vaccine=require('../models/vaccine')
const Patient = require('../models/patients')


router.get('/authorize',async(req,res)=>{
    try{
        const url='https://drchrono.com/o/authorize/?redirect_uri=http%3A%2F%2Flocalhost%3A3000&response_type=code&client_id=s0AHBXqo7qtjEUhXQyG3ddBuAyYK68j4hUcVm4ym&scope=patients%3Aread+patients%3Awrite+calendar%3Aread+calendar%3Awrite+clinical%3Aread+clinical%3Awrite+billing%3Awrite+billing%3Aread+labs%3Aread+labs%3Awrite+user%3Aread+user%3Awrite'
        const response=await axios.get(url)

        
        res.redirect(url)
    }catch(err){
        console.log(err)
        res.send(err)
    }
})

router.get('/patients',async(req,res)=>{
    
    try{

        
        const config = {
            headers: {
                'Content-type':"application/json",
                'Authorization':'Bearer lAT8ow253UkXp3L9rpQsSBOmij8gr9'
            }
          };

        const response=await axios.get('https://app.drchrono.com/api/patients_summary',config)
        console.log(response.data)
        
        
        res.send(response.data)
    }catch(err){
        res.send(err)
    }
})

router.get('/allergies',async(req,res)=>{
    
    try{

        
        const config = {
            headers: {
                'Content-type':"application/json",
                'Authorization':'Bearer lAT8ow253UkXp3L9rpQsSBOmij8gr9'
            }
          };

        const response=await axios.get('https://app.drchrono.com/api/allergies',config)
        console.log(response.data)
        
        
        res.send(response.data)
    }catch(err){
        res.send(err)
    }
})

router.get('/vaccineCount',async(req,res)=>{
    
    try{

        
        const count=await Vaccine.find({})
        
        
        res.send(count)
    }catch(err){
        res.send(err)
    }
})




router.put('/vaccineCount',async(req,res)=>{
    try{
        const result=await Vaccine.findOne({})
        result.count=result.count-1;
        result.save()
        res.send('Updated')
        
    }catch(err){
        console.log(err)
        res.send(err)
    }
})

router.post('/checkPatient',async(req,res)=>{
    const id=req.body.id;

    try{
        const result=await Patient.findOne({patient_id:id})
        
        if(result){
            res.status(200).json({msg:'Already Vaccinated'})
        }

        res.status(200).json({msg:'Pending'})
    }catch(err){
        res.json({msg:'Error'})
    }
    
})

router.post('/addpatient',async(req,res)=>{

    try{
        const patient=new Patient(req.body)
        patient.save()

        res.status(200).json({msg:'Done'})
    }catch(err){
        res.json({msg:'Error'})
    }
    
})

module.exports=router;