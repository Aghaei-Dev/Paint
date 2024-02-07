import styled from '@emotion/styled'
import { ArrowRight, ArrowLeft } from '../../assets/icons'
import { Toggle, Tooltip } from '../'

export default function Top() {
  return (
    <Wrapper>
      <div className='one'>
        <Tooltip title='Ctrl + Z' placement='bottom'>
          <ArrowLeft />
        </Tooltip>

        <Tooltip title='Ctrl + Y' placement='bottom'>
          <ArrowRight />
        </Tooltip>
        <Tooltip title='Ctrl + Y' placement='bottom'></Tooltip>
      </div>
      <Toggle />
    </Wrapper>
  )
}

const Wrapper = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderBottom: '1px solid var(--grey-300)',
  padding: '.2rem .6rem',
  '.one': {
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'center',
    gap: '1rem',
  },
  svg: {
    width: '25px',
    height: '25px',
    cursor: 'pointer',
  },
}))
