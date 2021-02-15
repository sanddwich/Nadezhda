import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Block1.scss'

// Import Swiper React components
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss'
import 'swiper/components/pagination/pagination.scss'

// install Swiper components
SwiperCore.use([Navigation, Pagination, Autoplay])

interface Slide {
  title: string
  description: string
  img: string
  slideNum: string
}

interface Block1Props {}

interface Block1State {
  slides: Slide[]
}

class Block1 extends React.Component<Block1Props, Block1State> {
  constructor(props: Block1Props) {
    super(props)
    this.state = {
      slides: [
        {
          title: 'Отдых для всей семьи',
          description: 'С прекрасными видами на устья Волги',
          img: '/img/slide1-0.jpg',
          slideNum: '01',
        },
        {
          title: 'Охота на утку',
          description: 'Приятное времяпровождение',
          img: '/img/slide1-1.jpg',
          slideNum: '02',
        },
        {
          title: 'Зимняя рыбалка',
          description: 'Приятное времяпровождение',
          img: '/img/slide1-2.jpg',
          slideNum: '03',
        },
      ],
    }
  }

  render() {
    return (
      <Container fluid className="Block1 p-0">
        <Container fluid className="Block1__Slider p-0">
          <div className="Block1__swiper">
            <Swiper
              loop={true}
              navigation={{
                nextEl: '#Block1__NextArrow',
                prevEl: '#Block1__PrewArrow',
              }}
              slidesPerView={1}
              autoplay={{
                delay: 5000,
              }}
              pagination={{
                el: '.swiper-pagination',
                clickable: true,
                renderBullet: function (index, className) {
                  return '<div class="' + className + '">0' + (index + 1).toString() + '</div>'
                },
              }}
            >
              {this.state.slides.map((slide, index) => {
                return (
                  <SwiperSlide key={index}>
                    <Container
                      fluid
                      className="Block1__Slide"
                      style={{
                        backgroundImage: `url("${slide.img}")`,
                        backgroundSize: 'cover',
                      }}
                    ></Container>
                  </SwiperSlide>
                )
              })}
            </Swiper>
          </div>

          <Row className="Block1__pagination m-0 d-none d-md-flex justify-content-center align-items-center">
            <Col>
              <div className="Block1__paginationLine mb-5"></div>
              <div className="swiper-pagination"></div>
              <div className="Block1__paginationLine mt-5"></div>
            </Col>
          </Row>
        </Container>
      </Container>
    )
  }
}

export default Block1
