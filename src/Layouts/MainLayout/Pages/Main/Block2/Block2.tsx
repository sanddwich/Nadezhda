import React from 'react'
import { Container } from 'react-bootstrap'
import './Block2.scss'
import DatePicker from 'react-datepicker'
import ru from 'date-fns/locale/ru'
import 'react-datepicker/dist/react-datepicker.css'

interface Block2Props {}

interface Block2State {
  formData: {
    date: Date
  }
}

class Block2 extends React.Component<Block2Props, Block2State> {
  constructor(props: Block2Props) {
    super(props)
    this.state = {
      formData: {
        date: new Date(),
      },
    }
  }

  changeDate = (date: Date | [Date, Date] | null): void => {
    const formData = this.state.formData
    const inputDate = date as Date
    formData.date = inputDate
    this.setState({ formData })
  }

  render() {
    return (
      <Container fluid className="Block2 pl-5 d-flex justify-content-start align-items-start">
        <DatePicker
          locale={ru}
          closeOnScroll={true}
          dateFormat="dd.MM.yyyy"
          selected={this.state.formData.date}
          onChange={(date) => this.changeDate(date)}
          className=""
        />
      </Container>
    )
  }
}

export default Block2
