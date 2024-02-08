import React from 'react'
import styled from '@emotion/styled'
import { Minus, Plus } from '../../assets/icons'
import { Tooltip } from '../Assistance'
import { useSelector, useDispatch } from 'react-redux'
import {
  changeZoomLevel,
  changeZoomLevelByInp,
} from '../../features/global/globalSlice'
export default function Zoom() {
  const { zoomLevel } = useSelector((store) => store.global)
  const dispatch = useDispatch()
  const zoomLevelBtnHandler = (value) => {
    dispatch(changeZoomLevel(value))
  }
  const zoomLevelInpHandler = (value) => {
    dispatch(changeZoomLevelByInp(value))
  }
  return (
    <Wrapper>
      <Tooltip title='zoom in ctrl + +' placement='bottom'>
        <button
          className='plus'
          onClick={() => zoomLevelBtnHandler('INCREASE')}
        >
          <Plus />
        </button>
      </Tooltip>
      <Tooltip title={`${zoomLevel} %`} placement='left'>
        <div className='slider'>
          <input
            type='range'
            value={zoomLevel}
            min={10}
            max={200}
            step={0.1}
            onChange={(e) => zoomLevelInpHandler(+e.target.value)}
          />
        </div>
      </Tooltip>

      <Tooltip title='zoom out ctrl + -'>
        <button
          className='minus'
          onClick={() => zoomLevelBtnHandler('DECREASE')}
        >
          <Minus />
        </button>
      </Tooltip>
    </Wrapper>
  )
}

const Wrapper = styled('div')(() => ({
  position: 'fixed',
  right: '2%',
  bottom: '0',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexDirection: 'column',
  background: 'var(--white-1000)',
  transform: 'translate(0%,-20%)',
  width: '3%',
  borderRadius: '17px',
  boxShadow: ' 0 0 0 0.5px var(--black-300)',
  svg: { width: '15px' },
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '.4rem',
    cursor: 'pointer',
  },
  '.plus': {
    borderRadius: '17px 17px 0 0',
  },
  '.minus': {
    borderRadius: '0 0 17px 17px ',
  },
  '.slider': {
    height: '68px',
    width: '32px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    input: {
      transform: 'rotate(270deg)',
      background: 'var(--grey-200)',
      width: '68px',
      height: '2px',
      borderRadius: '5px',
      appearance: 'none',
    },
  },
}))
