import React from 'react'
import { Container } from 'react-bootstrap'
import './TmpPage.scss'

interface TmpPageProps {}

interface TmpPageState {}

class TmpPage extends React.Component<TmpPageProps, TmpPageState> {
  render() {
    return (
      <Container fluid className="TmpPage  d-flex align-items-center justify-content-center">
        <div className="TmpPage__content">
          <div className="TmpPage__logo d-flex align-items-center justify-content-center">
            <img className="img-fluid" src="/img/logo.png" alt="" />
          </div>
          <h1>
            База отдыха <strong>“Надежда”</strong>
          </h1>
          <p>Сейчас сайт находится находится на стадии разработки, но вы можете связаться с нами по номеру телефона</p>
          <div className="TmpPage__phone">
            <img src="/img/phone.svg" alt="" />8 800 600 71 99
          </div>
          <div className="TmpPage__address">
            <img src="/img/check.svg" alt="" />
            Астраханская область, Камызякский район, <p>с.Жан-Аул</p>
          </div>
        </div>
      </Container>
    )
  }
}

export default TmpPage
