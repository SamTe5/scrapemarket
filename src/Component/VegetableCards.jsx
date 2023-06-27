import React from 'react'
import { Row } from 'react-bootstrap'
import Erenler from './Erenler';
import Niktas from './Niktas';
import Migros from './Migros';
import Carrefoursa from './Carrefoursa';
import A101 from './A101'
import Sok from './Sok';

function VegetableCards({ productValue, datam }) {

    return (
        <div className='mt-3'>
            <h2>{productValue.toUpperCase()}</h2>
            <Row className='justify-content-center text-center py-3'>
                {
                    datam[1][productValue].erenler.map(element => {

                        return <Erenler
                            name={element.Name}
                            price={element.Price}
                        />

                    })
                }

                {
                    datam[1][productValue].niktas.map(element => {

                        return <Niktas
                            name={element.Name}
                            price={element.Price}
                        />
                    })
                }

                {
                    datam[1][productValue].a101.map(element => {

                        return <A101
                            name={element.Name}
                            price={element.Price}
                        />
                    })
                }

                {
                    datam[1][productValue].sok.map(element => {

                        return <Sok
                            name={element.Name}
                            price={element.Price}
                        />
                    })
                }

                {
                    datam[1][productValue].migros.map(element => {

                        return <Migros
                            name={element.Name}
                            price={element.Price}
                        />
                    })
                }

                {
                    datam[1][productValue].carreforsa.map(element => {

                        return <Carrefoursa
                            name={element.Name}
                            price={element.Price}
                        />
                    })
                }

            </Row>
        </div>
    )
}

export default VegetableCards