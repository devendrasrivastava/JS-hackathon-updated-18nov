import React, {useEffect} from 'react'
import './AboutUs.css'
import { useNavigate } from "react-router-dom";

export default function AboutUs() {
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
        {/*<!-- info box starts -->*/}
    <div class="container my-4 ">
        <div class="row featurette d-flex justify-content-center align-items-center user-about-us-cards">
            <div class="col-md-7 order-md-2">
                <h2 class="featurette-heading fw-normal lh-1">World Leader in Digital Banking. <span class="text-muted">Best in the World!</span></h2>
                <p class="lead">Our fast and secure Internet Banking is rated among the best in the world.</p>
            </div>
            <div class="col-md-5 order-md-1">

                <img src="./assets/laptop500x500.jpg" alt="" class="img-fluid img-thumbnail"/>
            </div>
        </div>
    </div>

    <div class="container">
        <div class="row featurette d-flex justify-content-center align-items-center">
            <div class="col-md-7">
                <h2 class="featurette-heading fw-normal lh-1">Serving you since 1968. <span class="text-muted">Best services with branches all over the world.</span></h2>
                <p class="lead">Our service has been among the best in the world thoughout our lifetime. we have some of the most talented staff with makes us stand out in the crowd.</p>
            </div>
            <div class="col-md-5">
            
                <img src="./assets/nw 500x500.JPG" alt="" class="img-fluid img-thumbnail"/>
            </div>
        </div>
    </div>

    <div class="container">
        <div class="row featurette d-flex justify-content-center align-items-center">
            <div class="col-md-7 order-md-1">
                <h2 class="featurette-heading fw-normal lh-1">Explore our products and services. <span class="text-muted">Check out our sevices section for more.</span></h2>
                <p class="lead">Available to existing NatWest current account, credit card, mortgage or savings customers who are UK residents.</p>
            </div>
            <div class="col-md-5">
                <img src="https://source.unsplash.com/500x500/?desktop" alt="" class="img-fluid img-thumbnail"/>
            </div>
        </div>
    </div>
    {/*<!-- info box ends -->*/}

    {/*<!-- rounded photo starts -->*/}
    <div class="container my-4">
        <div class="row">
            <div class="col-lg-4">

                <img src="./assets/crdit cards.JPG" alt=""
                    class="bd-placeholder-img rounded-circle" width="140" height="140"/>
                <h2 class="fw-normal">Credit Cards</h2>
                <p>No need to visit the branch if you need a credit card. you can browse through below link for a credit card which suits your needs.</p>
                <p><a class="btn btn-secondary" href="services.html">View details »</a></p>
            </div>
            <div class="col-lg-4">
                <img src="./assets/loan.JPG" alt="" class="bd-placeholder-img rounded-circle"
                    width="140" height="140"/>

                <h2 class="fw-normal">Loans</h2>
                <p>Please check out our exciting Interest Rates to fulfill your short term dreams. Loans are available in various categories.</p>
                <p><a class="btn btn-secondary" href="services.html">View details »</a></p>
            </div>
            <div class="col-lg-4">
                <img src="./assets/mortgage.JPG" alt="" class="bd-placeholder-img rounded-circle"
                    width="140" height="140"/>

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
