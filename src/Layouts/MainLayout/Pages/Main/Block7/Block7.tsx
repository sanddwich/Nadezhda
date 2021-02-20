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

            <div className="Block7__weather">
              <link
                rel="stylesheet"
                type="text/css"
                href="https://nst1.gismeteo.ru/assets/flat-ui/legacy/css/informer.min.css"
              />
              <div id="gsInformerID-6dG32Nv46Lq3t7" className="gsInformer" style={{ width: '300px', height: '227px' }}>
                <div className="gsIContent">
                  <div id="cityLink">
                    <a
                      href="https://www.gismeteo.ru/weather-astrakhan-5130/"
                      target="_blank"
                      title="Погода в Астрахани"
                    >
                      <img
                        src="https://nst1.gismeteo.ru/assets/flat-ui/img/gisloader.svg"
                        width="24"
                        height="24"
                        alt="Погода в Астрахани"
                      />
                    </a>
                  </div>
                  <div className="gsLinks">
                    <table>
                      <tbody>
                        <tr>
                          <td>
                            <div className="leftCol">
                              <a href="https://www.gismeteo.ru/" target="_blank" title="Погода">
                                <img
                                  alt="Погода"
                                  src="https://nst1.gismeteo.ru/assets/flat-ui/img/logo-mini2.png"
                                  style={{ alignItems: 'center', border: 'none', width: '11px', height: '16px' }}
                                />
                                <img
                                  src="https://nst1.gismeteo.ru/assets/flat-ui/img/informer/gismeteo.svg"
                                  style={{ alignItems: 'center', border: 'none', left: '5px', top: '1px' }}
                                />
                              </a>
                            </div>
                            <div className="rightCol">
                              <a
                                href="https://www.gismeteo.ru/weather-astrakhan-5130/2-weeks/"
                                target="_blank"
                                title="Погода в Астрахани на 2 недели"
                              >
                                <img
                                  src="https://nst1.gismeteo.ru/assets/flat-ui/img/informer/forecast-2weeks.ru.svg"
                                  style={{ alignItems: 'center', border: 'none', top: 'auto' }}
                                  alt="Погода в Астрахани на 2 недели"
                                />
                              </a>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <script async src="https://www.gismeteo.ru/api/informer/getinformer/?hash=6dG32Nv46Lq3t7"></script>
            </div>
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
