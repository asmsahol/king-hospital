/** @format */

import Button from "@restart/ui/esm/Button";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Services.css";

const Services = props => {
  const { name, description, img, id, monthlyFees } = props.service;
  return (
    <div>
      <Card
        className='service shadow-sm p-3 mb-5 bg-body rounded'
        style={{ width: "18rem" }}
      >
        <Card.Img variant='top' src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <p>Monthly Fees: {monthlyFees}</p>
          <Button className='btn btn-info'>
            <Link className='button' to={`/service/${id}`}>
              View Details
            </Link>
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Services;
