import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { connect } from 'react-redux'
import { RootState } from '../../Redux'
import { setGalleryModal } from '../../Redux/actions/modal'
import { ModalState } from '../../Redux/interfaces/interfaces'
import './GalleryModal.scss'

interface GalleryModalProps {
  setGalleryModal: (isActive: boolean, activeImg: string) => void
  modal: ModalState
}

interface GalleryModalState {}

class GalleryModal extends React.Component<GalleryModalProps, GalleryModalState> {
  bodyBlock = (): void => {
    document.querySelector('body')?.classList.add('modal-open')
  }

  bodyUnBlock = (): void => {
    document.querySelector('body')?.classList.remove('modal-open')
  }  

  closeModal = (imgName: string): void => {
    this.props.setGalleryModal(false, imgName)
    this.bodyUnBlock()
  }

  render() {
    this.props.modal.galleryModal.isActive ? this.bodyBlock() : this.bodyUnBlock()
    return (
      <Container fluid className="GalleryModal p-0 d-flex align-items-center justify-content-center">
        <div className="GalleryModal__body">
          <Row className="GalleryModal__closeCont m-0 d-flex justify-content-end">
            <div className="GalleryModal__closeBtn" onClick={() => this.closeModal('')}>
              <img src="/img/close.svg" alt="" />
            </div>
          </Row>
          <Row className="GalleryModal__Content m-0">
            <img className="img-fluid" src={`/img/gallery/${this.props.modal.galleryModal.activeImg}`} alt="" />
          </Row>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(GalleryModal)
