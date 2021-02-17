import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Block2.scss'

// Import Swiper React components
import SwiperCore, { Autoplay, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss'
import 'swiper/components/pagination/pagination.scss'
import ImageRectangle from '../../../../../SharedComponents/ImageRectangle/ImageRectangle'

// install Swiper components
SwiperCore.use([Navigation, Autoplay])

interface Block2Props {}

interface Block2State {}

class Block2 extends React.Component<Block2Props, Block2State> {
  constructor(props: Block2Props) {
    super(props)
    this.state = {
      formData: {
        date: new Date(),
      },
    }
  }

  render() {
    return (
      <Container className="Block2">
        <Row className="Block2__row m-0">
          <Col sm={6} className="Block2__Left d-none d-sm-flex align-items-center">
            <div className="Block2__LeftContent">
              <h1>Ознакомьтесь с природой, которая окружает базу</h1>
              <h3>Астрахань радует своими видами</h3>
              <p>
                Одно из наиболее красивых растений здесь — это лотос, цветущий с июля и до сентября. Рыбалка в дельте
                Волги — это настоящий подарок, ведь такой отдых останется в памяти надолго
              </p>
            </div>
          </Col>

          <Col sm={6} xs={12} className="Block2__Right p-0">
            <Swiper
              loop={true}
              navigation={{
                nextEl: '#Block2__NextArrow',
                prevEl: '#Block2__PrewArrow',
              }}
              breakpoints={{
                992: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 1,
                },
              }}
              autoplay={{
                delay: 5000,
              }}
            >
              <SwiperSlide>
                <Container className="p-2 ">
                  <div className="Block2__Slide">
                    <ImageRectangle img="/img/block2_1.jpg" height="427px" />
                  </div>
                </Container>
              </SwiperSlide>
              <SwiperSlide>
                <Container className="p-2">
                  <div className="Block2__Slide">
                    <ImageRectangle img="/img/block2_2.jpg" height="427px" />
                  </div>
                </Container>
              </SwiperSlide>
            </Swiper>
          </Col>
        </Row>

        <Row className="Block2__naviCont m-0 position-relative">
          <div className="Block2__navi">
            <img id="Block2__PrewArrow" src="/img/yleft.svg" alt=""/> <img id="Block2__NextArrow" src="/img/yright.svg" alt=""/>
          </div>
        </Row>
      </Container>
    )
  }
}

export default Block2
