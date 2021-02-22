import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { connect } from 'react-redux'
import Config from '../../../Config/Config'
import { RootState } from '../../../Redux'
import { showRequestModal } from '../../../Redux/actions/modal'
import './MainFooter.scss'

interface MainFooterProps {
  showRequestModal: () => void
}

interface MainFooterState {}

class MainFooter extends React.Component<MainFooterProps, MainFooterState> {
  render() {
    return (
      <Container fluid className="MainFooter p-0">
        <Container className="MainFooter__Cont">
          <Row className="MainFooter__Line m-0 d-none d-md-flex justify-content-between">
            <Col className="MainFooter__Left p-0 d-flex align-items-center justify-content-start">
              <img src="/img/logo__black.svg" alt="" />
              <strong>База отдыха “Надежда”</strong>
            </Col>
            <Col
              className="MainFooter__Center p-0 d-flex align-items-center justify-content-center"
              onClick={() => this.props.showRequestModal()}
            >
              Забронировать
            </Col>
            <Col md={5} className="MainFooter__Right p-0 d-flex align-items-center justify-content-end">
              Сайт разработан -{' '}
              <a href={`${Config.deeSite}`} target="_blank">
                deedesign
              </a>
            </Col>
          </Row>

          <Row className="MainFooter__Line m-0 d-flex d-md-none justify-content-between">
            <Col xs={12} className="MainFooter__Left p-0 d-flex align-items-center justify-content-start">
              <img src="/img/logo__black.svg" alt="" />
              <strong>База отдыха “Надежда”</strong>
            </Col>
            <Col
              xs={12}
              className="MainFooter__Center p-0 d-flex align-items-center justify-content-center"
              onClick={() => this.props.showRequestModal()}
            >
              Забронировать
            </Col>
            <Col
              xs={12}
              className="MainFooter__Right p-0 d-flex align-items-center justify-content-start justify-content-lg-end"
            >
              Сайт разработан -
              <a href={`${Config.deeSite}`} target="_blank">
                deedesign
              </a>
            </Col>
          </Row>
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

export default connect(mapStateToProps, mapDispatchToProps)(MainFooter)
