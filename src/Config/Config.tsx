interface Config {
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
}

const lat: number = 45.968564
const lon: number = 48.12355

const Config: Config = {
  weatherApi: 'a9d82ace530141d7dadbe819bab3c6f7',
  coordinates: {
    center: [45.968564, 48.12355],
    zoom: 14,
  },
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