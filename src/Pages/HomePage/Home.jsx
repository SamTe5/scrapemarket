import './Home.css'
import Container from 'react-bootstrap/Container';
import { Row,Col } from 'react-bootstrap';
import HomeSlider from '../../Component/HomeSlider';



function Home({data}) {

  
  return (
    <Container fluid className='p-0'>
      <div  className='bgHome'>
        <Container>
          <Row className='justify-content-end'>
            <Col lg={10}>
              <h2 className='htext'>TOKAT'IN İLK VE TEK ÜRÜN KARŞILAŞTIRMA SİTESİ</h2>
            </Col>
          </Row>
          <Row className='justify-content-end'>
            <HomeSlider
            datam={data}
            />
          </Row>
        </Container>
      </div>
    </Container>
    
  )
}

export default Home