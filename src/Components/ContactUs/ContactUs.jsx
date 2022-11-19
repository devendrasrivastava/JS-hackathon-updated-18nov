import React, {useEffect} from 'react'
import './ContactUs.css'
import { useNavigate } from "react-router-dom";


export default function ContactUs() {
    const navigate = useNavigate();  //variable to protect the page

    useEffect(() => {                                         //coding start to protect the page
        fetch("http://localhost:9000/auth/isAuthenticated", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("jwt_token")}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                // if(data.status===401){
                //     navigate("/login")
                // }

                if (!data.isAuthenticated) {
                    navigate("/login")
                }
            })
    }, [])


    return (
        <div>
            {/*card for contact us  */}

<div className="container">
<div class="card mb-3 user-card-contactus">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="./assets/contactus.jpg" class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h2 class="card-title">Contact Us</h2>
        <p class="card-text">We’re here to help – get in touch with us using the contact details below.</p>
        
      </div>
    </div>
  </div>
</div>
</div>

            {/*<!-- accordian starts -->*/}
            <div class="container my-4">
                <div class="accordion user-accordian user-accordian" id="accordionExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingOne">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Call Us on our 24x7 Customer Services
                            </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <h2>1800 2900 5151</h2>
                                <p>For Personal Banking</p><br />
                                <h2>1800 2900 5252</h2>
                                <p>For Business Banking</p><br />
                                <h2>1800 2900 5353</h2>
                                <p>For investment Banking</p>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingTwo">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Email Us
                                </button>
                            </h2>
                            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <h2>services@natwestbank.co.uk</h2>
                                    <p>Just email us and you well get response within 24 hours. Don't worry we never share your contact details with anyone.</p>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingThree">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Write to us
                                </button>
                            </h2>
                            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <strong>Not comfortable calling or emailing us?</strong> You can write to us on any of the branch address. Details and address of the branches you can find on the back side of your cheque books or you can scroll down to find out more.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*<!-- accordian ends -->*/}


                {/*<!-- card row start-->*/}

                <div class="container my-4">
                    <div class="row mb-2">
                        <div class="col-md-6">
                            <div
                                class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                                <div class="col p-4 d-flex flex-column position-static">
                                    <strong class="d-inline-block mb-2 text-primary">Digital Banking</strong>
                                    <h3 class="mb-0">May I help you ?</h3>

                                    <p class="card-text mb-auto">Dont worry if you are new to the digital banking. Our 24x7 Customer
                                        service is here to help.</p>
                                    <a href="services.html" class="stretched-link">Continue reading</a>
                                </div>
                                <div class="col-auto d-none d-lg-block">
                                    <img src="./assets/card3.JPG" alt="" class="bd-placeholder-img" width="200" height="250" />

                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div
                                class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                                <div class="col p-4 d-flex flex-column position-static">
                                    <strong class="d-inline-block mb-2 text-primary">Branch Banking</strong>
                                    <h3 class="mb-0">Visit Us</h3>
                                    <p class="mb-auto">Please book an appointment with us by clicking the below link if you need to
                                        visit any of our branches.</p>
                                    <a href="services.html" class="stretched-link">Continue reading</a>
                                </div>
                                <div class="col-auto d-none d-lg-block">
                                    <img src="./assets/card4.JPG" alt="" class="bd-placeholder-img" width="200" height="250" />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*<!-- card row ends -->*/}
            </div>

        </div>
    )
}
