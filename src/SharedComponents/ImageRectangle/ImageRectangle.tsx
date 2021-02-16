import React from 'react'
import { Container } from 'react-bootstrap'
import './ImageRectangle.scss'

interface ImageRectangleProps {
  height: string
  img: string
  width?: string
}

interface ImageRectangleState {}

class ImageRectangle extends React.Component<ImageRectangleProps, ImageRectangleState> {
  render() {
    return (
      <Container
        fluid
        className="ImageRectangle p-0"
        style={{
          height: this.props.height,
          backgroundImage: `url("${this.props.img}")`,
          width: this.props.width ? this.props.width : '',
        }}
      >
        {this.props.children}
      </Container>
    )
  }
}

export default ImageRectangle
