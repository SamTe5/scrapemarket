import React from 'react'
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';


function LeftItem({ itemName }) {
    return (

        <ListGroup>
            <ListGroup.Item action href="#link1">
                {itemName}
            </ListGroup.Item>

        </ListGroup>

    )
}

export default LeftItem