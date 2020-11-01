import { Card, CardImg, CardImgOverlay, CardBody, CardTitle } from "reactstrap";

const MenuItem = (props) => {
  //console.log(props);
  return (
    <div>
      <Card style={{ margin: "25px" }}>
        <CardBody>
          <CardImg
            src={props.dish.image}
            alt={props.dish.name}
            width="100%"
            style={{ opacity: "0.7" }}
          />
          <CardImgOverlay>
            <CardTitle>
              <h3>{props.dish.name}</h3>
            </CardTitle>
          </CardImgOverlay>
        </CardBody>
      </Card>
    </div>
  );
};

export default MenuItem;
