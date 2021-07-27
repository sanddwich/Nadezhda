import ProgramInterface from "../Interfaces/ProgramInterface"

interface ConfigInterface {
  weatherApi: string
  coordinates: {
    center: number[]
    zoom: number
  }
  region: string
  raion: string
  place: string
  deeSite: string
  images: string[]
  programs: ProgramInterface[]
}

// const lat: number = 45.968564
// const lon: number = 48.12355

const Config: ConfigInterface = {
  weatherApi: 'a9d82ace530141d7dadbe819bab3c6f7',
  coordinates: {
    center: [45.968564, 48.12355],
    zoom: 14,
  },
  programs: [
    {
      images: ['/img/lotos1.png'],
      name: 'тур «Лотосовые поля»',
      prices: [
        {green: '2000 руб', black: ' – для взрослого', rewerse: false},
        {green: '1500 руб', black: ' – от 3 до 10 лет включительно', rewerse: false},
        {green: ' бесплатно', black: 'Дети до 3 лет', rewerse: true},
      ],
      programElements: [
        {time: '9:00', title: [
          {name: 'Выезд на комфортабельном автобусе от Центрального входа Кремля.'},
        ]},
        {time: '10:20', title: [
          {name: 'Прибытие на базу отдыха «Надежда»'},
        ]},        
        {time: '10:40', title: [
          {name: 'Посадка в лодки'},
          {name: '2-часовая  экскурсия на лотосовые поля, знакомство с флорой и фауной дельты волги'},
        ]},        
        {time: '12:40', title: [
          {name: 'Возвращение с экскурсии на базу'},
          {name: 'Обед', dopInfo: [
            '• уха из частиковых пород',
            '• плов',
            '• овощная нарезка',
            '• напиток',
            '• выпечка',
          ]},
        ]},        
        {time: '14:00', title: [
          {name: 'Отдых на территории базы ', dopInfo: [
            '• купание в бассейне и на пляже',
            '• солнечные ванны',
            '• рыбалка с пирса',
            '• детская площадка',
            '• спортивные игры: волейбол, мини футбол, бадментон, настольный тенис, дартс, бильярд',
          ]},
        ]},
      ]
    }
  ],
  region: 'Астраханская область',
  raion: 'Камызякский район',
  place: 'с. Жан-Аул',
  deeSite: 'https://deedesign.ru',
  images: [
    '1.jpg',
    '2.jpg',
    '3.jpg',
    '4.jpg',
    '5.jpg',
    '6.jpg',
    '7.jpg',
    '8.jpg',
    '9.jpg',
    '10.jpg',
    '11.jpg',
    '12.jpg',
    '13.jpg',
    '14.jpg',
    '15.jpg',
    '16.jpg',
    '17.jpg',
    '18.jpg',
    '19.jpg',
    '20.jpg',
    '21.jpg',
    '22.jpg',
    '23.jpg',
    '24.jpg',
    '25.jpg',
  ]
}

export default Config