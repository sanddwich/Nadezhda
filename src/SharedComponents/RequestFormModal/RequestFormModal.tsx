import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { connect } from 'react-redux'
import { RootState } from '../../Redux'
import { ModalState } from '../../Redux/interfaces/interfaces'
import { hideRequestModal } from '../../Redux/actions/modal'
import RequestForm from '../RequestForm/RequestForm'
import './RequestFormModal.scss'

interface RequestFormModalProps {
  hideRequestModal: () => void
  modal: ModalState
}

interface RequestFormModalState {}

class RequestFormModal extends React.Component<RequestFormModalProps, RequestFormModalState> {
  bodyBlock = (): void => {
    document.querySelector('body')?.classList.add('modal-open')
  }

  bodyUnBlock = (): void => {
    document.querySelector('body')?.classList.remove('modal-open')
  }

  closeModal = (): void => {
    this.bodyUnBlock()
    this.props.hideRequestModal()
  }

  render() {
    this.props.modal.modalRequestForm.isActive ? this.bodyBlock() : this.bodyUnBlock()
    return (
      <Container fluid className="RequestFormModal p-0 d-flex justify-content-center align-items-center">
        <div className="RequestFormModal__window">
          <Row className="RequestFormModal__header justify-content-end m-0">
            <div className="RequestFormModal__closeBtnCont">
              <div className="RequestFormModal__closeBtn" onClick={() => this.closeModal()}>
                <img src="/img/close.svg" alt="" />
              </div>
            </div>
          </Row>
          <Row className="RequestFormModal__Cont m-0">
            <h1>Оставьте заявку</h1>
            <RequestForm />
          </Row>
        </div>
      </Container>
    )
  }
}

const mapDispatchToProps = {
  hideRequestModal,
}

const mapStateToProps = (state: RootState) => {
  const modal = state.modal
  return {
    modal,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RequestFormModal)
