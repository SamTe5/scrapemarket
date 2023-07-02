import React from 'react'
import { ListGroupItem } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';



function LeftItem({ itemName,onItemClick}) {
   

    const itemFilter=() =>{
        
        onItemClick(itemName)
    }
    return (


        <ListGroup>
            <ListGroupItem action onClick={itemFilter}>
                {itemName.toUpperCase()}
            </ListGroupItem>

        </ListGroup>



    )
}

export default LeftItem