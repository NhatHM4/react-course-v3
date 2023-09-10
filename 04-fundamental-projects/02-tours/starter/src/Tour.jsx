import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Tour = (props)=>{
  const {id, name , info, image, price} = props.tour
  const [readMore ,setReadMore] = useState(true);
    return (
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              { readMore ? `${info.substring(0,100)}...`  : info}
              <button className='info-btn' onClick={()=>{setReadMore(!readMore)}}>Read More</button>
            </Card.Text>
            <Card.Text>
              <span style={{ fontWeight: 'bold' }}>{price} $</span>
            </Card.Text>
            <Button variant="primary" onClick={()=>{props.handleRemove(id)}}>Don't care</Button>
          </Card.Body>
        </Card>
      );
}

export default Tour