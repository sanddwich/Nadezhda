import React from 'react'
import { Container, Row, Table } from 'react-bootstrap'
import { Element } from 'react-scroll'
import './Block5.scss'

interface ServiceProps {
  serviceName: string
  price1: string
  price2: string
  price3: string
}

interface Service {
  name: string
  isActive: boolean
  titleList: string[]
  serviceProps: ServiceProps[]
}

interface Block5Props {}

interface Block5State {
  serviceList: Service[]
}

class Block5 extends React.Component<Block5Props, Block5State> {
  constructor(props: Block5Props) {
    super(props)
    this.state = {
      serviceList: [
        {
          name: 'Проживание',
          isActive: true,
          titleList: ['Только проживание', 'Проживание +HB', 'Проживание +FB'],
          serviceProps: [
            {
              serviceName: 'Проживание в номере «Стандарт» при условии 2-местного размещения',
              price1: '3 400 руб.',
              price2: '5 400 руб.',
              price3: '6 400 руб.',
            },
            {
              serviceName: 'Проживание в номере «Стандарт» при условии 4-местного размещения',
              price1: '6 000 руб.',
              price2: '10 000 руб.',
              price3: '12 000 руб.',
            },
            {
              serviceName: 'Дети до 6 лет',
              price1: 'Бесплатно',
              price2: '500 руб.',
              price3: '700 руб.',
            },
            {
              serviceName: 'Дети от 6 до 12 лет',
              price1: '1 200 руб.',
              price2: '1 900 руб.',
              price3: '2 250 руб.',
            },
            {
              serviceName: 'Дополнительное место старше 12 лет',
              price1: '1 000 руб.',
              price2: '2 000 руб.',
              price3: '2 500 руб.',
            },
            {
              serviceName: 'Кемпинг (1 палатка)',
              price1: '500 руб.',
              price2: '1 500 руб.',
              price3: '2 000 руб.',
            },
            {
              serviceName: 'Однодневное пребывание без заселения (вариант «Пикник»)',
              price1: '500 руб.',
              price2: '',
              price3: '',
            },
          ],
        },
        {
          name: 'Аренда флота',
          isActive: false,
          titleList: ['1_чел.в_лодке', '2_чел.в_лодке', '3_чел.в_лодке'],
          serviceProps: [
            {
              serviceName: 'Катер с четырехтактным мотором 60 л/с в сопровождении егеря (не более 8ч.)',
              price1: '4 000 руб.',
              price2: '4 000 руб.',
              price3: '5 000 руб.',
            },
            {
              serviceName:
                'Превышении времени по аренде катера с четырехтактным мотором 60 л/с в сопровождении егеря более 8ч.',
              price1: '400 руб./ч',
              price2: '400 руб./ч',
              price3: '400 руб./ч',
            },
            {
              serviceName: 'Гребная лодка',
              price1: '1 000 руб./день',
              price2: '1 000 руб./день',
              price3: '',
            },
            {
              serviceName: 'Превышении времени по аренде гребной лодки более 8ч.',
              price1: '400 руб./ч',
              price2: '400 руб./ч',
              price3: '400 руб./ч',
            },
            {
              serviceName: 'Прогулка на катере с четырехтактным мотором 60 л/с по окрестностям',
              price1: '1 000 руб./ч',
              price2: '1 000 руб./ч',
              price3: '1 000 руб./ч',
            },
            {
              serviceName: 'Экскурсия на лотосовые поля',
              price1: '4 500 руб.',
              price2: '4 500 руб.',
              price3: '4 500 руб.',
            },
          ],
        },
        {
          name: 'Дополнительные услуги',
          isActive: false,
          titleList: ['Стоимость', '', ''],
          serviceProps: [
            {
              serviceName: 'Баня на дровах (до 5-ти человек)',
              price1: '1 000 руб./час',
              price2: '',
              price3: '',
            },
            {
              serviceName: 'Веник',
              price1: '300 руб./час',
              price2: '',
              price3: '',
            },
            {
              serviceName: 'Дрова для мангала (20 дм3)',
              price1: '300 руб.',
              price2: '',
              price3: '',
            },
            {
              serviceName: 'Замораживание улова',
              price1: '20 руб./кг',
              price2: '',
              price3: '',
            },
          ],
        },
      ],
    }
  }

  selectMenu = (name: string): void => {
    const serviceList = this.state.serviceList.map((service) => {
      if (service.name === name) {
        service.isActive = true
      } else {
        service.isActive = false
      }

      return service
    })

    this.setState({ serviceList })
  }

  render() {
    return (
      <Element name="Block5">
        <Container className="Block5">
          <h1>Прайс-лист</h1>
          <Row className="Block5__serviceMenu m-0">
            {this.state.serviceList.map((service, index) => {
              return (
                <div
                  key={index}
                  className={`Block5__serviceMenuEl ${service.isActive ? 'isActive' : ''}`}
                  onClick={() => this.selectMenu(service.name)}
                >
                  {service.name}
                </div>
              )
            })}
          </Row>
          <Table className="Block5__Table" responsive>
            <thead>
              {this.state.serviceList.map((service, index) => {
                if (service.isActive) {
                  return (
                    <tr key={index}>
                      <th>Предоставляемая услуга</th>
                      {service.titleList.map((title, index2) => {
                        return <th key={index2}>{title}</th>
                      })}
                    </tr>
                  )
                }
              })}
            </thead>
            <tbody>
              {this.state.serviceList.map((service, index) => {
                if (service.isActive) {
                  return service.serviceProps.map((prop, index) => {
                    return (
                      <tr className="Block5__tr" key={index}>
                        <td>{prop.serviceName}</td>
                        <td className="text-center">
                          {prop.price1}
                        </td>
                        <td className="text-center">
                          {prop.price2}
                        </td>
                        <td className="text-center">
                          {prop.price3}
                        </td>
                      </tr>
                    )
                  })
                }
              })}
            </tbody>
          </Table>
        </Container>
      </Element>
    )
  }
}

export default Block5
