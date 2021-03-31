import React from 'react'; 
import { Card, CardImg, CardText, CardBody, 
    CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom'; 

const RenderDish = (dish) => {
    if(dish != null){
        return(
            <div className='col-12 col-md-5 m-1'>
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card> 
            </div>
        ); 
    } 
    else {
        return(
            <div></div>
        ); 
    }
}

const RenderComment = (comment) => {
    if(comment != null){
        const Comment = comment.map((com) => {
            return(
                <ul>
                    <p>{com.comment}</p>
                    <p> -- {com.author}, {com.date} </p>
                </ul>
            ); 
        }); 
        return (
            <div className='col-12 col-md-5 m-1'>
                <h4>Comments</h4>
                {Comment}
            </div>
        ); 
    } else {
        return (
            <div></div>
        ); 
    }
}

function DishDetail(props) {

        return(
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className='col-12'>
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className='row'>
                    {RenderDish(props.dish)}
                    {RenderComment(props.comment)}
                </div>
            </div>
        ); 
}

export default DishDetail; 