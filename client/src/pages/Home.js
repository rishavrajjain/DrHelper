import React from 'react';
import './home.css'

const Home = () => {
    return (
        <div>
        <section id="hero" class="d-flex align-items-center">

        <div class="container">
          <div class="row">
            <div class="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1">
              <h1>All India COVID-19 Vaccination Project</h1>
              <h4>Tracking the amount of vaccines and number of patients that have been administered the vaccines.</h4>
              <p>Powered by Dr Chrono</p>
              <a href="#about" class="btn-get-started scrollto">Get Started</a>
            </div>
            
            <div class="col-lg-6 order-1 order-lg-2 hero-img">
              <img src="https://i.ibb.co/k8sHQM2/Untitled-design-15.png" class="img-fluid animated" alt=""/>
            </div>
          </div>
        </div>
    
      </section>
    
      <main id="main">
    
        
        <section id="about" class="about">
          <div class="container">
          
    
            <div class="row justify-content-between">
              <div class="col-lg-5 d-flex align-items-center justify-content-center about-img">
                <img src="https://i.ibb.co/gZQPhHX/Untitled-design-16.png" class="img-fluid" alt="" data-aos="zoom-in"/>
              </div>
              <div class="col-lg-6 pt-5 pt-lg-0">
                <h3 data-aos="fade-up">Use Case and Features</h3>
                <p data-aos="fade-up" data-aos-delay="100">
                  Considering the huge population of India and the problems that arise with it in delivering and administrating the vaccine.Our App provides a centralized data pool center to manage and deliver vaccines.This project is a proof of Concept and a bare-bones basic implementation.
                </p>
                <div class="row">
                  <div class="col-md-6" data-aos="fade-up" data-aos-delay="100">
                    <i class="bx bx-receipt"></i>
                    <h4>Patient Records</h4>
                    <p>Keeping track of people that have been given the vaccine.The data is added to DR chrono's Patient Record system and India's Social security number(Aadhar) is used to maintain a robust record.Data added using Dr Chrono's Admin Panel provided by Dr Chrono</p>
                  </div>
                  <div class="col-md-6" data-aos="fade-up" data-aos-delay="200">
                    <i class="bx bx-cube-alt"></i>
                    <h4>Vaccine </h4>
                    <p>Keeping track of the count of vaccines allocated to a particular a vaccineation center.For a vaccination center a list of patient records allocated to them is shown and as they come in and get the vaccine.They are marked as Vaccinated and the vaccine count is managed automatically</p>
                  </div>
                </div>
              </div>
            </div>
    
          </div>
        </section>
        <section id="services" class="services section-bg">
          <div class="container">
    
            <div class="section-title" data-aos="fade-up">
              <h2>Features</h2>
              <p></p>
            </div>
    
            <div class="row">
              <div class="col-md-6 col-lg-4 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                <div class="icon-box">
                  <div class="icon"><i class="fa fa-address-card"></i></div>
                  <h4 class="title"><a href=""></a>Patient Record Management</h4>
                  <p class="description">Keeping track of people that have been given the vaccine.The data is added to DR chrono's Patient Record system</p>
                </div>
              </div>
    
              <div class="col-md-6 col-lg-4 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="200">
                <div class="icon-box">
                  <div class="icon"><i class="fa fa-thermometer-empty"></i></div>
                  <h4 class="title"><a href="">Allergy Info</a></h4>
                  <p class="description">Get allergy information of patients before administering the Vaccine</p>
                </div>
              </div>
    
              <div class="col-md-6 col-lg-4 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="300">
                <div class="icon-box">
                  <div class="icon"><i class="fa fa-hospital-o"></i></div>
                  <h4 class="title"><a href="">Vaccine Count</a></h4>
                  <p class="description">Managing the amount of vaccines at a particluar center and its updation</p>
                </div>
              </div>
    
              
    
            </div>
    
          </div>
        </section>
      
    
        
        <section id="faq" class="faq section-bg">
          <div class="container">
    
            <div class="section-title" data-aos="fade-up">
              <h2>F.A.Q</h2>
              <p>Frequently Asked Questions</p>
            </div>
    
            <ul class="faq-list">
    
              <li data-aos="fade-up" data-aos-delay="100">
                <a data-toggle="collapse" class="" href="#faq1">Will the vaccine be safe as it is being tested and introduced in a short span of time? <i class="icofont-simple-up"></i></a>
                <div id="faq1" class="collapse show" data-parent=".faq-list">
                  <p>
                    
                  Vaccines will be introduced in the country only after the regulatory bodies clear it based on its safety and efficacy.
                  </p>
                </div>
              </li>
    
              <li data-aos="fade-up" data-aos-delay="200">
                <a data-toggle="collapse" href="#faq2" class="collapsed">Is it mandatory to take the vaccine?<i class="icofont-simple-up"></i></a>
                <div id="faq2" class="collapse" data-parent=".faq-list">
                  <p>
                  Vaccination for COVID-19 is voluntary. However, it is advisable to receive the complete schedule of COVID-19 vaccine for protecting one-self against this disease and also to limit the spread of this disease to the close contacts including family members, friends, relatives and co-workers.
                  </p>
                </div>
              </li>
    
              <li data-aos="fade-up" data-aos-delay="300">
                <a data-toggle="collapse" href="#faq3" class="collapsed">Is it necessary for a COVID recovered person to take the vaccine? <i class="icofont-simple-up"></i></a>
                <div id="faq3" class="collapse" data-parent=".faq-list">
                  <p>
                  Yes, it is advisable to receive complete schedule of COVID vaccine irrespective of past history of infection with COVID-19. This will help in developing a strong immune response against the disease.
                  </p>
                </div>
              </li>
    
              
              
    
            </ul>
    
          </div>
        </section>
        
    
        
        
    
        
        
    
      </main>
        
        
        </div>
    )
}

export default Home;
