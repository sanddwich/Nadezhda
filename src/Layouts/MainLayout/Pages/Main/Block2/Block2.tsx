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
import Config from '../../../../../Config/Config'
import { RootState } from '../../../../../Redux'
import { connect } from 'react-redux'
import { ModalState } from '../../../../../Redux/interfaces/interfaces'
import { setGalleryModal } from '../../../../../Redux/actions/modal'

// install Swiper components
SwiperCore.use([Navigation, Autoplay])

interface Block2Props {
  setGalleryModal: (isActive: boolean, activeImg: string) => void
  modal: ModalState
}

interface Block2State {
  images: string[]
}

class Block2 extends React.Component<Block2Props, Block2State> {
  constructor(props: Block2Props) {
    super(props)
    this.state = {
      images: Config.images,
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
              {this.state.images.map((img, index) => {
                return (
                  <SwiperSlide key={index}>
                    <Container className="p-2 ">
                      <div className="Block2__Slide" onClick={() => this.props.setGalleryModal(true, `${img}`)}>
                        <ImageRectangle img={`/img/gallery/${img}`} height="427px" />
                      </div>
                    </Container>
                  </SwiperSlide>
                )
              })}
            </Swiper>
          </Col>
        </Row>

        <Row className="Block2__naviCont m-0 position-relative">
          <div className="Block2__navi">
            <img id="Block2__PrewArrow" src="/img/yleft.svg" alt="" />{' '}
            <img id="Block2__NextArrow" src="/img/yright.svg" alt="" />
          </div>
        </Row>
      </Container>
    )
  }
}

const mapDispatchToProps = {
  setGalleryModal,
}

const mapStateToProps = (state: RootState) => {
  const modal = state.modal
  return {
    modal,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Block2)
