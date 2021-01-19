import React,{useState,useContext,useEffect} from 'react';
import './patients.css'

import VaccineContext from '../../context/vaccine/vaccineContext';
import VaccineCount from '../layout/VaccineCount'
import axios from 'axios';

const PatientDetail = (props) => {

    const vaccineContext=useContext(VaccineContext);

    const [vaccinatedbool,setVaccinatedBool]=useState(false);
    const [loading,setLoading]=useState(true)
    const patient=props.location.data;
    useEffect(()=>{
        
        
        axios.post('https://dr-chrono-backend.herokuapp.com/checkpatient',{
            id:patient.id
        }).then((res)=>{
            if(res.data.msg === 'Already Vaccinated'){
                console.log('ser')
                setVaccinatedBool(true)
            }
            setLoading(false)
        }).catch(err=>{
            console.log(err)
        })
    },[])

    

    
    const allergy=props.location.allergy;

    var patientAllergy=null;

    for(var i=0;i<allergy.length;i++){
        if(allergy[i].patient === patient.id){
            patientAllergy=allergy[i];
            break;
        }
    }

    

    const vaccinated=()=>{
        vaccineContext.updateVaccineCount()
        vaccineContext.getVaccineCount()

        axios.post('https://dr-chrono-backend.herokuapp.com/addPatient',{
            patient_id:patient.id,
            status:true
        })
        setVaccinatedBool(true);

        
    }   

    
    return (
        
        <section id="features" class="features">
      <div class="container">
      <VaccineCount/>
      

        <div class="section-title" style={{marginTop:'20px'}}>
          <h2>Patients</h2>
          <p>Information Records</p>
        </div>

        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Confirm Vaccination</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p>Confirm Vaccination for {patient.first_name}{' '}{patient.last_name}</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" onClick={vaccinated} data-dismiss="modal">Confirm</button>
      </div>
    </div>
  </div>
</div>

       

        <div class="row">
          <div class="col-lg-3">
            <ul class="nav nav-tabs flex-column">
              <li class="nav-item">
                <a class="nav-link active show" data-toggle="tab" href="#tab-1">Basic Info</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-toggle="tab" href="#tab-2">Allergy Info</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-toggle="tab" href="#tab-3">Vaccination Details</a>
              </li>
              
              
            </ul>
          </div>
          
            <div class="tab-content">
              <div class="tab-pane active show" id="tab-1">
                <div class="row">
                  <div class="col-lg-8 details order-2 order-lg-1">
                    <h4>{patient.first_name}{'  '}{patient.last_name}</h4>
                    <p><i className="fa fa-venus"></i>{' '}Gender : {patient.gender} </p>
                    <p><i className="fa fa-birthday-cake"></i>{' '}DOB : {patient.date_of_birth}</p>
                  </div>
                  <div class="col-lg-4 text-center order-1 order-lg-2">
                    <img src="https://i.ibb.co/fNgz4bP/features-1.png" alt="" class="img-fluid"/>
                  </div>
                </div>
              </div>
              <div class="tab-pane" id="tab-2">
                <div class="row">
                  <div class="col-lg-8 details order-2 order-lg-1">
                    
                    <h4>Allergy Details : {patientAllergy.reaction}</h4>
                    <p><i className="fa fa-star-o"></i>{' '}{patientAllergy.status.toUpperCase()}</p>
                    <p>{patientAllergy.notes}</p>
                  </div>
                  <div class="col-lg-4 text-center order-1 order-lg-2">
                    <img src="https://i.ibb.co/8gqW4kr/features-2.png" alt="" class="img-fluid"/>
                  </div>
                </div>
              </div>
              <div class="tab-pane" id="tab-3">
                <div class="row">
                  <div class="col-lg-8 details order-2 order-lg-1">
                    <h4>The Pfizer-BioNTech Vaccine</h4>
                    
                    <p>The Pfizer-BioNTech COVID-19 Vaccine includes the following ingredients: mRNA,
                    lipids ((4-hydroxybutyl)azanediyl)bis(hexane-6,1-diyl)bis(2-hexyldecanoate), 2
                    [(polyethylene glycol)-2000]-N,N-ditetradecylacetamide, 1,2-Distearoyl-sn-glycero-3-
                    phosphocholine, and cholesterol), potassium chloride, monobasic potassium
                    phosphate, sodium chloride, dibasic sodium phosphate dihydrate, and sucrose</p>
                    {
                        vaccinatedbool?(
                            <div class="alert alert-success" role="alert">
  {patient.first_name}{' '}{patient.last_name} has been Vaccinated<a href="#" class="alert-link"></a>
</div>
                        ):(
                            <button type="button" class="btn btn-success" data-toggle="modal" data-target="#exampleModal">
   Complete Vaccination
</button>
                        )
                    }
                    
                  </div>
                  <div class="col-lg-4 text-center order-1 order-lg-2">
                    <img src="https://i.ibb.co/fNgz4bP/features-1.png" alt="" class="img-fluid"/>
                  </div>
                </div>
              </div>
              
              
            </div>
          </div>
        </div>
        
      
    </section>
    
    )
}


export default PatientDetail;