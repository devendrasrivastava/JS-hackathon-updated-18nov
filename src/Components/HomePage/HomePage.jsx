import React from 'react'
import './HomePage.css'

export default function HomePage() {
  return (
    <div>

{/*carousel starts here*/}

    <div class="container user-carousel">
        <div id="carouselExampleCaptions" class="carousel slide carousel-fade" data-bs-ride="false">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
                    aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                    aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                    aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="./assets/caro7.jpg" class="d-block w-100" alt="..."/>
                    <div class="carousel-caption d-none d-md-block">
                        <h3>NatWest Bank</h3>
                        <p>Looking for a Current Account?.</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="./assets/caro2.JPG" class="d-block w-100" alt="..."/>
                    <div class="carousel-caption d-none d-md-block">
                        <h3>NatWest Digital</h3>
                        <p>World's fastest and safest digital technology.</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="./assets/caro1.jpg" class="d-block w-100" alt="..."/>
                    <div class="carousel-caption d-none d-md-block">
                        <h3>NatWest Services</h3>
                        <p>Loan, Credit Cards and Mortgages without a visit to the branch.</p>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </div>
    {/*Carousel ends here*/}



{/*Card row starts here*/}
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
                        <img src="./assets/card3.JPG" alt="" class="bd-placeholder-img" width="200" height="250"/>

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
                        <img src="./assets/card4.JPG" alt="" class="bd-placeholder-img" width="200" height="250"/>

                    </div>
                </div>
            </div>
        </div>
    </div>
   {/* <!-- card row ends --> */}


   {/* <!-- rounded photo starts -->*/}

    <div class="container my-4">
        <div class="row user-rounded-photos" >
            <div class="col-lg-4">

                <img src="./assets/crdit cards.JPG" alt="" class="bd-placeholder-img rounded-circle img-fluid" width="140"
                    height="140"/>
                <h2 class="fw-normal">Credit Cards</h2>
                <p>No need to visit the branch if you need a credit card. you can browse through below link for a credit
                    card which suits your needs.</p>
                <p><a class="btn btn-secondary" href="services.html">View details »</a></p>
            </div>
            <div class="col-lg-4">
                <img src="./assets/loan.JPG" alt="" class="bd-placeholder-img rounded-circle img-fluid" width="140" height="140"/>

                <h2 class="fw-normal">Loans</h2>
                <p>Please check out our exciting Interest Rates to fulfill your short term dreams. Loans are available
                    in various categories.</p>
                <p><a class="btn btn-secondary" href="services.html">View details »</a></p>
            </div>
            <div class="col-lg-4">
                <img src="./assets/mortgage.JPG" alt="" class="bd-placeholder-img rounded-circle img-fluid" width="140" height="140"/>

                <h2 class="fw-normal">Mortgages</h2>
                <p>
                    NatWest mortgages are available to over 18s. Your home or property may be repossessed if you do not keep up repayments on your mortgage.</p>
                <p><a class="btn btn-secondary" href="services.html">View details »</a></p>
            </div>
        </div>
    </div>
    {/*<!-- rounded photos end -->*/}



    </div>
  )
}
