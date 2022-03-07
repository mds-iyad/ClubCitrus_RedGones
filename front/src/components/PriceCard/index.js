import React, { useState } from "react";
import { Card, Content, Icon, PlanCost, PlanTitle, FeatureListItem, ActionButton, FeaturesContainer, Commentaire} from './PriceCard.CSS'
import "../../assets/css/icofont.min.css";
import { NavLink } from "react-router-dom";

export default function PriceCard({title, prix, feature1, feature2, feature3, button, commentaire, linkto}, feature){

    const [ features ] = useState([
        "Feature 1",
        "Feature 2",
        "Feature 3"
    ])

    return(
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "550px"
    
          }}>
            <Card>
                <Content>
                    <Icon className="icofont-paper-plane" />
                    <PlanTitle>{title}</PlanTitle>
                    <PlanCost>{prix}</PlanCost>
                    <Commentaire>{commentaire}</Commentaire>
                    <FeaturesContainer>
                    {
                        // Object.keys(feature).map(item => (
                        //     <FeatureListItem key={item}>
                        //         <span>{item}</span>
                        //     </FeatureListItem>
                        // ))
                    }
                        <FeatureListItem>
                            <i style={{marginRight:"5px"}} class="icofont-check-alt"></i>
                            <span>{feature1}</span>
                        </FeatureListItem>

                        <FeatureListItem>
                            <i style={{marginRight:"5px"}} class="icofont-check-alt"></i>
                            <span>{feature2}</span>
                        </FeatureListItem>
                        
                        <FeatureListItem>
                            <i style={{marginRight:"5px"}} class="icofont-check-alt"></i>
                            <span>{feature3}</span>
                        </FeatureListItem>
                    </FeaturesContainer>

                    <ActionButton>
                        <NavLink to={linkto}>{button}</NavLink>
                    </ActionButton>
                </Content>
            </Card>
        </div>
    )
}