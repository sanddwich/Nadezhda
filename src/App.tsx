import React from 'react'
import './App.scss'
import { Container } from 'react-bootstrap'
import { Route, Switch } from 'react-router-dom'
import AdminLayout from './Layouts/AdminLayout/AdminLayout'
import MainLayout from './Layouts/MainLayout/MainLayout'
import { RootState } from './Redux'
import { connect } from 'react-redux'
import { ModalState } from './Redux/interfaces/interfaces'
import RequestFormModal from './SharedComponents/RequestFormModal/RequestFormModal'
import SuccessMessage from './SharedComponents/SuccessMessage/SuccessMessage'
import GalleryModal from './SharedComponents/GalleryModal/GalleryModal'

interface AppProps {
  modal: ModalState
}

interface AppState {}

class App extends React.Component<AppProps, AppState> {
  render() {
    return (
      <Container fluid className="App p-0">
        {this.props.modal.modalRequestForm.isActive ? <RequestFormModal /> : null}
        {this.props.modal.galleryModal.isActive ? <GalleryModal /> : null}        
        {this.props.modal.modalSuccessMessage.isActive ? <SuccessMessage /> : null}

        <Switch>
          <Route path="/admin" component={AdminLayout} />
          <Route path="/" component={MainLayout} />
        </Switch>
      </Container>
    )
  }
}

const mapDispatchToProps = {}

const mapStateToProps = (state: RootState) => {
  const modal = state.modal
  return {
    modal,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
