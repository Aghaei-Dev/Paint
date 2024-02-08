import React from 'react'
import styled from '@emotion/styled'
import { useSelector, useDispatch } from 'react-redux'
import { penColors, penSizes } from '../../assets/constants'
import { changeColor, changeStrokeWidth } from '../../features/draw/drawSlice'
import { Rainbow } from '../../assets/icons'

export default function SubCenter() {
  const dispatch = useDispatch()

  const { color, activeTool, strokeWidth } = useSelector((store) => store.draw)

  const changeColorHandler = (newColor) => {
    dispatch(changeColor(newColor))
  }
  const changePenWidthHandler = (newWidth) => {
    dispatch(changeStrokeWidth(newWidth))
  }

  return (
    <Wrapper>
      {activeTool === 'pen' &&
        penColors.map((item) => {
          const { id, penColor } = item
          return (
            <Circle
              key={id}
              active={penColor === color}
              color={penColor}
              onClick={() => changeColorHandler(penColor)}
            />
          )
        })}
      <div className='stroke-width'>
        {penSizes.map((item) => {
          const { id, penSize } = item

          return (
            <StrokeCircle
              key={id}
              color={color}
              size={penSize}
              active={penSize === strokeWidth}
              onClick={() => changePenWidthHandler(penSize)}
            />
          )
        })}
      </div>
      <div className='custom'>
        <Rainbow />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'start',
  alignItems: 'center',
  gap: '.5rem',
  padding: '0.2rem .5rem',
  position: 'absolute',
  background: 'var(--white-1000)',
  top: '-30%',
  left: '50%',
  transform: 'translate(-50%,-48%)',
  height: '40px',
  width: '69%',
  borderTopLeftRadius: '13px',
  borderTopRightRadius: '13px',
  boxShadow: ' 0 0 0 0.5px var(--black-300)',
  '.stroke-width': {
    height: '100%',
    borderLeft: '1px solid var(--grey-300)',
    borderRight: '1px solid var(--grey-300)',
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'center',
    gap: '.8rem',
    padding: '0.2rem .8rem',
  },
  '.custom': {
    height: '40px',
    width: '40px',
    borderRadius: '50px',
  },
}))

const Circle = styled('span')(({ color, active }) => ({
  border: `.8rem solid ${color}`,
  borderRadius: '50%',
  cursor: 'pointer',
  position: 'relative',
  transition: '.3s border',
  '::before': {
    content: '" "',
    cursor: 'pointer',
    border: `1px solid ${active ? 'var(--grey-400)' : 'transparent'}`,
    background: 'transparent',
    width: '30px',
    height: '30px',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    borderRadius: '50%',
    transition: '.3s border',
  },
}))

const StrokeCircle = styled(Circle)(({ color, active, size }) => ({
  border: `${size}px solid ${color}`,
  '::before': {
    width: `${size * 3}px`,
    height: `${size * 3}px`,
  },
}))
