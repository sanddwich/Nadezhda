import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ReactInputMask from 'react-input-mask'
import './RequestForm.scss'

import DatePicker from 'react-datepicker'
import ru from 'date-fns/locale/ru'
import 'react-datepicker/dist/react-datepicker.css'
import { connect } from 'react-redux'
import { RootState } from '../../Redux'
import { hideRequestModal, setModalSuccess } from '../../Redux/actions/modal'
import { setAppLoading } from '../../Redux/actions/app'

interface RequestFormProps {
  hideRequestModal: () => void
  setAppLoading: (loading: boolean) => void
  setModalSuccess: (isActive: boolean) => void
  formTitle?: string
}

interface RequestFormState {
  formData: {
    phone: string
    minDate: Date
    date: Date
    minPhoneNumbers: number
    phoneValid: boolean
    dateValid: boolean
    inputPhoneTouched: boolean
    inputDateTouched: boolean
    formValid: boolean
    loading: boolean
    formErrorMessage: string
  }
}

class RequestForm extends React.Component<RequestFormProps, RequestFormState> {
  constructor(props: RequestFormProps) {
    super(props)
    this.state = {
      formData: {
        phone: '',
        minDate: new Date(),
        date: new Date(),
        minPhoneNumbers: 10,
        phoneValid: false,
        dateValid: true,
        inputPhoneTouched: false,
        inputDateTouched: false,
        formValid: false,
        loading: false,
        formErrorMessage: '',
      },
    }
    // console.log(this.state.formData.date)
  }

  componentDidMount() {
    document.querySelectorAll('.react-datepicker__input-container').forEach((dp) => {
      const elemet = dp.querySelector('input') as HTMLElement
      elemet.setAttribute('readOnly', 'true')
    })
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
    formData.formErrorMessage = ''

    this.setState({ formData })
  }

  changeDate = (date: Date | [Date, Date] | null): void => {
    const formData = this.state.formData
    const inputDate = date as Date
    formData.date = inputDate
    inputDate === null ? (formData.dateValid = false) : (formData.dateValid = true)
    formData.formErrorMessage = ''

    this.setState({ formData })
  }

  dateTouched = (): void => {
    const formData = this.state.formData
    formData.inputDateTouched = true
    this.setState({ formData })
  }

  formReset = (): void => {
    const formData = this.state.formData
    formData.phone = ''
    formData.phoneValid = false
    formData.date = new Date()
    this.setState({ formData })
  }

  requestFormButtonHandler = (): void => {
    if (this.state.formData.phoneValid && this.state.formData.dateValid) {
      this.sendRequest()
    } else {
      const formData = this.state.formData
      formData.formErrorMessage = 'Заполните корректно поля формы'
      this.setState({ formData })
    }
  }

  convertDate = (date: Date): string => {
    const monthList: string[] = [
      'Января',
      'Февраля',
      'Марта',
      'Апреля',
      'Мая',
      'Июня',
      'Июля',
      'Августа',
      'Сентября',
      'Октября',
      'Ноября',
      'Декабря',
    ]

    return date.getDate().toString() + ' ' + monthList[date.getMonth()] + ' ' + date.getFullYear().toString() + 'г.'
  }

  successSend = (): void => {
    this.props.hideRequestModal()
    this.props.setModalSuccess(true)
  }

  sendRequest = async (): Promise<void> => {
    const formData = {
      date: this.convertDate(this.state.formData.date),
      phone: this.state.formData.phone,
    }
    this.formReset()

    const url: string = '/api/index.php'

    // console.log(formData)

    this.props.setAppLoading(true)

    try {
      const res = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
          'Content-Length': formData.toString().length.toString(),
        },
      })

      if (!res.ok) {
        throw new Error('Ошибка запроса отправки сообщения')
      }

      const resData = await res.json()
      if (resData !== 'error') {
        this.successSend()
        console.log('SUCCESS')
      } else {
        console.log('ERROR')
      }

      this.props.setAppLoading(false)
    } catch (e) {
      console.log(e)
    }
  }

  render() {
    return (
      <Container fluid className="RequestForm p-0">
        {this.props.formTitle ? <h1>{this.props.formTitle}</h1> : null}

        <Row className="RequestForm__formElements m-0">
          <Col lg={8} className="p-0">
            <Container fluid className="RequestForm__inputFields">
              <Row className="m-0">
                <Col lg={6} xs={12} className="RequestForm__input p-0">
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

                <Col lg={6} xs={12} className="RequestForm__input p-0">
                  <p>Дата брони</p>
                  <div className="inputCont d-flex justify-content-lg-start">
                    <div className="inputIcon" style={{ paddingLeft: '8px', paddingRight: '8px' }}>
                      <img src="/img/cil_calendar.svg" alt="" />
                    </div>
                    <div className="inputField">
                      <DatePicker
                        className={`${
                          this.state.formData.inputDateTouched
                            ? this.state.formData.dateValid
                              ? 'inputValid'
                              : 'inputInvalid'
                            : ''
                        }`}
                        locale={ru}
                        closeOnScroll={true}
                        dateFormat="dd.MM.yyyy"
                        selected={this.state.formData.date}
                        minDate={this.state.formData.minDate}
                        onChange={(date) => this.changeDate(date)}
                        onInputClick={() => this.dateTouched()}
                      />
                    </div>
                  </div>
                </Col>
              </Row>
              <Row className="formUnderTitle m-0">
                {this.state.formData.formErrorMessage.length > 0 ? (
                  <div className="RequestForm__errorMessage">{this.state.formData.formErrorMessage}</div>
                ) : null}

                <p>Мы свяжемся с вами, чтобы уточнить детали</p>
                <p className="RequestForm__politic">
                  Заполняя форму я подтверждаю факт своего ознакомления с{' '}
                  <a href="/politic.pdf" target="_blank">
                    политикой конфиденциальности сайта
                  </a>
                </p>
              </Row>
            </Container>
          </Col>
          <Col
            lg={4}
            className="RequestForm__button p-0 d-flex justify-content-center align-items-center"
            onClick={() => this.requestFormButtonHandler()}
          >
            Забронировать
          </Col>
        </Row>
      </Container>
    )
  }
}

const mapDispatchToProps = {
  hideRequestModal,
  setModalSuccess,
  setAppLoading,
}

const mapStateToProps = (state: RootState) => {
  const modal = state.modal
  return {
    modal,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RequestForm)
