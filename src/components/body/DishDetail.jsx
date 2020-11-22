import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";
import LoadComment from "./LoadComment.jsx";
const DishDetail = (props) => {
  return (
    <div>
      <Card style={{ margin: "25px" }}>
        <CardImg src={props.dish.image} alt={props.dish.name} />
        <CardBody style={{ textAlign: "left" }}>
          <CardTitle>{props.dish.name}</CardTitle>
          <CardText style={{ fontWeight: "bold" }}>
            price : {props.dish.price} /-
          </CardText>
          <CardText style={{borderBottom:"2px solid"}}>
          {props.dish.description}
          </CardText>
          <h2>Comments : </h2>
          <LoadComment comments={props.comments} />

          
          
        </CardBody>
      </Card>
    </div>
  );
};

export default DishDetail;
