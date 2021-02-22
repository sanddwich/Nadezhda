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
          serviceProps: [
            {
              serviceName: 'Проживание в номере «Стандарт» при условии 2-местного размещения',
              price1: '3 400',
              price2: '5 400',
              price3: '6 400',
            },
            {
              serviceName: 'Проживание в номере «Стандарт» при условии 4-местного размещения',
              price1: '6 000',
              price2: '10 000',
              price3: '12 000',
            },
            {
              serviceName: 'Дети до 6 лет',
              price1: 'Бесплатно',
              price2: '500',
              price3: '700',
            },
            {
              serviceName: 'Дети от 6 до 12 лет',
              price1: '1 200',
              price2: '1 900',
              price3: '2 250',
            },
            {
              serviceName: 'Дополнительное место старше 12 лет',
              price1: '1 000',
              price2: '2 000',
              price3: '2 500',
            },
            {
              serviceName: 'Кемпинг (1 палатка)',
              price1: '500',
              price2: '1 500',
              price3: '2 000',
            },
            {
              serviceName: 'Однодневное пребывание без заселения (вариант «Пикник»)',
              price1: '500',
              price2: '',
              price3: '',
            },
          ],
        },
        {
          name: 'Аренда флота',
          isActive: false,
          serviceProps: [
            {
              serviceName: '',
              price1: '',
              price2: '',
              price3: '',
            },
            {
              serviceName: '',
              price1: '',
              price2: '',
              price3: '',
            },
            {
              serviceName: '',
              price1: '',
              price2: '',
              price3: '',
            },
            {
              serviceName: '',
              price1: '',
              price2: '',
              price3: '',
            },
            {
              serviceName: '',
              price1: '',
              price2: '',
              price3: '',
            },
            {
              serviceName: '',
              price1: '',
              price2: '',
              price3: '',
            },
            {
              serviceName: '',
              price1: '',
              price2: '',
              price3: '',
            },
          ],
        },
        {
          name: 'Дополнительные услуги',
          isActive: false,
          serviceProps: [
            {
              serviceName: '',
              price1: '',
              price2: '',
              price3: '',
            },
            {
              serviceName: '',
              price1: '',
              price2: '',
              price3: '',
            },
            {
              serviceName: '',
              price1: '',
              price2: '',
              price3: '',
            },
            {
              serviceName: '',
              price1: '',
              price2: '',
              price3: '',
            },
            {
              serviceName: '',
              price1: '',
              price2: '',
              price3: '',
            },
            {
              serviceName: '',
              price1: '',
              price2: '',
              price3: '',
            },
            {
              serviceName: '',
              price1: '',
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
            <tr>
              <th>Предоставляемая услуга</th>
              <th>Только проживание</th>
              <th>Проживание +HB</th>
              <th>Проживание +FB</th>
            </tr>
          </thead>
          <tbody>
            {this.state.serviceList.map((service, index) => {
              if (service.isActive) {
                return service.serviceProps.map((prop, index) => {
                  return (
                    <tr className="Block5__tr" key={index}>
                      <td>{prop.serviceName}</td>
                      <td className="text-center">
                        {prop.price1} {prop.price1 !== '' && prop.price1 !== 'Бесплатно' ? 'рублей' : ''}
                      </td>
                      <td className="text-center">
                        {prop.price2} {prop.price2 !== '' && prop.price2 !== 'Бесплатно' ? 'рублей' : ''}
                      </td>
                      <td className="text-center">
                        {prop.price3} {prop.price3 !== '' && prop.price3 !== 'Бесплатно' ? 'рублей' : ''}
                      </td>
                    </tr>
                  )
                })
              }
            })}
          </tbody>
        </Table>
      </Container></Element>
    )
  }
}

export default Block5
