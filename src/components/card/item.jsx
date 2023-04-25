import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import logo from '../../logo.svg';

const Item = (props) => {
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={props.img} />
    <Card.Body>
      <Card.Title>{props.title}</Card.Title>
      <Card.Text>
        {props.description}
      </Card.Text>
      <div class="price"> {props.price} рублей</div>
      <Button variant="primary">Купить</Button>
    </Card.Body>
  </Card>
  )
}

export default Item