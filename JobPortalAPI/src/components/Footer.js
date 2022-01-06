import 'bootstrap/dist/css/bootstrap.min.css'
import {Container, Row, Col} from 'react-bootstrap'
import style from './Footer.module.css'

const Footer = ()=>{
    return (
        <div className = {style.footer}>
            <Container>
                <Row>
                    <Col>
                    <h4>FOOTER TEXT 1</h4>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita sapiente sint, 
                        nulla</p>
                    </Col>
                    <Col>
                    <h4>FOOTER TEXT 2</h4>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita sapiente sint, 
                        nulla</p>
                    </Col>
                </Row>
                <Row>
                    <Col style = {{paddingTop:'10px'}}>
                    <p style = {{textAlign: 'center'}}>made by Samyak</p>
                    </Col>
                </Row>
            </Container>
        </div>
        
    )
}

export default Footer