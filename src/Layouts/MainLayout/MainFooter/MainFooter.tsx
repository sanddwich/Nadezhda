import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './MainFooter.scss'

interface MainFooterProps {}

interface MainFooterState {}

class MainFooter extends React.Component<MainFooterProps, MainFooterState> {
  render() {
    return (
      <Container fluid className="MainFooter p-0">
        <Container className="MainFooter__Cont">
          <Row className="MainFooter__Line m-0 d-none d-md-flex justify-content-between">
            <Col className="MainFooter__Left p-0 d-flex align-items-center justify-content-start">
              <img src="/img/logo__black.svg" alt="" />
              <strong>База отдыха “Надежда”</strong>
            </Col>
            <Col className="MainFooter__Center p-0 d-flex align-items-center justify-content-center">Забронировать</Col>
            <Col md={5} className="MainFooter__Right p-0 d-flex align-items-center justify-content-end">
              Сайт разработан - <strong>deedesign</strong>
            </Col>
          </Row>

          <Row className="MainFooter__Line m-0 d-flex d-md-none justify-content-between">
            <Col xs={12} className="MainFooter__Left p-0 d-flex align-items-center justify-content-start">
              <img src="/img/logo__black.svg" alt="" />
              <strong>База отдыха “Надежда”</strong>
            </Col>
            <Col xs={12} className="MainFooter__Center p-0 d-flex align-items-center justify-content-center">
              Забронировать
            </Col>
            <Col xs={12} className="MainFooter__Right p-0 d-flex align-items-center justify-content-start justify-content-lg-end">
              Сайт разработан - <strong>deedesign</strong>
            </Col>
          </Row>
        </Container>
      </Container>
    )
  }
}

export default MainFooter
