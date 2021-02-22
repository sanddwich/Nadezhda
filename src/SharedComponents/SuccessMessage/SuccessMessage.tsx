import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { connect } from 'react-redux'
import { RootState } from '../../Redux'
import { ModalState } from '../../Redux/interfaces/interfaces'
import { setModalSuccess } from '../../Redux/actions/modal'
import RequestForm from '../RequestForm/RequestForm'
import './SuccessMessage.scss'

interface SuccessMessageProps {
  setModalSuccess: (isActive: boolean) => void
  modal: ModalState
}

interface SuccessMessageState {}

class SuccessMessage extends React.Component<SuccessMessageProps, SuccessMessageState> {
  bodyBlock = (): void => {
    document.querySelector('body')?.classList.add('modal-open')
  }

  bodyUnBlock = (): void => {
    document.querySelector('body')?.classList.remove('modal-open')
  }

  closeModal = (): void => {
    this.bodyUnBlock()
    this.props.setModalSuccess(false)
  }

  render() {
    this.props.modal.modalRequestForm.isActive ? this.bodyBlock() : this.bodyUnBlock()
    return (
      <Container fluid className="SuccessMessage p-0 d-flex justify-content-center align-items-center">
        <div className="SuccessMessage__window">
          <Row className="SuccessMessage__header m-0">
            <h1><p>Спасибо</p>за заявку!</h1>
          </Row>
          <Row className="SuccessMessage__Cont m-0">
            <div className="SuccessMessage__button" onClick={() => this.closeModal()}>
              Вернуться на главную
            </div>
          </Row>
        </div>
      </Container>
    )
  }
}

const mapDispatchToProps = {
  setModalSuccess,
}

const mapStateToProps = (state: RootState) => {
  const modal = state.modal
  return {
    modal,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SuccessMessage)
