import Card from 'react-bootstrap/Card';
import React, { Component } from "react";

class Newsitems extends Component {
  render() {
    let { title, description, imageUrl, newsurl } = this.props;
  return (
    <Card className="w-[25rem] flex flex-col justify-between h-full">
      <Card.Img variant="top" src={imageUrl}/>
      <Card.Body className="card-body">
  <Card.Title>{title}</Card.Title>
        <Card.Text className="mb-4">
        {description}
        </Card.Text>
        <a href={newsurl} target="_blank" className="text-center bg-[rgb(147,197,253)] py-2 px-4 no-underline text-black  my-2">Go somewhere</a>
      </Card.Body>
    </Card>
   );
}
}

export default Newsitems;