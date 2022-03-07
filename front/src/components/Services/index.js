import React from "react";


function Services() {
    return (
        <section class="features-icons bg-light text-center det-ails">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4">
                            <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                                <div class="features-icons-icon d-flex  icon-bra-ails">
                                    <i class="icon-screen-desktop m-auto text-primary icon-ails"></i>
                                </div>
                                <h5>Accessibilité</h5>
                                <p class="lead mb-0">Pastel vous permet de suivre vos rendez-vous partout, même sans connexion (feature en cours de développement)</p>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                                <div class="features-icons-icon d-flex  icon-bra-ails">
                                    <i class="icon-layers m-auto text-primary icon-ails"></i>
                                </div>
                                <h5>Fiabilité</h5>
                                <p class="lead mb-0">Pastel est agrée par la Société Française de Psychologie</p>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="features-icons-item mx-auto mb-0 mb-lg-3">
                                <div class="features-icons-icon d-flex  icon-bra-ails">
                                    <i class="icon-check m-auto text-primary icon-ails"></i>
                                </div>
                                <h5>Confidentialité</h5>
                                <p class="lead mb-0">Pastel vous garanti une totale confidentialité et une sécurité pour vos données et celles de vos patients</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    );
}

export default Services;