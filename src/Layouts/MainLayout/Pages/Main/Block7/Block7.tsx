import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Block7.scss'

import { YMaps, Map, Placemark } from 'react-yandex-maps'

interface Block7Props {}

interface Block7State {
  coordinates: {
    center: number[]
    zoom: number
  },
  mapLoading: boolean
}

class Block7 extends React.Component<Block7Props, Block7State> {
  constructor(props: Block7Props) {
    super(props)
    this.state = {
      coordinates: {
        center: [45.968564, 48.12355],
        zoom: 14,
      },
      mapLoading: true,
    }
  }

  // MyMapComponent = () => (
  //   <GoogleMap defaultZoom={8} defaultCenter={{ lat: 45.968564, lng: 48.12355 }}>
  //     {this.state.isMarkerShown && <Marker position={{ lat: 45.968564, lng: 48.12355 }} />}
  //   </GoogleMap>
  // )

  render() {
    return (
      <Container fluid className="Block7">
        <Row className="Block7__Line m-0">
          <Col md={4} className="Block7__Left">
            <div className="Block7__address">
              <p>Местонахождение</p>
              <h3>Астраханская область, Камызякский район, с. Жан-Аул</h3>
              <p>
                800 метров севернее с. Жан-Аул (300 м после большого автодорожного моста через р. Калиновка, трасса,
                соединяющая Верхнюю Калиновку и Жан-Аул), далее направо к реке по указателю "НАДЕЖДА"
              </p>
              <p>Номер телефона</p>
              <h4>8 (800) 600 71 99</h4>
            </div>
            <div className="Block7__weather"></div>
          </Col>
          <Col md={8} className="Block7__Right p-0">
            <YMaps>
              <Map defaultState={this.state.coordinates} className="Block7__map">
                <Placemark key={0} geometry={this.state.coordinates.center} />
              </Map>
            </YMaps>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Block7
