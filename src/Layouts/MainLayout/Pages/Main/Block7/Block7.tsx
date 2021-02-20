import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Block7.scss'

import { YMaps, Map, Placemark } from 'react-yandex-maps'

import Config from '../../../../../Config/Config'

interface Block7Props {}

interface Block7State {}

class Block7 extends React.Component<Block7Props, Block7State> {
  componentDidMount() {
    // this.getWeather()
  }

  getWeather = async (): Promise<any> => {
    const url: string = `http://api.openweathermap.org/data/2.5/weather?lat=${Config.coordinates.center[0]}&lon=${Config.coordinates.center[1]}&lang=ru&units=metric&appid=${Config.weatherApi}`
    // const url: string = `http://api.openweathermap.org/data/2.5/forecast/daily?lat=${Config.coordinates.center[0]}&lon=${Config.coordinates.center[1]}&lang=ru&units=metric&appid=${Config.weatherApi}`

    // console.log(url)

    try {
      const res = await fetch(url, {
        method: 'GET',
      })

      console.log(await res.json())
    } catch (e) {
      console.log(e)
    }
  }

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
              <Map defaultState={Config.coordinates} className="Block7__map">
                <Placemark key={0} geometry={Config.coordinates.center} />
              </Map>
            </YMaps>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Block7
