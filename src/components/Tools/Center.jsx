import React from 'react'
import styled from '@emotion/styled'
import { Pen, StickyNote } from '../../assets/icons'
import { useDispatch, useSelector } from 'react-redux'
import { changeCursor } from '../../features/draw/drawSlice'
import { cursorTools } from '../../assets/constants'
import { Circle, Arrow, Square, Triangle } from '../../assets/shapes'
import { SubCenterTool } from '../'
export default function Center() {
  const { cursor } = useSelector((store) => store.draw)
  const dispatch = useDispatch()

  const setCursor = (name) => {
    dispatch(changeCursor(name))
  }

  return (
    <Wrapper>
      <SubCenterTool />

      <div className='vertical-btn'>
        {cursorTools.map((item) => {
          const { id, name, icon } = item
          return (
            <button
              key={id}
              className={cursor === name ? `${name} active` : name}
              onClick={() => setCursor(name)}
            >
              {icon}
            </button>
          )
        })}
      </div>
      <div className='main'>
        <Pen />
        <article>
          <StickyNote />
        </article>
        <div className='shapes'>
          <Arrow />
          <Square />
          <Circle />
          <Triangle />
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'start',
  alignItems: 'center',
  gap: '.3rem',
  position: 'fixed',
  background: 'var(--white-1000)',
  bottom: '0',
  left: '50%',
  transform: 'translate(-50%,-20%)',
  height: '80px',
  width: '80%',
  borderRadius: '13px',
  boxShadow: ' 0 0 0 0.5px var(--black-300)',

  '.vertical-btn': {
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',

    button: {
      cursor: 'pointer',
      borderRight: '1px solid var(--black-300)',
      display: 'grid',
      placeItems: 'center',
      height: '40px',
      svg: {
        height: '100%',
      },
    },

    '.select': {
      borderTopLeftRadius: '13px',
    },
    '.hand': {
      borderBottomLeftRadius: '13px',
      svg: {
        width: '30px',
      },
    },
    '.active': {
      background: 'var(--blue-500)',
      svg: { stroke: 'white' },
    },
  },
  '.main': {
    padding: '0 4px',
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'center',

    '.pen': {
      // background: 'red',
      // maxHeight: '70px',
    },
    article: {
      // maxHeight: '70px',
      // background: 'blue',
      position: 'relative',
    },
    '.shapes': {
      display: 'grid',
      gridTemplateColumns: '35px 35px',
      gridTemplateRows: '35px 35px',
      div: {
        border: '1px solid red',
        alignSelf: 'stretch',
        display: 'grid',
        placeItems: 'center',
        svg: {
          display: 'block',
          // width: '30px',
          // height: '30px',
        },
      },
    },
  },
}))
