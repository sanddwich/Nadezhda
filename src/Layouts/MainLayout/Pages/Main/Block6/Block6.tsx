import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import RequestForm from '../../../../../SharedComponents/RequestForm/RequestForm'
import './Block6.scss'

interface Block6Props {}

interface Block6State {}

class Block6 extends React.Component<Block6Props, Block6State> {
  render() {
    return (
      <Container fluid className="Block6">
        <Row className="Block6__formCont m-0 d-flex justify-content-center">
          <Col md={8} className="Block6__form">
            <RequestForm formTitle="Забронируйте дом заранее" />
          </Col>
        </Row>
        <Row className="Block6__img m-0" style={{backgroundImage: `url("/img/6_1.jpg")`}}></Row>
      </Container>
    )
  }
}

export default Block6
