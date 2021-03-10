import React from 'react'
import { Container } from 'react-bootstrap'
import { connect } from 'react-redux'
import { RootState } from '../../Redux'
import { setAppLoading } from '../../Redux/actions/app'
import { AppState } from '../../Redux/interfaces/interfaces'
import './FullScreenLoading.scss'

interface FullScreenLoadingProps {
  setAppLoading: (loading: boolean) => void
  app: AppState
}

interface FullScreenLoadingState {}

class FullScreenLoading extends React.Component<FullScreenLoadingProps, FullScreenLoadingState> {
  bodyBlock = (): void => {
    document.querySelector('body')?.classList.add('modal-open')
  }

  bodyUnBlock = (): void => {
    document.querySelector('body')?.classList.remove('modal-open')
  }

  closeModal = (): void => {
    this.props.setAppLoading(false)
    this.bodyUnBlock()
  }

  render() {
    this.props.app.loading ? this.bodyBlock() : this.bodyUnBlock()
    return (
      <Container fluid className="FullScreenLoading p-0 d-flex align-items-center justify-content-center">
        <div className="FullScreenLoading__loaderCont">
          <div className="lds-roller">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </Container>
    )
  }
}

const mapDispatchToProps = {
  setAppLoading,
}

const mapStateToProps = (state: RootState) => {
  const app = state.app
  return {
    app,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FullScreenLoading)
