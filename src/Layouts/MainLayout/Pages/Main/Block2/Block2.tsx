import React from 'react'
import { Container } from 'react-bootstrap'
import './Block2.scss'

interface Block2Props {}

interface Block2State {}

class Block2 extends React.Component<Block2Props, Block2State> {
  

  render() {
    return (
      <Container fluid className="Block2 p-0">
        <h1>Block2</h1>        
      </Container>
    )
  }
}

export default Block2
