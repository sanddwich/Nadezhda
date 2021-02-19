import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './HouseCard.scss'

interface HouseCardProps {
  title: string
  list: string[]
  img: string
  square: string
  pnumber: string
  price: string
  height: string
}

interface HouseCardState {}

class HouseCard extends React.Component<HouseCardProps, HouseCardState> {
  render() {
    return (
      <Container fluid className="HouseCard p-0">
        <Row className="HouseCard__Line" style={{ height: this.props.height }}>
          <Col
            sm={6}
            xs={12}
            className="HouseCard__Left p-0 d-flex align-items-end"
            style={{ backgroundImage: `url("${this.props.img}")`, backgroundSize: 'cover' }}
          >
            <Container fluid className="p-0 d-flex d-sm-none justify-content-between">
              <div className="HouseCard__info d-flex align-items-center justify-content-center">
                <div className="HouseCard__infoCont">
                  <img className="img-fluid" src="/img/home.svg" alt="" />
                  {this.props.square} м
                  <sup>
                    <small>2</small>
                  </sup>
                </div>
              </div>
              <div className="HouseCard__info d-flex align-items-center justify-content-center">
                <div className="HouseCard__infoCont">
                  <img className="img-fluid" src="/img/people.svg" alt="" />
                  {this.props.pnumber}
                </div>
              </div>
            </Container>

          </Col>
          <Col sm={6} xs={12} className="HouseCard__Right">
            <div className="HouseCard__RightContent">
              <h1>{this.props.title}</h1>
              <ul className="d-none d-sm-block">
                {this.props.list.map((el, index) => {
                  return (
                    <li style={{ listStyleImage: "url('/img/list__marker.svg')" }} key={index}>
                      {el}
                    </li>
                  )
                })}
              </ul>
            </div>
            <div className="HouseCard__RightFotter d-flex align-items-center"></div>
          </Col>
        </Row>
        <Row className="HouseCard__bottomData">
          <Col sm={6} xs={12} className="HouseCard__bottomDataLeft p-0 d-none d-sm-flex justify-content-between">
            <div className="HouseCard__info d-flex align-items-center justify-content-center">
              <div className="HouseCard__infoCont">
                <img className="img-fluid" src="/img/home.svg" alt="" />
                {this.props.square} м
                <sup>
                  <small>2</small>
                </sup>
              </div>
            </div>
            <div className="HouseCard__info d-flex align-items-center justify-content-center">
              <div className="HouseCard__infoCont">
                <img className="img-fluid" src="/img/people.svg" alt="" />
                {this.props.pnumber}
              </div>
            </div>
          </Col>
          <Col sm={6} xs={12} className="HouseCard__bottomDataRight d-flex align-items-center">
            {this.props.price} руб с человека
          </Col>
        </Row>
      </Container>
    )
  }
}

export default HouseCard
