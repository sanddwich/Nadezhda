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
        className="ImageRectangle hvr-grow p-0 d-flex justify-content-center align-items-center"
        style={{
          height: this.props.height,
          backgroundImage: `url("${this.props.img}")`,
          backgroundSize: 'cover',
          width: this.props.width ? this.props.width : '',
        }}
      >
        <div className="ImageRectangle__chid">{this.props.children}</div>
      </Container>
    )
  }
}

export default ImageRectangle
