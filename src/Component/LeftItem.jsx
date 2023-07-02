import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';



function LeftItem({ itemName }) {
    return (

        <ListGroup>
            <ListGroup.Item action href="#link1">
                {itemName.toUpperCase()}
            </ListGroup.Item>

        </ListGroup>

    )
}

export default LeftItem