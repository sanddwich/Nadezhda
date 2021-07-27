import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ProgramInterface from '../../../../../Interfaces/ProgramInterface'
import DopInfo from './DopInfo/DopInfo'
import './ProgramCard.scss'

interface ProgramCardProps {
  program: ProgramInterface
}

export default function ProgramCard(props: ProgramCardProps) {
  return (
    <Container fluid className="ProgramCard">
      <Container className="ProgramCard__Cont">
        <Row className="ProgramCard__Row m-0">
          <Col md={6} xs={12} className="ProgramCard__Col p-3 p-sm-0">
            <h1>{props.program.name}</h1>
            <h3>Программа:</h3>
            {props.program.programElements.map((prEl, index) => {
              return (
                <div key={index} className="ProgramCard__prEl d-block d-sm-flex">
                  <div className="ProgramCard__prElTime">{prEl.time}</div>
                  <div className="ProgramCard__prElTitles">
                    {prEl.title.map((title, index2) => {
                      return (
                        <div key={index2} className="ProgramCard__prElTitle d-flex">
                          <div className="ProgramCard__prElTitleName">
                            <img src="/img/listStyle.svg" alt="" />
                            {title.name}
                          </div>
                          {title.dopInfo && <DopInfo list={title.dopInfo} />}
                        </div>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </Col>
          <Col md={6} xs={12} className="ProgramCard__Col p-0 d-flex justify-content-center">
            <div className="ProgramCard__right">
              <img className="img-fluid" src={props.program.images[0]} alt="" />
              {props.program.prices.map((price, index) => {
                if (!price.rewerse) {
                  return (
                    <div key={index} className="ProgramCard__priceEl">
                      <span className="green">{price.green}</span>
                      <span className="black">{price.black}</span>
                    </div>
                  )
                } else {
                  return (
                    <div key={index} className="ProgramCard__priceEl">
                      <span className="black">{price.black}</span>
                      <span className="green">{price.green}</span>
                    </div>
                  )
                }
              })}
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}
