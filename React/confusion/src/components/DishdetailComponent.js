import React from 'react'; 
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

const renderDish = (dish) => {
    if(dish != null){
        return(
            <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card> 
        ); 
    } 
    else {
        return(
            <div></div>
        ); 
    }
}

function DishDetail(props) {

        return(
            <div className="col-12 col-md-5 m-1">
                
                    {renderDish(props.dish)}
    
            </div>
        ); 
}

export default DishDetail; 