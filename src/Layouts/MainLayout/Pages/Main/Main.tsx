import React from 'react'
import { Container } from 'react-bootstrap'
import './Main.scss'
import TmpPage from './TmpPage/TmpPage'

interface MainProps {}

interface MainState {}

class Main extends React.Component<MainProps, MainState> {
  render() {
    return (
      <Container fluid className="Main p-0">
        
        <TmpPage />

      </Container>
    )
  }
}

export default Main