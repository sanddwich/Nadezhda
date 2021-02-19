import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ImageRectangle from '../../../../../SharedComponents/ImageRectangle/ImageRectangle'
import './Block3.scss'

interface Block3Props {}

interface Block3State {}

class Block3 extends React.Component<Block3Props, Block3State> {
  render() {
    return (
      <Container className="Block3 p-0">
        <Row className="Block3__line m-0">
          <Col lg={3} sm={6} xs={12} className="Block3__card p-0">
            <ImageRectangle height="293px" img="/img/3_0.jpg">
              <div className="Block3__pretitle">апрель-ноябрь</div>
              <div className="Block3__title">Рыбалка, подводная охота</div>
            </ImageRectangle>
          </Col>
          <Col lg={3} sm={6} xs={12} className="Block3__card p-0">
            <ImageRectangle height="293px" img="/img/3_1.jpg">
              <div className="Block3__pretitle">сентябрь-ноябрь</div>
              <div className="Block3__title">охота</div>
              <div className="Block3__undertitle">Водоплавающая дичь</div>
            </ImageRectangle>
          </Col>
          <Col lg={3} sm={6} xs={12} className="Block3__card p-0">
            <ImageRectangle height="293px" img="/img/3_2.jpg">
              <div className="Block3__pretitle">декабрь-март</div>
              <div className="Block3__title">Зимняя рыбалка</div>
            </ImageRectangle>
          </Col>
          <Col lg={3} sm={6} xs={12} className="Block3__card p-0">
            <ImageRectangle height="293px" img="/img/3_3.jpg">
              <div className="Block3__pretitle">Круглогодично</div>
              <div className="Block3__title">Отдых</div>
              <div className="Block3__undertitle">Корпоративные выезды</div>
            </ImageRectangle>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Block3
