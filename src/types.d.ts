type TStatus ='alive'| 'dead'|'unknown'
type TGender = 'male' | 'female' | 'genderless' | 'unknown'


declare interface ICharacter {
      id: number
      name: string
      status: TStatus
      species: string
      type: string
      gender: TGender
      origin: {
        name: string
        url: string
      },
      location: {
        name: string
        url: string
      },
      image?: string
      episode: string[]
      url: string
      created: string

}

declare interface IEpisode {
  id: number
  name: string
  air_date: string
  episode: string
  characters: string[]
  url: string
  created: string
 }