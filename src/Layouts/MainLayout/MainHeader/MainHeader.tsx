import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { connect } from 'react-redux'
import { scroller } from 'react-scroll'
import { RootState } from '../../../Redux'
import { showRequestModal } from '../../../Redux/actions/modal'
import './MainHeader.scss'

interface MainHeaderProps {
  showRequestModal: () => void
}

interface MainHeaderState {
  modalMenu: boolean
}

class MainHeader extends React.Component<MainHeaderProps, MainHeaderState> {
  constructor(props: MainHeaderProps) {
    super(props)
    this.state = {
      modalMenu: false,
    }
  }

  closeMenu = (): void => {
    const modalMenu = !this.state.modalMenu
    this.setState({ modalMenu })
  }

  scrollTo = (ankorName: string, offset: number): void => {
    scroller.scrollTo(ankorName, {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset,
    })

    this.closeMenu()
  }

  render() {
    return (
      <Container fluid className="MainHeader d-flex align-items-center">
        <Container className="MainHeader__menuCont">
          <Row className="MainHeader__menu m-0 d-flex justify-content-between align-items-center">
            <div className="MainHeader__menuLogo d-flex justify-content-start align align-items-center">
              <img src="/img/mlogo.png" alt="" />
              <span className="pl-3 d-block d-sm-none d-md-block">База отдыха “Надежда”</span>
            </div>
            <div className="MainHeader__menuLinks d-none d-sm-flex justify-content-around">
              <div
                className="MainHeader__menuLinks hvr-underline-from-center"
                onClick={() => this.scrollTo('Block3', 0)}
              >
                О базе
              </div>
              <div
                className="MainHeader__menuLinks hvr-underline-from-center"
                onClick={() => this.scrollTo('Block4', 50)}
              >
                Услуги
              </div>
              <div
                className="MainHeader__menuLinks hvr-underline-from-center"
                onClick={() => this.scrollTo('Block5', 0)}
              >
                Цены
              </div>
              <div
                className="MainHeader__menuLinks hvr-underline-from-center"
                onClick={() => this.scrollTo('Block7', 100)}
              >
                Контакты
              </div>
            </div>
            <div className="MainHeader__menuTel hvr-underline-from-center d-none d-sm-flex justify-content-end">
              <a href="tel:88006007199">8 800 600 71 99</a>
            </div>

            <div
              className="MainHeader__sandwich d-flex d-sm-none"
              onClick={() => this.setState({ modalMenu: !this.state.modalMenu })}
              style={{ cursor: 'pointer' }}
            >
              <img src="/img/burger.svg" alt="" />
            </div>
          </Row>

          {this.state.modalMenu ? (
            <Row className="MainHeader__mobileMenuCont animated animate__fadeInDownBig d-block d-sm-none position-relative m-0">
              <div className="MainHeader__mobileMenu w-100 position-absolute">
                <Row className="m-0 pt-4 d-flex justify-content-between">
                  <div
                    className="MainHeader__menuLinks hvr-underline-from-center"
                    onClick={() => this.scrollTo('Block3', 0)}
                  >
                    О базе
                  </div>
                  <div
                    className="MainHeader__menuLinks hvr-underline-from-center"
                    onClick={() => this.scrollTo('Block4', 50)}
                  >
                    Услуги
                  </div>
                  <div
                    className="MainHeader__menuLinks hvr-underline-from-center"
                    onClick={() => this.scrollTo('Block5', 0)}
                  >
                    Цены
                  </div>
                  <div
                    className="MainHeader__menuLinks hvr-underline-from-center"
                    onClick={() => this.scrollTo('Block7', 100)}
                  >
                    Контакты
                  </div>
                </Row>

                <Row className="MainHeader__menuTel pt-4 m-0 d-flex justify-content-end">
                  <a href="tel:88006007199">8 800 600 71 99</a>
                </Row>
                <Row className="MainHeader__buttonCont m-0 d-flex justify-content-end">
                  <div className="MainHeader__button" onClick={() => this.props.showRequestModal()}>
                    Забронировать
                  </div>
                </Row>
              </div>
            </Row>
          ) : null}
        </Container>
      </Container>
    )
  }
}

const mapDispatchToProps = {
  showRequestModal,
}

const mapStateToProps = (state: RootState) => {
  const modal = state.modal
  return {
    modal,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainHeader)
