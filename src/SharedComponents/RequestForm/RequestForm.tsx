import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ReactInputMask from 'react-input-mask'
import './RequestForm.scss'

interface RequestFormProps {
  formTitle?: string
  clickHandler: (phone: string, date: string) => void
}

interface RequestFormState {
  formData: {
    phone: string
    date: string
    minPhoneNumbers: number
    phoneValid: boolean
    dateValid: boolean
    inputPhoneTouched: boolean
    inputDateTouched: boolean
    formValid: boolean
    loading: boolean
  }
}

class RequestForm extends React.Component<RequestFormProps, RequestFormState> {
  constructor(props: RequestFormProps) {
    super(props)
    this.state = {
      formData: {
        phone: '',
        date: '',
        minPhoneNumbers: 10,
        phoneValid: false,
        dateValid: false,
        inputPhoneTouched: false,
        inputDateTouched: false,
        formValid: false,
        loading: false,
      },
    }
  }

  phoneValidate = (phone: string): boolean => {
    let filterPhone: string = ''
    filterPhone = filterPhone + phone.match(/\d/g)?.join('')
    if (filterPhone.length < this.state.formData.minPhoneNumbers) {
      return false
    } else {
      return true
    }
  }

  onPhoneChange = (event: any): void => {
    const formData = this.state.formData
    formData.phone = event.target.value
    !formData.inputPhoneTouched && (formData.inputPhoneTouched = true)
    formData.phoneValid = this.phoneValidate(formData.phone)

    this.setState({ formData })
  }

  render() {
    return (
      <Container fluid className="RequestForm p-0">
        {this.props.formTitle ? <h1>{this.props.formTitle}</h1> : null}

        <Row className="RequestForm__formElements m-0">
          <Col lg={8} className="p-0">
            <Container fluid className="RequestForm__inputFields p-0">
              <Row className="m-0">
                <Col lg={6} className="RequestForm__input p-0">
                  <p>Номер телефона</p>
                  <div className="inputCont d-flex justify-content-start">
                    <div className="inputIcon">+7</div>
                    <div className="inputField">
                      <ReactInputMask
                        mask="(999) 999-99-99"
                        className={`RequestForm__inputField ${
                          this.state.formData.inputPhoneTouched
                            ? this.state.formData.phoneValid
                              ? 'inputValid'
                              : 'inputInvalid'
                            : null
                        } `}
                        type="tel"
                        name="phone"
                        placeholder="(___) ___-__-__"
                        value={this.state.formData.phone}
                        onChange={(event) => this.onPhoneChange(event)}
                      />
                    </div>
                  </div>
                </Col>

                <Col lg={6} className="RequestForm__input p-0">
                  <p>Номер телефона</p>
                  <div className="inputCont d-flex justify-content-start">
                    <div className="inputIcon"><img className="img-fluid" src="/img/cil_calendar.svg" alt=""/></div>
                    <div className="inputField">
                      <ReactInputMask
                        mask="(999) 999-99-99"
                        className={`RequestForm__inputField ${
                          this.state.formData.inputPhoneTouched
                            ? this.state.formData.phoneValid
                              ? 'inputValid'
                              : 'inputInvalid'
                            : null
                        } `}
                        type="tel"
                        name="phone"
                        placeholder="(___) ___-__-__"
                        value={this.state.formData.phone}
                        onChange={(event) => this.onPhoneChange(event)}
                      />
                    </div>
                  </div>
                </Col>
              </Row>
              <Row className="formUnderTitle m-0">
                <p>Мы свяжемся с вами, чтобы уточнить детали</p>
              </Row>
            </Container>
          </Col>
          <Col lg={4} className="RequestForm__button p-0"></Col>
        </Row>
      </Container>
    )
  }
}

export default RequestForm
