interface Config {
  weatherApi: string
  coordinates: {
    center: number[]
    zoom: number
  }
  region: string
  raion: string
  place: string
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
}

export default Config