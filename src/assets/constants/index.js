import { Cursor, Hand } from '../icons'
import { firstCover, secondCover, thirdCover } from '../images'
import { firstMusic, secondMusic, thirdMusic } from '../sounds'

export const cursorTools = [
  { id: 0, name: 'select', icon: <Cursor /> },
  { id: 1, name: 'hand', icon: <Hand /> },
]

export const penColors = [
  { id: 0, penColor: 'var( --blue-400)' },
  { id: 1, penColor: 'var(--green-400)' },
  { id: 2, penColor: 'var(--grey-500)' },
  { id: 3, penColor: 'var( --orange-400)' },
  { id: 4, penColor: 'var(  --pale-blue-400)' },
  { id: 5, penColor: 'var(   --pale-pink-400)' },
  { id: 6, penColor: 'var( --purple-400)' },
  { id: 7, penColor: 'var( --red-400)' },
]

export const penSizes = [
  { id: 0, penSize: 4 },
  { id: 1, penSize: 6 },
  { id: 2, penSize: 8 },
  { id: 3, penSize: 10 },
]

export const dancingBarsNumber = 25

export const musicAndCoverArray = [
  { id: 0, cover: firstCover, file: firstMusic },
  { id: 1, cover: secondCover, file: secondMusic },
  { id: 2, cover: thirdCover, file: thirdMusic },
]
