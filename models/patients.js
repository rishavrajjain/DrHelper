const mongoose=require('mongoose')

const PatientSchema=mongoose.Schema({
    patient_id:{
        type:Number
    },
    status:{
        type:Boolean,
        default:false
    }
})

const Patient=mongoose.model('Patient',PatientSchema)
module.exports=Patient;