import styled from '@emotion/styled'
import { ArrowRight, ArrowLeft, MagPlus, MagMinus } from '../../assets/icons'
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

        <Tooltip title='Ctrl + "+"' placement='bottom'>
          <MagPlus />
        </Tooltip>

        <Tooltip title='Ctrl + "-"' placement='bottom'>
          <MagMinus />
        </Tooltip>
        <input type='color' name='' id='style1' />

        <input type='color' name='' id='style1' />
      </div>
      <Toggle />
    </Wrapper>
  )
}

const Wrapper = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gridColumn: '2 span',
  borderBottom: '1px solid var(--bg-border)',
  padding: '0 .6rem',
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
