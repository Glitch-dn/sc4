export type RollRsesponse = Roll[]

export interface Roll {
  albumId: number
  roll: RollDetail[]
}

export interface RollDetail {
  id: number
  title: string
  url: string
  thumbnailUrl: string
}
