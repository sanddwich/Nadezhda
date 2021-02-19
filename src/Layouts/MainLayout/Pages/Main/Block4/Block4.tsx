import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import HouseCard from '../../../../../SharedComponents/HouseCard/HouseCard'
import './Block4.scss'

interface Block4Props {}

interface Block4State {}

class Block4 extends React.Component<Block4Props, Block4State> {
  render() {
    return (
      <Container className="Block4">
        <Row className="Block4__Line">
          <Col lg={6} xs={12} className="Block4__cardCont">
            <HouseCard
              height="328px"
              img="/img/4_0.jpg"
              list={[
                'собственная ванная комната', 
                'набор полотенец', 
                'холодильник', 
                'TV',
              ]}
              pnumber="2"
              price="1700"
              square="14"
              title="Двухместный “Стандарт”"              
            />
          </Col>
          <Col lg={6} xs={12} className="Block4__cardCont">
            <HouseCard
              height="328px"
              img="/img/4_1.jpg"
              list={[
                'собственная ванная комната', 
                'набор полотенец', 
                'холодильник', 
                'TV',
              ]}
              pnumber="2"
              price="1700"
              square="20"
              title="Двухместный “Комфорт”"              
            />
          </Col>
          <Col lg={6} xs={12} className="Block4__cardCont">
            <HouseCard
              height="328px"
              img="/img/4_2.jpg"
              list={[
                'собственная ванная комната', 
                'набор полотенец', 
                'холодильник', 
                'TV',
              ]}
              pnumber="4"
              price="1500"
              square="22"
              title="Четырехместный “Эконом”"              
            />
          </Col>
          <Col lg={6} xs={12} className="Block4__cardCont">
            <HouseCard
              height="328px"
              img="/img/4_3.jpg"
              list={[
                'собственная ванная комната', 
                'набор полотенец', 
                'холодильник', 
                'TV',
              ]}
              pnumber="3"
              price="1700"
              square="20"
              title="Трехместный “Стандарт”"              
            />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Block4
