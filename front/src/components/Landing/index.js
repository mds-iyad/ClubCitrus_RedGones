import React from "react";

function Landing() {
    return (
        <div>
            <div className="container content">
                <div className="row">
                    <div className="col-sm-3 talk">
                        <h1>Pastel</h1>
                        <h4>L'application pour vos suivis de patients</h4>
                        <br />
                        <h6 className="bold-four">
Pastel vous permet de suivre vos patients plus facilement, d'accéder à vos consultations et aux activités les plus adaptées à vos besoins
                    </h6>
                        <br />
                        <h6><a className="btn btn-dark start start-two" href="#offers">Découvrir nos offres</a></h6>
                    </div>
                    <div className="col-sm-9 showcase-img">
                        {/* <div className="circle"></div> */}
                    </div>
                </div>
            </div>

            
        </div>
    );
}

export default Landing;