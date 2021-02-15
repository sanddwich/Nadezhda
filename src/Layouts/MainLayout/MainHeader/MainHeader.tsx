import React from 'react'
import { Container, Row } from 'react-bootstrap'
import './MainHeader.scss'

interface MainHeaderProps {}

interface MainHeaderState {}

class MainHeader extends React.Component<MainHeaderProps, MainHeaderState> {
  render() {
    return (
      <Container fluid className="MainHeader d-flex align-items-center">
        <Container className="MainHeader__menuCont">
          <Row className="MainHeader__menu m-0 d-flex justify-content-between align-items-center">
            <div className="MainHeader__menuLogo d-flex justify-content-start align align-items-center">
              <img src="/img/mlogo.png" alt=""/>
              <span className="pl-3 d-none d-md-block">База отдыха “Надежда”</span>
            </div>
            <div className="MainHeader__menuLinks d-flex justify-content-around">
              <div className="MainHeader__menuLinks">О базе</div>
              <div className="MainHeader__menuLinks">Услуги</div>
              <div className="MainHeader__menuLinks">Цены</div>
              <div className="MainHeader__menuLinks">Контакты</div>
            </div>
            <div className="MainHeader__menuTel d-flex justify-content-end"><a href="tel:88006007199">8 800 600 71 99</a></div>
          </Row>
        </Container>
      </Container>
    )
  }
}

export default MainHeader
